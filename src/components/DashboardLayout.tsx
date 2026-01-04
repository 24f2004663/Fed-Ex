'use client';

import React from 'react';
import Sidebar from '@/components/Sidebar';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    return (
        <div style={{ display: 'flex', minHeight: '100vh', flexDirection: 'row' }}>
            <Sidebar />
            <main style={{ flex: 1, padding: '24px', background: 'var(--bg-main)', overflowY: 'auto' }}>
                {children}
            </main>
        </div>
    );
}
