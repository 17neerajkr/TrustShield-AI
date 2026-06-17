def calculate_final_risk(
        ml_probability,
        rule_score):

    # ============================================
    # Fix Probability Range
    # ============================================

    if ml_probability <= 1:
        ml_probability = ml_probability * 100

    ml_probability = round(ml_probability, 2)

    # ============================================
    # Final Risk Score Calculation
    # ============================================

    final_score = (
        ml_probability * 0.7 +
        rule_score * 0.3
    )

    final_score = round(
        min(final_score, 100),
        2
    )

    # ============================================
    # Trust Score
    # ============================================

    trust_score = round(
        max(0, 100 - final_score),
        2
    )

    # ============================================
    # Debug Prints
    # ============================================

    print("\n========== RISK DEBUG ==========")
    print("ML Probability:", ml_probability)
    print("Rule Score:", rule_score)
    print("Final Score:", final_score)
    print("================================\n")

    # ============================================
    # Risk Classification
    # ============================================

    if final_score >= 80:

        signal = "🔴"
        level = "Critical Risk"

        recommendation = (
            "Do NOT proceed with this opportunity."
        )

        suggested_action = (
            "Avoid payments, block the sender, "
            "and report the scam."
        )

        safety_tip = (
            "Legitimate employers never ask "
            "for money before hiring."
        )

    elif final_score >= 60:

        signal = "🟠"
        level = "High Risk"

        recommendation = (
            "Proceed only after verification."
        )

        suggested_action = (
            "Verify company website, HR email "
            "and contact details."
        )

        safety_tip = (
            "Check the company's official "
            "careers page."
        )

    elif final_score >= 40:

        signal = "🟡"
        level = "Medium Risk"

        recommendation = (
            "Exercise caution."
        )

        suggested_action = (
            "Do not share sensitive documents."
        )

        safety_tip = (
            "Avoid WhatsApp-only recruitment."
        )

    else:

        signal = "🟢"
        level = "Low Risk"

        recommendation = (
            "No major concerns detected."
        )

        suggested_action = (
            "Continue with standard verification."
        )

        safety_tip = (
            "Always verify through official channels."
        )

    return {

        "signal": signal,
        "risk_level": level,
        "final_score": final_score,
        "trust_score": trust_score,
        "recommendation": recommendation,
        "suggested_action": suggested_action,
        "safety_tip": safety_tip
    }