import joblib
import pandas as pd
import numpy as np
import sys
import json

def predict_recovery(cases):
    """
    Predicts the Propensity to Pay (PTP) score for a list of new cases.
    """
    # Load the trained model
    try:
        model = joblib.load('recovery_prediction_model.pkl')
    except:
        print("Error: Model not found. Please run 'model_train.py' first.")
        return

    # Convert Input to DataFrame
    df = pd.DataFrame(cases)
    
    # Predict probabilities (Propensity Score)
    # The model returns [prob_fail, prob_success]
    probs = model.predict_proba(df)[:, 1] 
    
    results = []
    for i, p in enumerate(probs):
        score = int(p * 100)
        
        # AI Logic for Allocation (The "Smart" part)
        recommendation = "Manual Review"
        priority = "Low"
        
        if score >= 80:
            recommendation = "Auto-Allocate: Premium Agency"
            priority = "Critical"
        elif score >= 50:
            recommendation = "Auto-Allocate: Standard Agency"
            priority = "High"
        elif score >= 30:
            recommendation = "Internal Retention Team"
            priority = "Medium"
        else:
            recommendation = "Write-off / Legal"
            priority = "Low"
            
        results.append({
            "case_id": f"NEW-{1000+i}",
            "amount_due": float(df.iloc[i]['amount_due']),
            "ptp_score": score,
            "priority": priority,
            "ai_recommendation": recommendation
        })
        
    return results

if __name__ == "__main__":
    print("🤖 AI Inference Engine - Processing Live Queue...")
    print("-----------------------------------------------")
    
    # Simulate incoming live cases from the FedEx system
    new_cases = [
        # High value, recent overdue -> Should have High Score
        {'amount_due': 12000, 'days_overdue': 35, 'customer_tenure': 12, 'previous_defaults': 0, 'agency_touchpoints': 1},
        
        # Low value, very old -> Should have Low Score
        {'amount_due': 500, 'days_overdue': 180, 'customer_tenure': 1, 'previous_defaults': 2, 'agency_touchpoints': 8},
        
        # Medium case
        {'amount_due': 3500, 'days_overdue': 60, 'customer_tenure': 5, 'previous_defaults': 0, 'agency_touchpoints': 3},
    ]
    
    predictions = predict_recovery(new_cases)
    
    # Output as JSON (which the Frontend would consume via API in real life)
    print(json.dumps(predictions, indent=2))
