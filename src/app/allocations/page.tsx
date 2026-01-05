'use client';

import React, { useState } from 'react';
import { Play, CheckCircle, BarChart2, Filter } from 'lucide-react';
import styles from './page.module.css';
import Modal from '@/components/Modal';
import { useData } from '@/context/DataContext';

export default function AllocationsPage() {
    const { cases, currentDataset } = useData();
    const [isAllocating, setIsAllocating] = useState(false);
    const [filterType, setFilterType] = useState('all');
    const [showSopModal, setShowSopModal] = useState(false);
    const [showSuccessModal, setShowSuccessModal] = useState(false);

    // Logic for Filtering
    const filteredCases = cases.filter(c => {
        if (filterType === 'all') return true;
        if (filterType === 'high') return c.amount > 10000;
        if (filterType === 'risk') return c.score < 50;
        return true;
    });

    const handleAllocationClick = () => {
        setShowSopModal(true);
    };

    const confirmAllocation = () => {
        setShowSopModal(false);
        setIsAllocating(true);
        setTimeout(() => {
            setIsAllocating(false);
            setShowSuccessModal(true);
        }, 1500);
    };

    if (currentDataset === 'empty') {
        return (
            <div className="animate-fade-in" style={{ padding: 40, textAlign: 'center', background: 'white', borderRadius: 12, marginTop: 20 }}>
                <h2 style={{ color: 'var(--text-dark)', marginBottom: 8 }}>No Data Loaded</h2>
                <p style={{ color: 'var(--text-muted)' }}>Use the controls in the sidebar to load a dataset first.</p>
            </div>
        );
    }

    return (
        <div className={styles.container}>
            <Modal
                isOpen={showSopModal}
                onClose={() => setShowSopModal(false)}
                onConfirm={confirmAllocation}
                title="SOP Enforcement Check"
                confirmText="Proceed with Allocation"
                type="warning"
            >
                <p><strong>System will verify compliance for {filteredCases.length} cases before allocation.</strong></p>
                <ul style={{ marginTop: 12, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 8 }}>
                    <li>✅ Check 1: Debt Verification (Passed)</li>
                    <li>✅ Check 2: Customer Cool-off Period (Passed)</li>
                    <li>✅ Check 3: Agency Capacity (Passed)</li>
                </ul>
                <p style={{ marginTop: 12 }}>Proceed with AI Auto-Allocation?</p>
            </Modal>

            <Modal
                isOpen={showSuccessModal}
                onClose={() => setShowSuccessModal(false)}
                title="Allocation Complete"
                confirmText="Close"
                onConfirm={() => setShowSuccessModal(false)}
                cancelText="Close"
                type="success"
            >
                All cases have been successfully distributed to agencies based on their <strong>AI Propensity Score</strong>.
            </Modal>

            <div className={styles.header}>
                <div className={styles.title}>
                    <h1>Case Allocation Manager</h1>
                    <p style={{ color: 'var(--text-muted)' }}>Distribution of overdue accounts to external agencies.</p>
                </div>
                <button
                    className="btn btn-primary"
                    onClick={handleAllocationClick}
                    disabled={isAllocating}
                >
                    <Play size={18} style={{ marginRight: 8 }} />
                    {isAllocating ? 'Verifying SOPs...' : 'Run Auto-Allocation'}
                </button>
            </div>

            <div className={styles.statsRow}>
                <div className={styles.statCard}>
                    <span className={styles.statValue}>
                        {filterType === 'all' ? '542' : filteredCases.length}
                    </span>
                    <span className={styles.statLabel}>Visible Cases</span>
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
                        <button
                            className={`${styles.filterBtn} ${filterType === 'all' ? styles.filterBtnActive : ''}`}
                            onClick={() => setFilterType('all')}
                        >
                            All Pending
                        </button>
                        <button
                            className={`${styles.filterBtn} ${filterType === 'high' ? styles.filterBtnActive : ''}`}
                            onClick={() => setFilterType('high')}
                        >
                            High Value (&gt;10k)
                        </button>
                        <button
                            className={`${styles.filterBtn} ${filterType === 'risk' ? styles.filterBtnActive : ''}`}
                            onClick={() => setFilterType('risk')}
                        >
                            At Risk
                        </button>
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
                    {filteredCases.length > 0 ? (
                        filteredCases.map((item, idx) => (
                            <div key={idx} className={styles.listItem}>
                                <div style={{ fontWeight: 600 }}>{item.id}</div>
                                <div>
                                    <div style={{ fontWeight: 600 }}>{item.name}</div>
                                    <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Due: {item.amountStr}</div>
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
                        ))
                    ) : (
                        <div style={{ padding: 20, textAlign: 'center', color: 'var(--text-muted)' }}>
                            No cases match this filter.
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
