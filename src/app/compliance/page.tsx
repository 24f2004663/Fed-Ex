import React from 'react';
import { ShieldCheck, FileText } from 'lucide-react';

export default function CompliancePage() {
    return (
        <div className="animate-fade-in">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 32 }}>
                <div>
                    <h1 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: 8 }}>Governance & Compliance</h1>
                    <p style={{ color: 'var(--text-muted)' }}>Audit trails, SOP enforcement, and regulatory adherence.</p>
                </div>
                <button className="btn btn-secondary">
                    <ShieldCheck size={18} style={{ marginRight: 8 }} />
                    Download Audit Report
                </button>
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
