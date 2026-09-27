import React from 'react';
import { pick } from '../lib/i18n.js';

export class AppErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, info: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, info) {
    console.error('App ErrorBoundary caught an error', error, info);
    this.setState({ info });
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ padding: '40px', background: 'var(--bg, #1e1e1e)', color: 'var(--text, #fff)', minHeight: '100vh', boxSizing: 'border-box' }}>
          <div style={{ background: '#7f1d1d', padding: '20px', borderRadius: '12px', border: '2px solid #ef4444' }}>
            <h1 style={{ margin: '0 0 16px 0', fontSize: '24px' }}>Algo ha fallado en la pantalla 💥</h1>
            <p style={{ margin: '0 0 16px 0' }}>La aplicación ha encontrado un error inesperado al dibujar la interfaz. Toma una captura de esta pantalla y dásela a la IA para que lo arregle.</p>
            <pre style={{ background: '#450a0a', padding: '16px', borderRadius: '8px', overflowX: 'auto', margin: 0, fontSize: '13px', lineHeight: 1.5 }}>
              {this.state.error && this.state.error.toString()}
              <br/><br/>
              {this.state.info && this.state.info.componentStack}
            </pre>
            <button 
              onClick={() => window.location.reload()}
              style={{ marginTop: '16px', background: '#3b82f6', color: '#fff', border: 'none', padding: '8px 16px', borderRadius: '8px', cursor: 'pointer' }}
            >
              {pick('Recargar la app', 'Reload app')}
            </button>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}
