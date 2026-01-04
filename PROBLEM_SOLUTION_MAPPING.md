# PROBLEM-SOLUTION MAPPING

**Project:** FedEx Smart Recovery App
**Date:** January 4, 2026
**Purpose:** This document maps every technical feature of the `dca-dashboard` project directly to the challenges and requirements outlined in the official FedEx Problem Statement (Hackathon 2025).

---

## 1. CORE CHALLENGE & PAIN POINTS

### ❌ Problem: Manual case allocation & tracking via Excel and emails
**✅ Solution: `src/app/allocations/page.tsx` (Allocations Dashboard)**
- **Feature:** Centralized case management table replacing spreadsheets.
- **Why it solves it:** Allows admins to view, filter ("High Value", "At Risk"), and manage thousands of cases in one unified interface instead of static files.
- **AI Integration:** The **"Run Auto-Allocation"** button (`ai_engine/inference.py`) instantly distributes cases based on logic, removing manual email back-and-forth.

### ❌ Problem: Delayed feedback loops between enterprise teams and DCAs
**✅ Solution: `src/app/agencies/page.tsx` (Agency Network)**
- **Feature:** "Chat" button on every agency card.
- **Why it solves it:** Simulated real-time secure communication channel. Instead of waiting for weekly email reports, agents and FedEx admins can communicate instantly within the platform context.
- **Feature:** Real-time status indicators (Active/Inactive) for immediate visibility.

### ❌ Problem: Minimal audit trail and unclear ownership
**✅ Solution: `src/app/compliance/page.tsx` (Governance Hub)**
- **Feature:** Immutable Audit Log table (Time, User, Action, Status).
- **Why it solves it:** Every action (allocation, login, export) is tracked.
- **Feature:** "Export Report" function generates PDF proofs for compliance, ensuring 100% accountability.

### ❌ Problem: Limited performance visibility and analytics
**✅ Solution: `src/app/page.tsx` (Executive Dashboard) & `src/app/analytics/page.tsx`**
- **Feature:** Real-time visual graphs (Recovery Trends) and KPI cards (Total Recovered, Efficiency).
- **Why it solves it:** Replaces static retroactive reports with live, data-driven insights. Managers can see performance *as it happens*.

---

## 2. "WHAT WE ARE LOOKING FORWARD TO" (Specific Requirements)

### 🎯 Requirement: AI/ML models for prioritization and recovery prediction
**✅ Solution: `ai_engine/` (Python Backend)**
- **File:** `inference.py` & `model_train.py`
- **Implementation:** 
  - Uses `scikit-learn` Random Forest algorithms.
  - Predicts **Propensity to Pay (PTP)** score (0-100%).
  - Categorizes debt into tiers (Critical, High, Medium, Low).
- **User Interface:** displayed prominently in `Allocations` as a color-coded "Score" bar.

### 🎯 Requirement: Workflow or low-code automation platforms
**✅ Solution: `src/app/allocations/page.tsx`**
- **Feature:** **SOP Enforcement Check** (Modal Popup).
- **Implementation:** When clicking "Auto-Allocate", the system forces a checklist verification (Debt Verification, Cool-off Period) before allowing the action to proceed. This effectively hard-codes business logic (SOPs) into the software workflow.

### 🎯 Requirement: RPA for legacy system integration
**✅ Solution: `src/app/page.tsx`**
- **Feature:** "RPA Adapter: Active" Status Indicator.
- **Concept:** Designed to visually represent the connection to legacy FedEx mainframes (simulated). It shows that the new dashboard successfully "talks" to the old heavy systems without replacing them entirely.

### 🎯 Requirement: Analytics dashboards and performance tracking
**✅ Solution: `src/components/MetricCard.tsx` / `src/app/analytics/page.tsx`**
- **Feature:** Modular, reusable KPI cards that track $ Recovered, Case Volume, and Agency Scores.
- **Visuals:** Usage of `recharts` or CSS-based bar charts to visualize trends over time (30 days, Q4, YTD).

### 🎯 Requirement: Secure role-based portals for DCAs
**✅ Solution: `src/app/login/page.tsx`**
- **Feature:** Dual-login interface options: 
  1. **"FedEx Enterprise Login"** (Admin)
  2. **"Agency Partner Portal"** (External DCA)
- **Why it solves it:** Ensures external agencies only see their assigned cases, while FedEx admins see the global view, satisfying security and data privacy needs.

---

## 3. EXPECTED OUTCOMES

| Outcome | How We Achieved It |
| :--- | :--- |
| **Reduced Overdue Ageing** | **AI Prioritization:** Models flag "Critical" cases (approaching Statute of Limitations) immediately on the Dashboard so they are acted on *first*. |
| **Improved Recovery Predictability** | **Propensity Scoring:** We don't just guess; we assign a probability score to every debt, allowing resources to be focused on high-probability wins. |
| **Stronger Governance** | **Compliance Page:** The dedicated audit trail ensures no action goes unrecorded. |
| **Scalable Solution** | **Tech Stack:** Built on **Next.js** (Frontend) and **Python/FastAPI** (Backend) deployed on Vercel Serverless. This architecture scales infinitely without managing physical servers. |
