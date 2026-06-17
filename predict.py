import joblib

# ============================================
# Load Model and Vectorizer
# ============================================

print("Loading JobShield AI...")

# model = joblib.load("models/model.pkl")
# vectorizer = joblib.load("models/vectorizer.pkl")
import os

BASE_DIR = os.path.dirname(
    os.path.abspath(__file__)
)

MODEL_PATH = os.path.join(
    BASE_DIR,
    "models",
    "model.pkl"
)

VECTORIZER_PATH = os.path.join(
    BASE_DIR,
    "models",
    "vectorizer.pkl"
)

model = joblib.load(MODEL_PATH)

vectorizer = joblib.load(
    VECTORIZER_PATH
)
print("JobShield AI is ready!\n")


# ============================================
# Prediction Function
# ============================================

def predict_scam(text):

    if not text.strip():
        return {
            "status": "Error",
            "message": "Input text cannot be empty."
        }

    transformed_text = vectorizer.transform([text])

    prediction = model.predict(transformed_text)[0]

    probabilities = model.predict_proba(transformed_text)[0]

    scam_probability = probabilities[1] * 100
    legitimate_probability = probabilities[0] * 100

    # Verdict System
    if scam_probability >= 70:
        verdict = "Scam"
        signal = "🔴"
        recommendation = (
            "Do NOT share personal information or make payments. "
            "Verify the source before proceeding."
        )

    elif scam_probability >= 40:
        verdict = "Suspicious"
        signal = "🟡"
        recommendation = (
            "Proceed with caution. Verify company details, "
            "email domains, and communication channels."
        )

    else:
        verdict = "Legitimate"
        signal = "🟢"
        recommendation = (
            "No major scam indicators detected. "
            "However, always remain vigilant."
        )

    return {
        "signal": signal,
        "verdict": verdict,
        "scam_probability": round(scam_probability, 2),
        "legitimate_probability": round(legitimate_probability, 2),
        "recommendation": recommendation
    }


# ============================================
# Main Program
# ============================================

if __name__ == "__main__":

    print("=" * 60)
    print("🛡️         WELCOME TO JOBSHIELD AI")
    print("=" * 60)

    user_text = input("\nEnter text to analyze:\n\n")

    result = predict_scam(user_text)

    if result.get("status") == "Error":
        print("\n❌", result["message"])

    else:
        print("\n" + "=" * 60)
        print("🔍 ANALYSIS RESULT")
        print("=" * 60)

        print(
            f"\nSignal: {result['signal']}"
        )

        print(
            f"Verdict: {result['verdict']}"
        )

        print(
            f"Scam Probability: "
            f"{result['scam_probability']}%"
        )

        print(
            f"Legitimate Probability: "
            f"{result['legitimate_probability']}%"
        )

        print(
            f"\nRecommendation:\n"
            f"{result['recommendation']}"
        )

        print("\n" + "=" * 60)


