from predict import predict_scam
from modules.rules import analyze_rules
from modules.risk_calculator import calculate_final_risk


def generate_report(text):

    # ============================================
    # Machine Learning Prediction
    # ============================================

    ml_result = predict_scam(text)

    # Handle empty input error
    if ml_result.get("status") == "Error":

        print("\n❌", ml_result["message"])
        return

    ml_probability = ml_result["scam_probability"]

    # ============================================
    # Rule Engine Analysis
    # ============================================

    rule_result = analyze_rules(text)

    rule_score = rule_result["rule_score"]

    # ============================================
    # Final Risk Calculation
    # ============================================

    final_result = calculate_final_risk(
        ml_probability,
        rule_score
    )

    # ============================================
    # Display Results
    # ============================================

    print("\n" + "=" * 70)
    print("🛡️ JOBSHIELD AI REPORT")
    print("=" * 70)

    print("\n📩 Input Message:")
    print(text)

    print("\n" + "-" * 70)
    print("🤖 MACHINE LEARNING ANALYSIS")
    print("-" * 70)

    print(f"Verdict: {ml_result['verdict']}")

    print(
        f"Scam Probability: "
        f"{ml_result['scam_probability']}%"
    )

    print(
        f"Legitimate Probability: "
        f"{ml_result['legitimate_probability']}%"
    )

    print(
        f"\nRecommendation:\n"
        f"{ml_result['recommendation']}"
    )

    print("\n" + "-" * 70)
    print("📋 RULE ENGINE ANALYSIS")
    print("-" * 70)

    print(f"Signal: {rule_result['signal']}")

    print(
        f"Risk Level: "
        f"{rule_result['risk_level']}"
    )

    print(
        f"Rule Score: "
        f"{rule_result['rule_score']}/100"
    )

    print("\nReasons:")

    if rule_result["reasons"]:

        for reason in rule_result["reasons"]:

            print(f"• {reason}")

    else:

        print(
            "No suspicious indicators detected."
        )

    print("\n" + "-" * 70)
    print("🛡️ FINAL DECISION")
    print("-" * 70)

    print(f"Signal: {final_result['signal']}")

    print(
        f"Risk Level: "
        f"{final_result['risk_level']}"
    )

    print(
        f"Final Risk Score: "
        f"{final_result['final_score']}/100"
    )

    print(
        f"Trust Score: "
        f"{final_result['trust_score']}/100"
    )

    print(
        f"\nRecommendation:\n"
        f"{final_result['recommendation']}"
    )

    print(
        f"\nSuggested Action:\n"
        f"{final_result['suggested_action']}"
    )

    print(
        f"\nSafety Tip:\n"
        f"{final_result['safety_tip']}"
    )

    print("\n" + "=" * 70)


# ============================================
# Main Program
# ============================================

if __name__ == "__main__":

    print("=" * 70)
    print("🛡️ WELCOME TO JOBSHIELD AI")
    print("=" * 70)

    user_text = input(
        "\nEnter the job message to analyze:\n\n"
    ).strip()

    if not user_text:

        print(
            "\n❌ Input cannot be empty."
        )

    else:

        generate_report(user_text)

    input(
        "\nPress Enter to exit..."
    )