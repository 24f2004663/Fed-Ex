'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
    const router = useRouter();
    const [role, setRole] = useState('admin');

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        router.push('/');
    };

    return (
        <div style={{
            height: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'linear-gradient(135deg, #4D148C 0%, #111827 100%)',
            fontFamily: 'Inter, sans-serif'
        }}>
            <div style={{
                background: 'white',
                padding: '40px',
                borderRadius: '16px',
                width: '100%',
                maxWidth: '400px',
                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
            }}>
                <div style={{ textAlign: 'center', marginBottom: '32px' }}>
                    <h1 style={{ fontSize: '1.8rem', fontWeight: 800, color: '#4D148C', marginBottom: '8px' }}>FedEx Smart Recovery</h1>
                    <p style={{ color: '#6B7280' }}>Secure DCA Management Portal</p>
                </div>

                <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                    <div>
                        <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 500, color: '#374151', marginBottom: '8px' }}>Role</label>
                        <div style={{ display: 'flex', gap: '8px', padding: '4px', background: '#F3F4F6', borderRadius: '8px' }}>
                            <button
                                type="button"
                                onClick={() => setRole('admin')}
                                style={{
                                    flex: 1,
                                    padding: '8px',
                                    borderRadius: '6px',
                                    border: 'none',
                                    fontSize: '0.875rem',
                                    fontWeight: 600,
                                    cursor: 'pointer',
                                    background: role === 'admin' ? 'white' : 'transparent',
                                    color: role === 'admin' ? '#4D148C' : '#6B7280',
                                    boxShadow: role === 'admin' ? '0 1px 2px rgba(0,0,0,0.1)' : 'none'
                                }}
                            >
                                FedEx Admin
                            </button>
                            <button
                                type="button"
                                onClick={() => setRole('agency')}
                                style={{
                                    flex: 1,
                                    padding: '8px',
                                    borderRadius: '6px',
                                    border: 'none',
                                    fontSize: '0.875rem',
                                    fontWeight: 600,
                                    cursor: 'pointer',
                                    background: role === 'agency' ? 'white' : 'transparent',
                                    color: role === 'agency' ? '#4D148C' : '#6B7280',
                                    boxShadow: role === 'agency' ? '0 1px 2px rgba(0,0,0,0.1)' : 'none'
                                }}
                            >
                                Agency Partner
                            </button>
                        </div>
                    </div>

                    <div>
                        <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 500, color: '#374151', marginBottom: '8px' }}>Email Address</label>
                        <input
                            type="email"
                            defaultValue="admin@fedex.com"
                            style={{ width: '100%', padding: '10px 12px', borderRadius: '8px', border: '1px solid #D1D5DB', fontSize: '0.95rem' }}
                        />
                    </div>

                    <div>
                        <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 500, color: '#374151', marginBottom: '8px' }}>Password</label>
                        <input
                            type="password"
                            defaultValue="password123"
                            style={{ width: '100%', padding: '10px 12px', borderRadius: '8px', border: '1px solid #D1D5DB', fontSize: '0.95rem' }}
                        />
                    </div>

                    <button
                        type="submit"
                        style={{
                            marginTop: '8px',
                            width: '100%',
                            padding: '12px',
                            borderRadius: '8px',
                            border: 'none',
                            background: '#FF6600',
                            color: 'white',
                            fontWeight: 600,
                            fontSize: '1rem',
                            cursor: 'pointer',
                            transition: 'background 0.2s'
                        }}
                    >
                        Sign In to Dashboard
                    </button>
                </form>

                <p style={{ marginTop: '24px', textAlign: 'center', fontSize: '0.75rem', color: '#9CA3AF' }}>
                    Protected by FedEx Enterprise Security (SSO)
                </p>
            </div>
        </div>
    );
}
