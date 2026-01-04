# Preloaded Data & Synthetic Data Architecture

## Overview
This prototype uses **Synthetic Seed Data** to simulate a live production environment. Since we cannot access real sensitive FedEx customer financial records for the hackathon, we created realistic "Digital Twins" of data points to demonstrate the system's capabilities.

## 1. AI Training Data (`ai_engine/model_train.py`)
the AI model was not trained on empty air. We generated **1,000 synthetic historical case records** to teach the Random Forest algorithm patterns.

**Data Points Generated:**
- **Amount Due:** Random values between $100 and $50,000.
- **Days Overdue:** 30 to 365 days.
- **Customer Tenure:** 1 to 20 years.
- **Previous Defaults:** 0 to 5 prior incidents.
- **Agency Touchpoints:** How many times they've been called (0-10).

**Why this matters:**
This allows the AI to learn *correlations* (e.g., "High tenure + Low touchpoints = High Probability of Payment") and produce the **Propensity Scores (PTP)** you see on the dashboard.

## 2. Frontend Dashboard Data
The web interface is preloaded with specific scenarios to demonstrate key use cases:

### A. Allocations Page (`src/app/allocations/page.tsx`)
- **Sample Case:** `C-1201 (Foxtrot Air)` - $150,000
  - *Purpose:* Demonstrates the "Critical Priority" logic for high-value debts.
- **Sample Case:** `C-1155 (Echo Trans)` - $23,100 / Score 45
  - *Purpose:* Demonstrates a "Legal Escalation" recommendation (Low score).
- **Sample Case:** `C-1023 (Acme Logistics)` - Score 92
  - *Purpose:* Demonstrates "Premium Agency" allocation for good customers.

### B. Agency Network (`src/app/agencies/page.tsx`)
- **Profiles:** 6 distinct agency profiles (e.g., "Alpha Recoveries", "LegalPoint").
- **Metrics:** Pre-assigned Compliance Rates (98% vs 89%) and Recovery Totals.
- *Purpose:* To show how the system would compare vendor performance side-by-side.

### C. Executive Dashboard (`src/app/page.tsx`)
- **Mock Alert:** "3 Accounts at Risk ($450k)"
- *Purpose:* To demonstrate the "Statute of Limitations" warning system, which is a specific business rule requirement.

## Summary for Evaluation
**"The data is not real, but the Logic is."**
The numbers are placeholders, but the *relationships* between them (how a score is calculated, how a case is sorted, how an alert is triggered) are fully functional and representative of the final deployed solution.
