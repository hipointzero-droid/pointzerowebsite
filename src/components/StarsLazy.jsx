import { lazy, useEffect, useState, Component } from 'react';

// Defer Three.js (~800KB) until after first paint so it doesn't block LCP.
const StarsImpl = lazy(() => import('./Stars'));

class StarsErrorBoundary extends Component {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) return null;
    return this.props.children;
  }
}

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
  return (
    <StarsErrorBoundary>
      <StarsImpl />
    </StarsErrorBoundary>
  );
}
