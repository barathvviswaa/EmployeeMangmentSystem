import React from 'react';

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false, error: null, errorInfo: null };
    }

    static getDerivedStateFromError(error) {
        // Update state so the next render will show the fallback UI.
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        // You can also log the error to an error reporting service
        console.error("Uncaught error:", error, errorInfo);
        this.setState({ error, errorInfo });
    }

    render() {
        if (this.state.hasError) {
            // You can render any custom fallback UI
            return (
                <div style={{ padding: '2rem', color: '#fff', textAlign: 'center', background: '#1e293b', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                    <h1 style={{ color: '#ef4444' }}>Something went wrong.</h1>
                    <p>The Admin Panel crashed. This is likely due to invalid data in Local Storage.</p>
                    <details style={{ whiteSpace: 'pre-wrap', marginTop: '1rem', background: 'rgba(0,0,0,0.3)', padding: '1rem', borderRadius: '8px', textAlign: 'left', maxWidth: '800px', overflow: 'auto' }}>
                        {this.state.error && this.state.error.toString()}
                        <br />
                        {this.state.errorInfo && this.state.errorInfo.componentStack}
                    </details>
                    <button
                        onClick={() => {
                            localStorage.clear();
                            window.location.reload();
                        }}
                        style={{ marginTop: '2rem', padding: '1rem 2rem', background: '#ef4444', color: 'white', border: 'none', borderRadius: '8px', cursor: 'pointer', fontWeight: 'bold' }}
                    >
                        ⚠️ Clear Data & Reset App
                    </button>
                    <p style={{ marginTop: '0.5rem', color: '#94a3b8', fontSize: '0.8rem' }}>Warning: This will delete all employees and history.</p>
                </div>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
