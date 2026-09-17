import { storage, KEYS } from './storage.js';

const DEFAULT = {
  dailyGoalXp: 40,
  sessionSize: 10,
  sound: true,
  aiEnabled: false,
  aiProvider: 'claude-local', // 'claude-local' | 'gemini' | 'openai-compat'
  aiKey: '',
  aiModel: 'gemini-2.5-flash',
  // Fraccion de la tanda que genera la IA. Arranca en 0: por defecto se
  // practica con las plantillas, que salen al instante y no gastan cuota.
  // Quien quiera IA la sube a mano.
  aiShare: 0
};

// El proveedor 'claude-local' usa el puente de dev (CLI `claude`) y no
// necesita API key; el resto sí.
export function aiAvailable(s = getSettings()) {
  if (!s.aiEnabled) return false;
  if (s.aiProvider === 'claude-local') return true;
  return !!s.aiKey;
}

export function getSettings() {
  const saved = storage.get(KEYS.settings, {});
  // Permitir cualquier modelo que el usuario escriba, y migrar el viejo 1.5 que ya no existe
  if (saved.aiModel === 'gemini-1.5-flash') {
    saved.aiModel = 'gemini-2.5-flash';
  }
  return { ...DEFAULT, ...saved };
}

export function setSettings(patch) {
  return storage.update(KEYS.settings, DEFAULT, (s) => ({ ...DEFAULT, ...s, ...patch }));
}

export const SETTINGS_DEFAULT = DEFAULT;
