'use client';

import React from 'react';
import { ShieldCheck, FileText, Filter, Download } from 'lucide-react';
import styles from './page.module.css';

import Modal from '@/components/Modal';

export default function CompliancePage() {
    const [showFilterModal, setShowFilterModal] = React.useState(false);
    const [showExportModal, setShowExportModal] = React.useState(false);

    return (
        <div className="animate-fade-in">
            <Modal
                isOpen={showFilterModal}
                onClose={() => setShowFilterModal(false)}
                title="Active Filters"
                type="info"
                confirmText="Apply Filters"
                onConfirm={() => setShowFilterModal(false)}
            >
                <div>
                    <p>Currently showing logs for:</p>
                    <div style={{ marginTop: 12, padding: 12, background: '#F3F4F6', borderRadius: 8, fontWeight: 500 }}>
                        📅 Last 30 Days
                    </div>
                </div>
            </Modal>

            <Modal
                isOpen={showExportModal}
                onClose={() => setShowExportModal(false)}
                title="Exporting Report..."
                type="success"
                confirmText="Download"
                onConfirm={() => setShowExportModal(false)}
            >
                <p>Generating PDF Audit Trail... 100%</p>
                <div style={{ marginTop: 16, display: 'flex', alignItems: 'center', gap: 12 }}>
                    <FileText size={32} color="#4D148C" />
                    <div>
                        <div style={{ fontWeight: 600 }}>Compliance_Audit_Log_2026.pdf</div>
                        <div style={{ fontSize: '0.8rem', color: '#6B7280' }}>2.4 MB • Generated just now</div>
                    </div>
                </div>
            </Modal>

            <div className={styles.header}>
                <div className={styles.title}>
                    <h1>Compliance & Governance</h1>
                    <p style={{ color: 'var(--text-muted)' }}>Audit trails and regulatory adherence logs.</p>
                </div>
                <div style={{ display: 'flex', gap: 12 }}>
                    <button
                        className="btn btn-secondary"
                        onClick={() => setShowFilterModal(true)}
                    >
                        <Filter size={18} style={{ marginRight: 8 }} />
                        Filter
                    </button>
                    <button
                        className="btn btn-primary"
                        onClick={() => setShowExportModal(true)}
                    >
                        <Download size={18} style={{ marginRight: 8 }} />
                        Export Report
                    </button>
                </div>
            </div>

            <div style={{ background: 'white', borderRadius: 16, border: '1px solid var(--border-light)', overflow: 'hidden' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                    <thead style={{ background: '#F9FAFB', borderBottom: '1px solid var(--border-light)' }}>
                        <tr>
                            <th style={{ textAlign: 'left', padding: '16px 24px', fontSize: '0.85rem', color: 'var(--text-muted)' }}>Timestamp</th>
                            <th style={{ textAlign: 'left', padding: '16px 24px', fontSize: '0.85rem', color: 'var(--text-muted)' }}>User</th>
                            <th style={{ textAlign: 'left', padding: '16px 24px', fontSize: '0.85rem', color: 'var(--text-muted)' }}>Action</th>
                            <th style={{ textAlign: 'left', padding: '16px 24px', fontSize: '0.85rem', color: 'var(--text-muted)' }}>Entity</th>
                            <th style={{ textAlign: 'left', padding: '16px 24px', fontSize: '0.85rem', color: 'var(--text-muted)' }}>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {[
                            { time: 'Today, 10:42 AM', user: 'System (AI)', action: 'Auto-Allocation', entity: 'Batch #2024-10', status: 'Success' },
                            { time: 'Today, 09:15 AM', user: 'M. Johnson', action: 'SOP Override Approval', entity: 'Case CX-9921', status: 'Logged' },
                            { time: 'Yesterday, 4:30 PM', user: 'Alpha Recoveries', action: 'Settlement Proposal', entity: 'Case CX-8832', status: 'Under Review' },
                            { time: 'Yesterday, 2:10 PM', user: 'System', action: 'Weekly Report Gen', entity: 'Performance_Q4', status: 'Success' },
                            { time: 'Oct 24, 11:20 AM', user: 'K. Mano', action: 'Agency Onboarding', entity: 'Zenith Coll.', status: 'Completed' },
                        ].map((log, i) => (
                            <tr key={i} style={{ borderBottom: '1px solid var(--border-light)' }}>
                                <td style={{ padding: '16px 24px', fontSize: '0.9rem' }}>{log.time}</td>
                                <td style={{ padding: '16px 24px', fontWeight: 500 }}>{log.user}</td>
                                <td style={{ padding: '16px 24px', color: 'var(--primary)' }}>{log.action}</td>
                                <td style={{ padding: '16px 24px', color: 'var(--text-secondary)' }}>{log.entity}</td>
                                <td style={{ padding: '16px 24px' }}>
                                    <span style={{
                                        padding: '4px 10px',
                                        borderRadius: 99,
                                        fontSize: '0.75rem',
                                        fontWeight: 600,
                                        background: log.status === 'Success' || log.status === 'Completed' ? '#ECFDF5' : '#FFF7ED',
                                        color: log.status === 'Success' || log.status === 'Completed' ? '#047857' : '#C2410C'
                                    }}>
                                        {log.status}
                                    </span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
