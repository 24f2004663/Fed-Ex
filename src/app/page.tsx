'use client';

import React, { useState } from 'react';
import { DollarSign, Activity, Users, Clock, Filter, Download, AlertTriangle, ArrowRight, TrendingUp } from 'lucide-react';
import MetricCard from '@/components/MetricCard';
import styles from './page.module.css';

import Modal from '@/components/Modal';

export default function Home() {
  const [duration, setDuration] = useState('Last 30 Days');
  const [showEscalateModal, setShowEscalateModal] = useState(false);
  const [showDetailsModal, setShowDetailsModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const handleEscalateClick = () => setShowEscalateModal(true);

  const confirmEscalation = () => {
    setShowEscalateModal(false);
    setShowSuccessModal(true);
  };

  const handleViewDetails = () => setShowDetailsModal(true);

  return (
    <div className="animate-fade-in">
      <Modal
        isOpen={showEscalateModal}
        onClose={() => setShowEscalateModal(false)}
        onConfirm={confirmEscalation}
        title="Confirm Legal Escalation"
        confirmText="Yes, Escalate"
        type="warning"
      >
        <p>You are about to flag <strong>3 accounts ($450,000)</strong> for immediate legal action.</p>
        <p style={{ marginTop: 12 }}>This will notify the extensive legal team and update the case status to 'Legal Review'.</p>
        <p style={{ marginTop: 12 }}>Proceed with escalation?</p>
      </Modal>

      <Modal
        isOpen={showDetailsModal}
        onClose={() => setShowDetailsModal(false)}
        title="Case Details View"
        confirmText="Go to Case Management"
        onConfirm={() => setShowDetailsModal(false)}
        cancelText="Close"
        type="info"
      >
        <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 12 }}>
          <li style={{ padding: 12, background: '#F9FAFB', borderRadius: 8 }}>
            <strong>Acme Corp</strong> - $150,000 (SOL in 5 days)
          </li>
          <li style={{ padding: 12, background: '#F9FAFB', borderRadius: 8 }}>
            <strong>Beta Industries</strong> - $200,000 (SOL in 2 days)
          </li>
          <li style={{ padding: 12, background: '#F9FAFB', borderRadius: 8 }}>
            <strong>Delta Co</strong> - $100,000 (SOL in 7 days)
          </li>
        </ul>
      </Modal>

      <Modal
        isOpen={showSuccessModal}
        onClose={() => setShowSuccessModal(false)}
        title="Escalation Submitted"
        confirmText="OK"
        onConfirm={() => setShowSuccessModal(false)}
        type="success"
      >
        Escalation request has been successfully queued. The legal team has been notified via secure channel.
      </Modal>
      {/* Header */}
      <div className={styles.header}>
        <div>
          <h1 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: 8 }}>Executive Dashboard</h1>
          <p style={{ color: 'var(--text-muted)' }}>Real-time overview of debt recovery performance.</p>
        </div>
        <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
          <div className={styles.rpaBadge}>
            <div className={styles.pulseDot}></div>
            RPA Adapter: Active
          </div>
          <button className="btn btn-secondary">
            <Filter size={18} style={{ marginRight: 8 }} />
            Filter
          </button>
          <button className="btn btn-primary">
            <Download size={18} style={{ marginRight: 8 }} />
            Export Report
          </button>
        </div>
      </div>

      {/* CRITICAL ALERT SECTION - Handling "Rising Escalations" Pain Point */}
      <div className={styles.alertBanner}>
        <div className={styles.alertIcon}>
          <AlertTriangle size={24} />
        </div>
        <div className={styles.alertContent}>
          <h3>Critical Escalation: 3 High-Value Accounts at Risk</h3>
          <p>Accounts totaling <strong>$450,000</strong> are approaching the Statute of Limitations (SOL) in 7 days. AI recommends immediate legal escalation to prevent write-off.</p>
          <div className={styles.alertActions}>
            <button className={styles.btnAlert} onClick={handleEscalateClick}>
              Escalate to Legal
              <ArrowRight size={16} style={{ marginLeft: 6, display: 'inline-block', verticalAlign: 'middle' }} />
            </button>
            <button className={styles.btnAlertSecondary} onClick={handleViewDetails}>View Details</button>
          </div>
        </div>
      </div>

      {/* Metrics Grid */}
      <div className={styles.grid}>
        <MetricCard
          title="Total Recovered (Q4)"
          value="$1,245,000"
          change="12.5%"
          trend="up"
          icon={DollarSign}
        />
        <MetricCard
          title="Active Allocations"
          value="1,432"
          change="3.2%"
          trend="up"
          icon={Activity}
        />
        <MetricCard
          title="Avg. Recovery Time"
          value="14 Days"
          change="2 Days"
          trend="up"
          icon={Clock}
        />
        <MetricCard
          title="Agency Efficiency"
          value="87.4%"
          change="1.1%"
          trend="down"
          icon={Users}
        />
      </div>

      <div className={styles.sectionGrid}>
        {/* Left Column */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>

          {/* AI Priority List */}
          <div className={styles.card}>
            <div className={styles.cardTitle}>
              <span>🎯 AI High-Propensity Allocations</span>
              <span className="badge badge-purple">AI POWERED</span>
            </div>
            <div className={styles.tableContainer}>
              <table className={styles.table}>
                <thead>
                  <tr>
                    <th>Case ID</th>
                    <th>Customer</th>
                    <th>Amt Due</th>
                    <th>PTP Score</th>
                    <th>Suggested Agency</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { id: 'CX-9921', name: 'TechFlow Sys', amt: '$12,400', score: 98, agency: 'Alpha Corp' },
                    { id: 'CX-8832', name: 'Global Logistics', amt: '$4,500', score: 94, agency: 'SwiftRecover' },
                    { id: 'CX-7721', name: 'MediCare Inc', amt: '$8,900', score: 89, agency: 'Alpha Corp' },
                    { id: 'CX-3321', name: 'RetailGiant', amt: '$22,100', score: 85, agency: 'LegalPoint' },
                  ].map((row) => (
                    <tr key={row.id}>
                      <td style={{ fontWeight: 500 }}>{row.id}</td>
                      <td>{row.name}</td>
                      <td>{row.amt}</td>
                      <td>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                          <span style={{ color: 'var(--success)', fontWeight: 600 }}>{row.score}%</span>
                          <div style={{ width: 60, height: 4, background: '#eee', borderRadius: 2 }}>
                            <div style={{ width: `${row.score}%`, background: 'var(--success)', height: '100%' }} />
                          </div>
                        </div>
                      </td>
                      <td>{row.agency}</td>
                      <td>
                        <button className="btn btn-secondary" style={{ padding: '4px 12px', fontSize: '0.8rem' }}>Allocate</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Solution Highlight - Real-time Chart Placeholder */}
          <div className={styles.card}>
            <div className={styles.sectionHeader}>
              <h2>Recovery Trends (Live)</h2>
              <select
                className={styles.select}
                value={duration}
                onChange={(e) => {
                  setDuration(e.target.value);
                  alert(`📉 Data Refreshing...\n\nUpdating trend analysis for: ${e.target.value}`);
                }}
              >
                <option>Last 30 Days</option>
                <option>Last Quarter</option>
                <option>YTD</option>
              </select>
            </div>
            <div className={styles.chartPlaceholder}>
              {/* Dynamic visual feedback based on duration state */}
              <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', height: '100%', paddingBottom: 20 }}>
                {[35, 55, 40, 60, 45, 75, 65, 85, 60, 80, 70].map((h, i) => (
                  <div key={i} style={{
                    width: '6%',
                    height: `${duration === 'Last Quarter' ? h * 0.8 : h}%`, // Simple visual change simulation
                    background: i === 10 ? '#4D148C' : '#C4B5FD',
                    borderRadius: 4,
                    transition: 'height 0.5s ease'
                  }}></div>
                ))}
                <div style={{ width: '6%', height: '90%', background: '#4D148C', borderRadius: 4 }}></div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>

          {/* Agency Leaderboard */}
          <div className={styles.card}>
            <div className={styles.cardTitle}>Top Agencies</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {[
                { name: 'Alpha Recoveries', perf: 92, cases: 420 },
                { name: 'Swift Collect', perf: 81, cases: 310 },
                { name: 'LegalPoint Solutions', perf: 74, cases: 150 },
                { name: 'Global Debt Mgmt', perf: 65, cases: 210 },
              ].map((agency) => (
                <div key={agency.name}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 4 }}>
                    <span style={{ fontWeight: 500, fontSize: '0.9rem' }}>{agency.name}</span>
                    <span style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>{agency.perf}% Rate</span>
                  </div>
                  <div className={styles.progressBarContainer}>
                    <div className={styles.progressBar} style={{ width: `${agency.perf}%`, backgroundColor: agency.perf > 80 ? 'var(--success)' : (agency.perf > 70 ? 'var(--warning)' : 'var(--danger)') }} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Pending Action Items */}
          <div className={styles.card} style={{ flex: 1 }}>
            <div className={styles.cardTitle}>Pending Approvals</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {[
                { msg: 'Approve allocation for INV-9002', time: '10m ago' },
                { msg: 'Review settlement offer (Case #22)', time: '1h ago' },
                { msg: 'Update SOP: Compliance v2', time: '3h ago' },
              ].map((item, i) => (
                <div key={i} style={{
                  padding: '12px',
                  background: '#F9FAFB',
                  borderRadius: '8px',
                  borderLeft: '4px solid var(--secondary)',
                  fontSize: '0.9rem'
                }}>
                  <div style={{ fontWeight: 500 }}>{item.msg}</div>
                  <div style={{ fontSize: '0.75rem', color: '#9CA3AF', marginTop: 4 }}>{item.time}</div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
