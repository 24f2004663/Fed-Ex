'use client';

import React, { useState } from 'react';
import { PieChart, TrendingUp, CheckCircle, Database } from 'lucide-react';
import { useData } from '@/context/DataContext';

export default function AnalyticsPage() {
    const { currentDataset, loadData, isLoading } = useData();

    // effectiveConnected logic: if dataset is not empty, we are 'connected'
    const isConnected = currentDataset !== 'empty';

    const handleConnect = () => {
        // Since the user is on Analytics page, let's load Set 1 as default 'Connect' action
        loadData('set1');
    };

    return (
        <div className="animate-fade-in">
            <h1 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: 8 }}>Deep Analytics</h1>
            <p style={{ color: 'var(--text-muted)', marginBottom: 32 }}>Advanced insights into recovery performance and trends.</p>

            {!isConnected ? (
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
                        Connect to the data lake to visualize trends.
                    </p>
                    <button
                        className="btn btn-primary"
                        onClick={handleConnect}
                        disabled={isLoading}
                    >
                        {isLoading ? 'Connecting...' : 'Connect Data Source'}
                    </button>
                </div>
            ) : (
                <div className="animate-fade-in">
                    {/* Success Banner */}
                    <div style={{
                        background: '#ECFDF5',
                        border: '1px solid #10B981',
                        borderRadius: 12,
                        padding: 16,
                        marginBottom: 32,
                        display: 'flex',
                        alignItems: 'center',
                        gap: 12,
                        color: '#047857'
                    }}>
                        <CheckCircle size={24} />
                        <div>
                            <div style={{ fontWeight: 600 }}>Data Source Connected</div>
                            <div style={{ fontSize: '0.9rem' }}>Successfully loaded 50,000+ historical records from Enterprise Data Warehouse.</div>
                        </div>
                    </div>

                    {/* Charts Grid */}
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
                        <div className="card" style={{ padding: 24, height: 300, display: 'flex', flexDirection: 'column', gap: 16 }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <h3 style={{ fontWeight: 600 }}>Recovery Success Rate</h3>
                                <Database size={16} color="var(--text-muted)" />
                            </div>
                            <div style={{ flex: 1, display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: 8 }}>
                                {[35, 45, 40, 60, 55, 75, 80].map((h, i) => (
                                    <div key={i} style={{ width: '100%', height: `${h}%`, background: 'var(--primary)', opacity: 0.2 + (i * 0.1), borderRadius: '4px 4px 0 0' }} />
                                ))}
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                                <span>Jan</span><span>Feb</span><span>Mar</span><span>Apr</span><span>May</span><span>Jun</span><span>Jul</span>
                            </div>
                        </div>

                        <div className="card" style={{ padding: 24, height: 300, display: 'flex', flexDirection: 'column', gap: 16 }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <h3 style={{ fontWeight: 600 }}>Agency Performance Distribution</h3>
                                <PieChart size={16} color="var(--text-muted)" />
                            </div>
                            <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <div style={{
                                    width: 180,
                                    height: 180,
                                    borderRadius: '50%',
                                    background: 'conic-gradient(var(--primary) 0% 40%, var(--secondary) 40% 70%, #10B981 70% 100%)',
                                    position: 'relative'
                                }}>
                                    <div style={{ position: 'absolute', inset: 30, background: 'white', borderRadius: '50%' }} />
                                </div>
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'center', gap: 16, fontSize: '0.85rem' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}><div style={{ width: 8, height: 8, background: 'var(--primary)', borderRadius: '50%' }} /> Alpha</div>
                                <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}><div style={{ width: 8, height: 8, background: 'var(--secondary)', borderRadius: '50%' }} /> Swift</div>
                                <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}><div style={{ width: 8, height: 8, background: '#10B981', borderRadius: '50%' }} /> Zenith</div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
