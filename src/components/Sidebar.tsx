'use client';

import { useState } from 'react';
import { DataProvider, useData } from '@/context/DataContext';
import { LayoutDashboard, Users, PieChart, Briefcase, ShieldCheck, Database, X, Settings, LogOut, Bell, User, Cpu, Moon } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './Sidebar.module.css';
import Modal from './Modal';

const menuItems = [
  { name: 'Dashboard', icon: LayoutDashboard, path: '/' },
  { name: 'Allocations', icon: Briefcase, path: '/allocations' },
  { name: 'Agencies', icon: Users, path: '/agencies' },
  { name: 'Analytics', icon: PieChart, path: '/analytics' },
  { name: 'Compliance', icon: ShieldCheck, path: '/compliance' },
];

export default function Sidebar() {
  const pathname = usePathname();
  const { loadData, clearData, currentDataset, isLoading } = useData();
  const [showSettings, setShowSettings] = useState(false);

  return (
    <aside className={styles.sidebar}>
      <Modal
        isOpen={showSettings}
        onClose={() => setShowSettings(false)}
        title="System Settings"
        confirmText="Save Changes"
        onConfirm={() => {
          // Simulate saving
          setShowSettings(false);
          // Could trigger a toast here if we had one
        }}
        type="info"
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          {/* User Profile Section */}
          <div style={{ padding: 12, background: '#F9FAFB', borderRadius: 8, display: 'flex', alignItems: 'center', gap: 12 }}>
            <div style={{ width: 40, height: 40, borderRadius: '50%', background: '#4D148C', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold' }}>JD</div>
            <div>
              <div style={{ fontWeight: 600, fontSize: '0.9rem' }}>Jane Doe</div>
              <div style={{ fontSize: '0.8rem', color: '#6B7280' }}>Senior Collections Mgr.</div>
            </div>
          </div>

          {/* AI Control */}
          <div>
            <h4 style={{ fontSize: '0.9rem', marginBottom: 8, display: 'flex', alignItems: 'center', gap: 8 }}>
              <Cpu size={16} /> AI Model Sensitivity
            </h4>
            <div style={{ display: 'flex', gap: 8 }}>
              {['Conservative', 'Balanced', 'Aggressive'].map(mode => (
                <button key={mode} style={{
                  flex: 1,
                  padding: '8px',
                  borderRadius: 6,
                  border: mode === 'Balanced' ? '1px solid #4D148C' : '1px solid #E5E7EB',
                  background: mode === 'Balanced' ? '#F3E8FF' : 'white',
                  color: mode === 'Balanced' ? '#4D148C' : '#374151',
                  fontSize: '0.8rem',
                  cursor: 'pointer'
                }}>
                  {mode}
                </button>
              ))}
            </div>
            <p style={{ fontSize: '0.75rem', color: '#6B7280', marginTop: 4 }}>Adjusts the threshold for escalating cases to legal.</p>
          </div>

          {/* Toggles */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            <label style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer' }}>
              <span style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: '0.9rem' }}><Bell size={16} /> Email Notifications</span>
              <input type="checkbox" defaultChecked style={{ accentColor: '#4D148C', width: 16, height: 16 }} />
            </label>
            <label style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer' }}>
              <span style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: '0.9rem' }}><Moon size={16} /> Dark Mode (Beta)</span>
              <input type="checkbox" style={{ accentColor: '#4D148C', width: 16, height: 16 }} />
            </label>
          </div>

          <div style={{ fontSize: '0.75rem', color: '#9CA3AF', textAlign: 'center', marginTop: 12 }}>
            System Version v2.4.1 | Connected to FedEx Data Lake
          </div>
        </div>
      </Modal>

      <div className={styles.logoContainer}>
        {/* ... (existing logo code) */}
        <div className={styles.logoText}>
          <span style={{ color: 'white' }}>FedEx</span>
          <span style={{ color: 'var(--secondary)' }}> Recovery</span>
        </div>
        <div className={styles.subText}>Create. Collect. Close.</div>
      </div>

      <nav className={styles.nav}>
        {menuItems.map((item) => {
          const isActive = pathname === item.path;
          return (
            <Link key={item.path} href={item.path} className={`${styles.navItem} ${isActive ? styles.active : ''}`}>
              <item.icon size={20} className={styles.icon} />
              <span>{item.name}</span>
            </Link>
          );
        })}
      </nav>

      <div className={styles.footer}>
        {/* Data Controls for Demo */}
        <div style={{ padding: '0 12px 16px 12px', borderBottom: '1px solid rgba(255,255,255,0.1)', marginBottom: 16 }}>
          <div style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.5)', marginBottom: 8, textTransform: 'uppercase', letterSpacing: '1px' }}>
            Demo Data Control
          </div>
          <div style={{ display: 'flex', gap: 6, flexDirection: 'column' }}>
            <button
              onClick={() => loadData('set1')}
              disabled={isLoading}
              className={styles.menuItem}
              style={{ background: currentDataset === 'set1' ? 'rgba(255,255,255,0.2)' : 'transparent', justifyContent: 'flex-start', fontSize: '0.8rem', width: '100%', border: 'none', color: 'white', padding: '8px', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 8, borderRadius: 6 }}
            >
              <Database size={14} /> Load Corporate (Set 1)
            </button>
            <button
              onClick={() => loadData('set2')}
              disabled={isLoading}
              className={styles.menuItem}
              style={{ background: currentDataset === 'set2' ? 'rgba(255,255,255,0.2)' : 'transparent', justifyContent: 'flex-start', fontSize: '0.8rem', width: '100%', border: 'none', color: 'white', padding: '8px', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 8, borderRadius: 6 }}
            >
              <Database size={14} /> Load Retail (Set 2)
            </button>
            <button
              onClick={clearData}
              className={styles.menuItem}
              style={{ justifyContent: 'flex-start', fontSize: '0.8rem', color: '#ff8a8a', width: '100%', border: 'none', background: 'transparent', padding: '8px', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 8, borderRadius: 6 }}
            >
              <X size={14} /> Reset / Clear
            </button>
          </div>
        </div>

        <button
          className={styles.menuItem}
          style={{ width: '100%', border: 'none', background: 'transparent', color: 'rgba(255,255,255,0.7)', padding: '10px 12px', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 12 }}
          onClick={() => setShowSettings(true)}
        >
          <Settings size={20} />
          <span>Settings</span>
        </button>
        <Link href="/login" className={styles.menuItem} style={{ color: '#ff8a8a', display: 'flex', alignItems: 'center', gap: 12, padding: '10px 12px', textDecoration: 'none' }}>
          <LogOut size={20} />
          <span>Logout</span>
        </Link>
      </div>
    </aside>
  );
}
