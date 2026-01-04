import React from 'react';
import { Star, MoreHorizontal, Phone, Mail } from 'lucide-react';
import styles from './page.module.css';

export default function AgenciesPage() {
    return (
        <div className="animate-fade-in">
            <div style={{ marginBottom: 32 }}>
                <h1 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: 8 }}>Agency Performance Network</h1>
                <p style={{ color: 'var(--text-muted)' }}>Monitor and benchmark external debt collection partners.</p>
            </div>

            <div className={styles.grid}>
                {[
                    { name: 'Alpha Recoveries', rating: 4.8, recovered: '$1.2M', active: 320, compliance: '98%' },
                    { name: 'Swift Collect', rating: 4.2, recovered: '$850k', active: 410, compliance: '95%' },
                    { name: 'LegalPoint Solutions', rating: 4.5, recovered: '$920k', active: 150, compliance: '100%' },
                    { name: 'Global Debt Mgmt', rating: 3.8, recovered: '$450k', active: 210, compliance: '89%' },
                    { name: 'Apex Financial', rating: 4.1, recovered: '$600k', active: 180, compliance: '92%' },
                    { name: 'Zenith Collections', rating: 4.6, recovered: '$1.1M', active: 290, compliance: '97%' },
                ].map((vendor, i) => (
                    <div key={i} className={styles.agencyCard}>
                        <div className={styles.cardHeader}>
                            <div>
                                <div className={styles.agencyName}>{vendor.name}</div>
                                <div style={{ display: 'flex', gap: 12, marginTop: 8 }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: 4, fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                                        <Phone size={14} /> Contact
                                    </div>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: 4, fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                                        <Mail size={14} /> Email
                                    </div>
                                </div>
                            </div>
                            <div style={{ display: 'flex', gap: 8 }}>
                                <button
                                    onClick={() => alert("💬 Opening Secure Channel\n\nStarting encrypted chat session with this agency...")}
                                    style={{
                                        background: '#EEF2FF',
                                        color: '#4F46E5',
                                        border: 'none',
                                        padding: '6px 12px',
                                        borderRadius: '6px',
                                        fontSize: '0.8rem',
                                        fontWeight: 600,
                                        cursor: 'pointer',
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: 6
                                    }}
                                >
                                    Chat
                                </button>
                                <button style={{ background: 'transparent', border: 'none', cursor: 'pointer', height: 'fit-content' }}>
                                    <MoreHorizontal color="var(--text-muted)" />
                                </button>
                            </div>
                        </div>

                        <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 16 }}>
                            <div className={styles.rating}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                                    <span>{vendor.rating}</span>
                                    <Star size={12} fill="#D97706" strokeWidth={0} />
                                </div>
                            </div>
                            <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>/ 5.0 Vendor Score</span>
                        </div>

                        <div className={styles.statGrid}>
                            <div className={styles.statItem}>
                                <div className={styles.statLabel}>Total Recovered</div>
                                <div className={styles.statValue}>{vendor.recovered}</div>
                            </div>
                            <div className={styles.statItem}>
                                <div className={styles.statLabel}>Active Cases</div>
                                <div className={styles.statValue}>{vendor.active}</div>
                            </div>
                            <div className={styles.statItem}>
                                <div className={styles.statLabel}>SOP Compliance</div>
                                <div className={styles.statValue} style={{ color: vendor.compliance === '100%' ? 'var(--success)' : 'inherit' }}>
                                    {vendor.compliance}
                                </div>
                            </div>
                            <div className={styles.statItem}>
                                <div className={styles.statLabel}>Status</div>
                                <div className={styles.statValue} style={{ fontSize: '0.9rem', color: 'var(--success)' }}>Active</div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
