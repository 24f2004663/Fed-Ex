'use client';

import React, { useState } from 'react';
import { DollarSign, Activity, Users, Clock, Filter, Download, AlertTriangle, ArrowRight, TrendingUp, Archive, Database, Server } from 'lucide-react';
import MetricCard from '@/components/MetricCard';
import styles from './page.module.css';
import Modal from '@/components/Modal';
import { useData } from '@/context/DataContext';

export default function Home() {
  const { metrics, cases, agencies, currentDataset, isLoading, loadData } = useData();
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

  if (isLoading) {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '80vh', gap: 24 }}>
        <div className="spinner" style={{ width: 48, height: 48, border: '4px solid #f3f3f3', borderTop: '4px solid #4D148C', borderRadius: '50%', animation: 'spin 1s linear infinite' }}></div>
        <div style={{ color: 'var(--text-muted)', fontSize: '1.2rem' }}>Connecting to FedEx Data Warehouse...</div>
        <style jsx>{`
                @keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }
             `}</style>
      </div>
    );
  }

  // --- EMPTY STATE VIEW ---
  if (currentDataset === 'empty') {
    return (
      <div className="animate-fade-in" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '80vh', textAlign: 'center', maxWidth: 600, margin: '0 auto' }}>
        <div style={{ background: 'white', padding: 40, borderRadius: 24, boxShadow: 'var(--shadow-md)', width: '100%' }}>
          <div style={{ background: '#F3F4F6', width: 80, height: 80, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 24px' }}>
            <Server size={40} color="#4D148C" />
          </div>
          <h1 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: 16, color: '#1F2937' }}>Welcome to FedEx DCA Manager</h1>
          <p style={{ color: '#6B7280', fontSize: '1.1rem', marginBottom: 32, lineHeight: 1.6 }}>
            The system is currently connected but no dataset is loaded. Please select a demo scenario to visualize live case allocations and AI predictions.
          </p>

          <div style={{ display: 'flex', gap: 16, flexDirection: 'column' }}>
            <button
              onClick={() => loadData('set1')}
              className="btn btn-primary"
              style={{ padding: '16px', fontSize: '1.1rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 12 }}
            >
              <Database size={20} />
              Load Live Data: Scenario A (Corporate)
            </button>
            <button
              onClick={() => loadData('set2')}
              className="btn btn-secondary"
              style={{ padding: '16px', fontSize: '1.1rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 12, border: '2px solid #E5E7EB' }}
            >
              <Database size={20} />
              Load Live Data: Scenario B (Retail)
            </button>
          </div>
        </div>
      </div>
    );
  }

  // --- FILLED DASHBOARD VIEW ---
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
        <p>You are about to flag <strong>3 accounts</strong> for immediate legal action.</p>
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
        <p>Viewing details for the current active dataset.</p>
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

      {/* CRITICAL ALERT SECTION - Only show if corporate data (Scenario A) for now, or always show if needed */}
      {currentDataset === 'set1' && (
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
      )}

      {/* Metrics Grid */}
      <div className={styles.grid}>
        <MetricCard
          title="Total Recovered (Q4)"
          value={metrics.totalRecovered}
          change="12.5%"
          trend={metrics.trendRecovered as 'up' | 'down'}
          icon={DollarSign}
        />
        <MetricCard
          title="Active Allocations"
          value={metrics.activeAllocations}
          change="3.2%"
          trend={metrics.trendAllocations as 'up' | 'down'}
          icon={Activity}
        />
        <MetricCard
          title="Avg. Recovery Time"
          value={metrics.avgTime}
          change="2 Days"
          trend="up"
          icon={Clock}
        />
        <MetricCard
          title="Agency Efficiency"
          value={metrics.efficiency}
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
                  {cases.map((row) => (
                    <tr key={row.id}>
                      <td style={{ fontWeight: 500 }}>{row.id}</td>
                      <td>{row.name}</td>
                      <td>{row.amountStr}</td>
                      <td>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                          <span style={{ color: 'var(--success)', fontWeight: 600 }}>{row.score}%</span>
                          <div style={{ width: 60, height: 4, background: '#eee', borderRadius: 2 }}>
                            <div style={{ width: `${row.score}%`, background: 'var(--success)', height: '100%' }} />
                          </div>
                        </div>
                      </td>
                      <td>{row.rec.split('(')[0]}</td>
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
              {agencies.map((agency) => (
                <div key={agency.name}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 4 }}>
                    <span style={{ fontWeight: 500, fontSize: '0.9rem' }}>{agency.name}</span>
                    <span style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>{agency.rating}/5.0</span>
                  </div>
                  {/* Reuse Agency Logic for progress bar visual */}
                  <div className={styles.progressBarContainer}>
                    <div className={styles.progressBar} style={{ width: `${(agency.rating / 5) * 100}%`, backgroundColor: agency.rating > 4.0 ? 'var(--success)' : (agency.rating > 3.0 ? 'var(--warning)' : 'var(--danger)') }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
