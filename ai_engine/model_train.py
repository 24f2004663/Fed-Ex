import pandas as pd
import numpy as np
from sklearn.ensemble import RandomForestClassifier
from sklearn.model_selection import train_test_split
from sklearn.metrics import classification_report
import joblib
import warnings

warnings.filterwarnings('ignore')

print("🚀 FedEx Smart Recovery - AI Engine Initialization")
print("==================================================")

# 1. GENERATE SYNTHETIC DATA
# We simulate a dataset of past debt cases to train our model.
# Features:
# - amount_due: Total debt amount ($)
# - days_overdue: How many days late
# - customer_tenure: Years with FedEx
# - previous_defaults: Number of past defaults
# - agency_touchpoints: Number of calls/emails made
# Target:
# - recovery_success: 1 (Recovered), 0 (Failed)

print("\n[1/4] Generating Synthetic Historical Data...")
n_samples = 5000
np.random.seed(42)

data = pd.DataFrame({
    'amount_due': np.random.exponential(scale=5000, size=n_samples),
    'days_overdue': np.random.randint(30, 365, size=n_samples),
    'customer_tenure': np.random.randint(1, 20, size=n_samples),
    'previous_defaults': np.random.poisson(lam=0.5, size=n_samples),
    'agency_touchpoints': np.random.randint(0, 10, size=n_samples)
})

# Define logic for "recovery_success" (Ground Truth) to make the model learnable
# Easier to recover if: Low amount, Low days overdue, High tenure, Low defaults
# We create a "score" to determine outcome + some noise
probability_score = (
    (1 / (data['amount_due'] + 1000)) * 50000 +  # Lower amount -> Higher score
    (1 / (data['days_overdue'] + 10)) * 2000 +   # Lower days -> Higher score
    (data['customer_tenure'] * 2) -              # Higher tenure -> Higher score
    (data['previous_defaults'] * 10)             # More defaults -> Lower score
)
# Normalize and threshold
threshold = np.percentile(probability_score, 60) # Top 40% are recovered
data['recovery_success'] = (probability_score > threshold).astype(int)

print(f"      Generated {n_samples} historical records.")
print(f"      Recovery Rate in dataset: {data['recovery_success'].mean():.2%}")

# 2. TRAIN MODEL
print("\n[2/4] Training Random Forest Model...")

X = data.drop('recovery_success', axis=1)
y = data['recovery_success']

X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# Initialize Random Forest
rf_model = RandomForestClassifier(n_estimators=100, max_depth=10, random_state=42)
rf_model.fit(X_train, y_train)

print("      Model Training Complete.")

# 3. EVALUATE
print("\n[3/4] Evaluating Performance...")
y_pred = rf_model.predict(X_test)
print(classification_report(y_test, y_pred))

# 4. SAVE ARTIFACTS
print("\n[4/4] Saving Model Artifacts...")
joblib.dump(rf_model, 'recovery_prediction_model.pkl')
print("      Saved 'recovery_prediction_model.pkl'")

print("\n✅ AI Engine Ready. Use 'inference.py' to predict new cases.")
