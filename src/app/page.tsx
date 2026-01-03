import React from 'react';
import { DollarSign, Activity, Users, Clock, Filter, Download, AlertTriangle, ArrowRight } from 'lucide-react';
import MetricCard from '@/components/MetricCard';
import styles from './page.module.css';

export default function Dashboard() {
  return (
    <div className="animate-fade-in">
      <header className={styles.header}>
        <div className={styles.heading}>
          <h1>Executive Dashboard</h1>
          <p>Real-time overview of debt recovery performance.</p>
        </div>
        <div className={styles.actions}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginRight: 16, padding: '6px 12px', background: '#ECFDF5', borderRadius: 8, color: '#047857', fontSize: '0.85rem', fontWeight: 600 }}>
            <div style={{ width: 8, height: 8, background: '#10B981', borderRadius: '50%' }} />
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
      </header>

      {/* CRITICAL ALERT SECTION - Handling "Rising Escalations" Pain Point */}
      <div className={styles.alertBanner}>
        <div className={styles.alertIcon}>
          <AlertTriangle size={24} />
        </div>
        <div className={styles.alertContent}>
          <h3>Critical Escalation: 3 High-Value Accounts at Risk</h3>
          <p>Accounts totaling <strong>$450,000</strong> are approaching the Statute of Limitations (SOL) in 7 days. AI recommends immediate legal escalation to prevent write-off.</p>
          <div className={styles.alertActions}>
            <button className={styles.btnAlert}>
              Escalate to Legal
              <ArrowRight size={16} style={{ marginLeft: 6, display: 'inline-block', verticalAlign: 'middle' }} />
            </button>
            <button className={styles.btnAlertSecondary}>View Details</button>
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
            <div className={styles.cardTitle}>
              <span>Recovery Trends (Live)</span>
              <select style={{ padding: 6, borderRadius: 6, border: '1px solid #ddd' }}>
                <option>Last 30 Days</option>
                <option>This Quarter</option>
              </select>
            </div>
            {/* Simple CSS Chart Graphic */}
            <div style={{ height: '200px', display: 'flex', alignItems: 'flex-end', gap: '12px', padding: '0 10px' }}>
              {[40, 60, 45, 70, 55, 65, 80, 75, 90, 60, 85, 95].map((h, i) => (
                <div key={i} style={{
                  flex: 1,
                  background: i === 11 ? 'var(--primary)' : 'var(--primary-light)',
                  opacity: i === 11 ? 1 : 0.4,
                  height: `${h}%`,
                  borderRadius: '4px 4px 0 0',
                  transition: 'all 0.3s'
                }} />
              ))}
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
