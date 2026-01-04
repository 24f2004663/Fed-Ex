import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Sidebar from '@/components/Sidebar';
import { Providers } from './providers';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'FedEx Smart Recovery | DCA Management',
  description: 'AI-Powered Debt Collection Agency Management Platform',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <div style={{ display: 'flex', minHeight: '100vh' }}>
            <Sidebar />
            <main style={{
              flex: 1,
              marginLeft: '260px',
              padding: '32px',
              backgroundColor: 'var(--bg-app)',
              minHeight: '100vh',
              overflowY: 'auto'
            }}>
              {children}
            </main>
          </div>
        </Providers>
      </body>
    </html>
  );
}
