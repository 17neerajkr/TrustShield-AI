import os
import pandas as pd
from rapidfuzz import fuzz

# ============================================
# Load Rule Dataset
# ============================================

BASE_DIR = os.path.dirname(
    os.path.dirname(
        os.path.abspath(__file__)
    )
)

RULE_PATH = os.path.join(
    BASE_DIR,
    "datasets",
    "rule_engine_final.csv"
)

print("Loading rules from:")
print(RULE_PATH)

rules_df = pd.read_csv(RULE_PATH)

print("Rule Engine Loaded Successfully!")
print("Total Rules:", len(rules_df))


# ============================================
# Rule Analysis Function
# ============================================

def analyze_rules(text):

    text = text.lower()

    total_score = 0
    matched_phrases = set()
    matched_rules = []
    category_scores = {}
    reasons = []

    # =====================================
    # Rule Matching
    # =====================================

    for _, row in rules_df.iterrows():

        phrase = str(row["phrase"]).strip().lower()
        category = str(row["category"]).strip().lower()
        score = int(row["risk_score"])

        similarity = 0
        is_match = False

        # Exact match first
        if phrase in text:

            is_match = True
            similarity = 100

        else:

            similarity = fuzz.token_set_ratio(
                phrase,
                text
            )

            word_count = len(
                phrase.split()
            )

            if word_count <= 2:

                threshold = 70

            elif word_count <= 4:

                threshold = 75

            else:

                threshold = 80

            if similarity >= threshold:

                is_match = True

        if is_match and phrase not in matched_phrases:

            matched_phrases.add(phrase)

            total_score += score

            matched_rules.append({
                "phrase": phrase,
                "category": category,
                "score": score,
                "similarity": similarity
            })

            reasons.append(
                f"{phrase} detected "
                f"({category}, +{score}) "
                f"[Confidence: {similarity}%]"
            )

            category_scores[category] = (
                category_scores.get(
                    category,
                    0
                ) + score
            )

    # =====================================
    # Advanced Scam Pattern Detection
    # =====================================

    found_categories = {
        rule["category"]
        for rule in matched_rules
    }

    if (
        "scam_keyword" in found_categories
        and "communication_channel" in found_categories
    ):

        total_score += 25

        reasons.append(
            "Scam Pattern: Payment request through unofficial communication (+25)"
        )

    if (
        "scam_keyword" in found_categories
        and "sensitive_document" in found_categories
    ):

        total_score += 30

        reasons.append(
            "Scam Pattern: Payment request with document collection (+30)"
        )

    if (
        "urgency" in found_categories
        and "scam_keyword" in found_categories
    ):

        total_score += 20

        reasons.append(
            "Scam Pattern: Urgency combined with payment demand (+20)"
        )

    sensitive_count = sum(
        1
        for rule in matched_rules
        if rule["category"] ==
        "sensitive_document"
    )

    if sensitive_count >= 2:

        total_score += 20

        reasons.append(
            "Multiple sensitive documents requested (+20)"
        )

    communication_count = sum(
        1
        for rule in matched_rules
        if rule["category"] ==
        "communication_channel"
    )

    if communication_count >= 2:

        total_score += 15

        reasons.append(
            "Multiple unofficial communication channels detected (+15)"
        )

    # =====================================
    # Normalize Score
    # =====================================

    total_score = max(
        0,
        min(total_score, 100)
    )

    # =====================================
    # Risk Classification
    # =====================================

    if total_score >= 75:

        risk_level = "Critical"
        signal = "🔴"

    elif total_score >= 50:

        risk_level = "High"
        signal = "🟠"

    elif total_score >= 25:

        risk_level = "Medium"
        signal = "🟡"

    else:

        risk_level = "Low"
        signal = "🟢"

    return {

        "signal": signal,

        "risk_level": risk_level,

        "rule_score": total_score,

        "matched_rules": matched_rules,

        "category_scores": category_scores,

        "reasons": reasons
    }