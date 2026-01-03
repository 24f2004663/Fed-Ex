'use client';

import React from 'react';
import { LayoutDashboard, Users, PieChart, Briefcase, ShieldCheck } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './Sidebar.module.css';

const menuItems = [
  { name: 'Dashboard', icon: LayoutDashboard, path: '/' },
  { name: 'Allocations', icon: Briefcase, path: '/allocations' },
  { name: 'Agencies', icon: Users, path: '/agencies' },
  { name: 'Analytics', icon: PieChart, path: '/analytics' },
  { name: 'Compliance', icon: ShieldCheck, path: '/compliance' },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className={styles.sidebar}>
      <div className={styles.logoContainer}>
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


    </aside>
  );
}
