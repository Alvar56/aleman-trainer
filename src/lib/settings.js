import { storage, KEYS } from './storage.js';
import { SIN_IA } from './modo.js';

const DEFAULT = {
  dailyGoalXp: 40,
  sessionSize: 10,
  aiEnabled: false,
  aiProvider: 'claude-local', // 'claude-local' | 'gemini' | 'openai-compat'
  aiKey: '',
  aiModel: 'gemini-2.5-flash',
  // Fraccion de la tanda que genera la IA. Arranca en 0: por defecto se
  // practica con las plantillas, que salen al instante y no gastan cuota.
  // Quien quiera IA la sube a mano.
  aiShare: 0,
  // corta | media | larga. Intervenciones de la conversacion generada.
  dialogLargo: 'media',
  // Mostrar u ocultar las etiquetas visuales de los atajos de teclado (.op-tecla)
  showShortcuts: true
};

export function applyShortcutsVisibility(visible) {
  if (typeof document === 'undefined' || !document.body) return;
  if (visible === false) {
    document.body.classList.add('sin-atajos');
  } else {
    document.body.classList.remove('sin-atajos');
  }
}

// El proveedor 'claude-local' usa el puente de dev (CLI `claude`) y no
// necesita API key; el resto sí.
export function aiAvailable(s = getSettings()) {
  // En la version sin IA no hay nada que comprobar: no esta compilada.
  if (SIN_IA) return false;
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
  const updated = storage.update(KEYS.settings, DEFAULT, (s) => ({ ...DEFAULT, ...s, ...patch }));
  if (typeof patch.showShortcuts !== 'undefined') {
    applyShortcutsVisibility(updated.showShortcuts !== false);
  }
  return updated;
}

// Aplicar al arrancar
if (typeof document !== 'undefined') {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      applyShortcutsVisibility(getSettings().showShortcuts !== false);
    });
  } else {
    applyShortcutsVisibility(getSettings().showShortcuts !== false);
  }
}

export const SETTINGS_DEFAULT = DEFAULT;
