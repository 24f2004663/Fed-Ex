# FedEx Smart Recovery - DCA Management Platform

## 🚀 Solution Overview
The **FedEx Smart Recovery** platform is a centralized, AI-powered system designed to reimagine the end-to-end management of Debt Collection Agencies (DCAs). It addresses the core challenges of fragmentation, manual tracking, and lack of visibility by providing a unified, transparent, and intelligent interface.

### 🔑 Key Features
1.  **Smart Allocation Engine (AI)**: Uses a dedicated **Random Forest ML Model** to prioritize cases and automatically assign them to agencies based on "Propensity to Pay".
2.  **Real-Time Executive Dashboard**: Provides instant visibility into recovery rates and agency performance.
3.  **Agency Performance Network**: A transparent scorecard system to benchmark DCAs.
4.  **Governance & Compliance**: Centralized SOP enforcement and audit trails.

## 🛠 Tech Stack
### Frontend (The Dashboard)
-   **Framework**: Next.js 14 (React)
-   **Styling**: Premium Vanilla CSS (Glassmorphism design)
-   **Language**: TypeScript

### Backend (The Intelligence)
-   **Language**: Python
-   **ML Library**: Scikit-Learn (Random Forest)
-   **Logic**: Auto-generation of synthetic training data -> Model Training -> Inference

## 🧠 AI Engine
This project includes a fully functional Python ML prototype in the `ai_engine/` directory.
-   Run `python ai_engine/model_train.py` to generate data and train the model.
-   Run `python ai_engine/inference.py` to see the model predict live outcomes for new cases.

## 📦 Deliverables Mapping
| Problem Statement Requirement | Solution Feature |
|-------------------------------|------------------|
| Centralize case allocation | **frontend/Allocations Module** |
| Real-time dashboards | **frontend/Executive Dashboard** |
| **AI/ML Models** | **ai_engine/model_train.py** & **inference.py** |
| Workflow Automation | **ai_engine/inference.py** (Contains logic for Auto-Allocation) |
| Secure Roles | **frontend/Agencies Portal** (Simulated) |

## 🏃‍♂️ How to Run
1.  **Start Frontend**:
    ```bash
    npm run dev
    ```
    Open [http://localhost:3000](http://localhost:3000).

2.  **Test AI Model**:
    ```bash
    cd ai_engine
    pip install -r requirements.txt
    python model_train.py
    python inference.py
    ```
