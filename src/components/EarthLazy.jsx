import { lazy, useEffect, useState } from 'react';

// Defer Three.js + Earth model until idle so it doesn't block hero LCP.
const EarthImpl = lazy(() => import('./Earth'));

export default function EarthCanvas() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const schedule = (cb) =>
      typeof window.requestIdleCallback === 'function'
        ? window.requestIdleCallback(cb, { timeout: 2000 })
        : setTimeout(cb, 600);

    const cancel = (id) =>
      typeof window.cancelIdleCallback === 'function'
        ? window.cancelIdleCallback(id)
        : clearTimeout(id);

    const id = schedule(() => setReady(true));
    return () => cancel(id);
  }, []);

  if (!ready) return null;
  return <EarthImpl />;
}
