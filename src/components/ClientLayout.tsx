'use client';

import React from 'react';
import Sidebar from '@/components/Sidebar';
import { DataProvider } from '@/context/DataContext';

export default function ClientLayout({ children }: { children: React.ReactNode }) {
    return (
        <DataProvider>
            <div style={{ display: 'flex', minHeight: '100vh', flexDirection: 'row' }}>
                <Sidebar />
                <main style={{ flex: 1, padding: '24px', background: 'var(--bg-main)', overflowY: 'auto' }}>
                    {children}
                </main>
            </div>
        </DataProvider>
    );
}
