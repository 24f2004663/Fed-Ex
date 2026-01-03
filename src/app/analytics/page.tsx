import React from 'react';
import { PieChart, TrendingUp } from 'lucide-react';

export default function AnalyticsPage() {
    return (
        <div className="animate-fade-in">
            <h1 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: 8 }}>Deep Analytics</h1>
            <p style={{ color: 'var(--text-muted)', marginBottom: 32 }}>Advanced insights into recovery performance and trends.</p>

            <div style={{
                background: 'white',
                padding: 48,
                borderRadius: 16,
                border: '1px solid var(--border-light)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 24,
                minHeight: 400
            }}>
                <div style={{ padding: 24, background: '#F3E8FF', borderRadius: '50%' }}>
                    <TrendingUp size={48} color="var(--primary)" />
                </div>
                <h2 style={{ fontSize: '1.5rem', fontWeight: 600 }}>Analytics Engine Ready</h2>
                <p style={{ color: 'var(--text-muted)', maxWidth: 500, textAlign: 'center' }}>
                    Real-time data modeling and predictive analytics modules are initialized.
                    Select a dataset from the sidebar to visualize trends.
                </p>
                <button className="btn btn-primary">Connect Data Source</button>
            </div>
        </div>
    );
}
