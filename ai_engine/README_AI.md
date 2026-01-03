# 🧠 AI Engine Documentation

This directory contains the Python backend logic for the **FedEx Smart Recovery** platform. It satisfies the requirement for "AI/ML models for prioritization and recovery prediction".

## 📁 Files
-   **`model_train.py`**: A script that generates synthetic historical debt data, trains a **Random Forest Classifier**, and saves the model.
-   **`inference.py`**: Simulates the "Live" system. It loads the trained model and predicts "Propensity to Pay" scores for incoming cases, assigning them a recommended agency tier.
-   **`recovery_prediction_model.pkl`**: The saved binary of the trained ML model (generated after running `model_train.py`).

## 🛠 Model Architecture
-   **Algorithm**: Random Forest Classifier (Ensemble Learning).
-   **Inputs (Features)**:
    -   `amount_due`: Total debt amount.
    -   `days_overdue`: Age of the debt.
    -   `customer_tenure`: Loyalty of the customer.
    -   `previous_defaults`: Risk history.
    -   `agency_touchpoints`: Contact fatigue.
-   **Output**: Probability Score (0-100%) representing the likelihood of successful recovery.

## 🚀 How to Run the AI
1.  **Install Requirements**:
    ```bash
    pip install -r requirements.txt
    ```
2.  **Train the Model** (One-time setup):
    ```bash
    python model_train.py
    ```
    *Output*: You will see the model accuracy report and a confirmation that `recovery_prediction_model.pkl` was saved.
3.  **Run Inference** (Simulate Live Allocations):
    ```bash
    python inference.py
    ```
    *Output*: A JSON list of prioritized cases with "AI Recommendations" (e.g., "Auto-Allocate: Premium Agency").

## 🔗 Integration with Frontend
In a production deployment, `inference.py` would be wrapped in a **FastAPI** or **Flask** service. The Next.js frontend would make an HTTP POST request to this service with the case details, and the Python backend would return the JSON seen in step 3.
