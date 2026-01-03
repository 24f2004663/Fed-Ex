import React from 'react';
import { Play, CheckCircle, BarChart2, Filter } from 'lucide-react';
import styles from './page.module.css';

export default function AllocationsPage() {
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <div className={styles.title}>
                    <h1>Case Allocation Manager</h1>
                    <p style={{ color: 'var(--text-muted)' }}>Distribution of overdue accounts to external agencies.</p>
                </div>
                <button className="btn btn-primary">
                    <Play size={18} style={{ marginRight: 8 }} />
                    Run Auto-Allocation
                </button>
            </div>

            <div className={styles.statsRow}>
                <div className={styles.statCard}>
                    <span className={styles.statValue}>542</span>
                    <span className={styles.statLabel}>Unallocated Cases</span>
                </div>
                <div className={styles.statCard}>
                    <span className={styles.statValue}>$3.2M</span>
                    <span className={styles.statLabel}>Total Allocation Value</span>
                </div>
                <div className={styles.statCard}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                        <span className={styles.statValue} style={{ color: 'var(--success)' }}>94%</span>
                        <CheckCircle size={20} color="var(--success)" />
                    </div>
                    <span className={styles.statLabel}>AI Matching Confidence</span>
                </div>
            </div>

            <div className={styles.mainArea}>
                <div className={styles.toolbar}>
                    <div className={styles.filters}>
                        <button className={`${styles.filterBtn} ${styles.filterBtnActive}`}>All Pending</button>
                        <button className={styles.filterBtn}>High Value (&gt;10k)</button>
                        <button className={styles.filterBtn}>At Risk</button>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                        <Filter size={16} />
                        <span>Sort by: <strong>Propensity Score</strong></span>
                    </div>
                </div>

                <div className={styles.list}>
                    {/* Header Row */}
                    <div className={styles.listItem} style={{ background: '#F3F4F6' }}>
                        <div className={styles.colHeader}>Case ID</div>
                        <div className={styles.colHeader}>Customer Details</div>
                        <div className={styles.colHeader}>Debt Age (Days)</div>
                        <div className={styles.colHeader}>Propensity Score</div>
                        <div className={styles.colHeader}>Recommended Action</div>
                    </div>

                    {/* Items */}
                    {[
                        { id: 'C-1023', name: 'Acme Logistics', amount: '$54,000', days: 45, score: 92, rec: 'Premium Agency (Alpha)' },
                        { id: 'C-1045', name: 'Beta Shipping', amount: '$12,500', days: 62, score: 78, rec: 'Standard Agency' },
                        { id: 'C-1102', name: 'Delta Freight', amount: '$8,200', days: 31, score: 88, rec: 'Internal Retention' },
                        { id: 'C-1155', name: 'Echo Trans', amount: '$23,100', days: 95, score: 45, rec: 'Legal Escalation' },
                        { id: 'C-1201', name: 'Foxtrot Air', amount: '$150,000', days: 28, score: 96, rec: 'Premium Agency (Alpha)' },
                    ].map((item, idx) => (
                        <div key={idx} className={styles.listItem}>
                            <div style={{ fontWeight: 600 }}>{item.id}</div>
                            <div>
                                <div style={{ fontWeight: 600 }}>{item.name}</div>
                                <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Due: {item.amount}</div>
                            </div>
                            <div>
                                <span className={`${styles.tag} ${item.days > 90 ? styles.high : styles.med}`}>
                                    {item.days} Days
                                </span>
                            </div>
                            <div>
                                <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                                    <BarChart2 size={16} color={item.score > 80 ? 'var(--success)' : 'var(--warning)'} />
                                    <span style={{ fontWeight: 600 }}>{item.score}/100</span>
                                </div>
                            </div>
                            <div>
                                <span style={{
                                    padding: '4px 10px',
                                    borderRadius: '12px',
                                    background: 'var(--bg-app)',
                                    fontSize: '0.85rem',
                                    border: '1px solid var(--border-light)'
                                }}>
                                    {item.rec}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
