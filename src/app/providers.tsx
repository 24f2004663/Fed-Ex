'use client';

import { DataProvider } from '@/context/DataContext';

export function Providers({ children }: { children: React.ReactNode }) {
    console.log("Providers Wrapper Rendering");
    return (
        <DataProvider>
            {children}
        </DataProvider>
    );
}
