from fastapi import FastAPI
from pydantic import BaseModel
from typing import List
from .inference import predict_recovery

app = FastAPI()

class Case(BaseModel):
    amount_due: float
    days_overdue: int
    customer_tenure: int
    previous_defaults: int
    agency_touchpoints: int

@app.get("/api/status")
def status():
    return {"status": "Online", "mode": "Serverless"}

@app.post("/api/predict")
def predict(cases: List[Case]):
    # Allow passing data directly
    case_dicts = [c.dict() for c in cases]
    return predict_recovery(case_dicts)
