import { lazy, useEffect, useState } from 'react';

// Defer Three.js (~800KB) until after first paint so it doesn't block LCP.
// The Stars module is only imported when the component is actually rendered
// AND the browser is idle, which happens after the critical hero content paints.
const StarsImpl = lazy(() => import('./Stars'));

export default function StarsCanvas() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const schedule = (cb) =>
      typeof window.requestIdleCallback === 'function'
        ? window.requestIdleCallback(cb, { timeout: 1500 })
        : setTimeout(cb, 400);

    const cancel = (id) =>
      typeof window.cancelIdleCallback === 'function'
        ? window.cancelIdleCallback(id)
        : clearTimeout(id);

    const id = schedule(() => setReady(true));
    return () => cancel(id);
  }, []);

  if (!ready) return null;
  return <StarsImpl />;
}
