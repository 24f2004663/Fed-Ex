from fastapi import FastAPI
from pydantic import BaseModel
from typing import List
import uvicorn
import inference  # Our existing inference logic

app = FastAPI(title="FedEx Smart Recovery AI API")

class Case(BaseModel):
    amount_due: float
    days_overdue: int
    customer_tenure: int
    previous_defaults: int
    agency_touchpoints: int

@app.get("/")
def home():
    return {"status": "AI Engine Online", "model": "RandomForest v1.0"}

@app.post("/predict")
def predict(cases: List[Case]):
    # Convert Pydantic objects to list of dicts for our existing function
    case_dicts = [c.dict() for c in cases]
    results = inference.predict_recovery(case_dicts)
    return results

if __name__ == "__main__":
    print("🚀 Starting AI Engine Server on port 8000...")
    uvicorn.run(app, host="0.0.0.0", port=8000)
