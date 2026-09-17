import { useEffect, useState } from 'react';
import { getJob, subscribe } from './aiJobs.js';

// Engancha un componente a un trabajo del módulo aiJobs. Al montarse coge el
// estado que haya (a medias, terminado o vacío) y se suscribe a los cambios,
// así que volver a la pantalla es como no haberse ido.
export function useAiJob(clave) {
  const [estado, setEstado] = useState(() => getJob(clave));
  useEffect(() => {
    setEstado(getJob(clave));
    return subscribe(clave, setEstado);
  }, [clave]);
  return estado;
}
