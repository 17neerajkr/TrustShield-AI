# 🛡️ TrustShield AI

## Intelligent Message Trust Assessment System

> AI-Powered Cybersecurity Platform for Detecting Scam, Phishing, and Fraudulent Messages.

<p align="center">

🌐 <b>Live Frontend:</b> https://trustshield.site.je/ <br>
⚙️ <b>Backend API:</b> https://trustshield-backend-production.up.railway.app

</p>

<p align="center">
  <a href="https://trustshield.site.je/">
    <img src="https://img.shields.io/badge/🚀%20Live%20Demo-Visit%20Now-blue?style=for-the-badge">
  </a>

  <a href="https://trustshield-backend-production.up.railway.app">
    <img src="https://img.shields.io/badge/⚙️%20Backend%20API-Active-success?style=for-the-badge">
  </a>
</p>

---

> **AI-Powered Cybersecurity Platform for Detecting Scam, Phishing, and Fraudulent Messages**
---
Analyze suspicious text messages, emails, screenshots, and social media communications using **Machine Learning, OCR, and Rule-Based Threat Intelligence**.

---
> **📝 Note:** Image-based message analysis is currently supported only in the Streamlit application. The feature is temporarily unavailable in the live demo due to server memory limitations and deployment constraints. Work is in progress to enable this functionality in future releases.
----
# 🚀 Project Overview

TrustShield AI is an advanced cybersecurity platform developed to combat the growing threat of online scams, phishing attacks, and social engineering fraud.

The system intelligently analyzes both textual and image-based communications to determine whether a message is:

- ✅ Legitimate
- ⚠️ Suspicious
- 🚨 Scam

The platform combines:

- 🤖 Machine Learning-based Classification
- 🛡️ Rule-Based Threat Detection
- 🖼️ OCR-powered Screenshot Analysis
- 📊 Dynamic Trust Score Generation
- ⚠️ Risk Assessment Engine
- 💡 Explainable AI Recommendations

---

# 🎯 Problem Statement

With the rapid increase in digital communication platforms such as **WhatsApp, Telegram, Email, LinkedIn, and Social Media**, users are frequently targeted by:

- Job Scams
- Phishing Attacks
- Fake Recruitment Messages
- Impersonation Fraud
- Financial Fraud
- Social Engineering Attacks

Manual verification is time-consuming and often ineffective.

TrustShield AI provides an automated and intelligent trust assessment framework capable of identifying potential threats before users become victims.

---

# ✨ Key Features

## 🔍 AI-Powered Text Analysis

- Analyze suspicious messages instantly.
- Detect phishing patterns and scam indicators.
- Predict whether communication is legitimate or fraudulent.

## 🖼️ OCR-Based Screenshot Analysis

Upload screenshots from:

- WhatsApp
- Telegram
- LinkedIn
- Email
- SMS

Extract hidden text automatically using OCR.

## 🧠 Hybrid Detection Engine

Combines:

- Machine Learning
- Rule Engine
- Fuzzy Matching
- Threat Intelligence

for enhanced detection accuracy.

## 📊 Dynamic Trust Score

Generate:

- Trust Score (0-100)
- Risk Level
- Confidence Score
- Security Recommendations

## 📈 Interactive Dashboard

Real-time analytics dashboard with:

- Trust Distribution
- Risk Level Distribution
- Threat Statistics
- Security Insights

---

# 🏗️ System Architecture

```text
+------------------+
|      User        |
+--------+---------+
         |
         v
+----------------------+
|  Text / Image Input  |
+----------+-----------+
           |
+----------+-----------+
|                      |
v                      v
+-------------------+  +---------------------+
| Text Message      |  | Screenshot Upload   |
+-------------------+  +----------+----------+
                                  |
                                  v
                      +----------------------+
                      |    EasyOCR Engine    |
                      +----------+-----------+
                                 |
                                 v
                     +-----------------------+
                     | Extracted Text Output |
                     +-----------+-----------+
                                 |
                                 v
                     +-----------------------+
                     | Text Preprocessing    |
                     +-----------+-----------+
                                 |
                                 v
                     +-----------------------+
                     | TF-IDF Vectorization  |
                     +-----------+-----------+
                                 |
                                 v
       +----------------------------------------------+
       | Logistic Regression ML Classification Model |
       +----------------------------------------------+
                                 |
                                 v
       +----------------------------------------------+
       | Rule Engine + RapidFuzz Matching            |
       +----------------------------------------------+
                                 |
                                 v
       +----------------------------------------------+
       | Final Risk Assessment Engine                |
       +----------------------------------------------+
                                 |
                                 v
       +----------------------------------------------+
       | Trust Score + Recommendations               |
       +----------------------------------------------+
```

---

# 🔄 Working Flow

```text
User Input
     ↓
Text / Image Submission
     ↓
OCR Text Extraction (if image)
     ↓
Text Cleaning & Preprocessing
     ↓
TF-IDF Feature Extraction
     ↓
Machine Learning Prediction
     ↓
Rule-Based Threat Analysis
     ↓
Risk Score Calculation
     ↓
Trust Score Generation
     ↓
Recommendation Engine
     ↓
Final Security Verdict
```

---

# 🧪 Machine Learning Pipeline

## Data Preprocessing

- Data Cleaning
- Missing Value Handling
- Text Normalization
- Lower Casing
- Stopword Removal

## Feature Engineering

- TF-IDF Vectorization
- Maximum Features: **10,000**

## Classification Algorithm

- Logistic Regression

## Evaluation Metrics

- Accuracy
- Precision
- Recall
- F1-Score
- Confusion Matrix

---

# 📂 Datasets Used

| Dataset | Purpose |
|----------|---------|
| LinkedIn Job Dataset | Legitimate recruitment messages |
| Recruitment Emails Dataset | Job communication analysis |
| Phishing Email Dataset | Scam identification |
| WhatsApp Scam Dataset | Fraud detection |
| Scam Keywords Dataset | Rule generation |
| Legitimate Keywords Dataset | Trust verification |
| Sensitive Documents Dataset | Identity document detection |
| Communication Channels Dataset | Platform verification |

## Final Dataset Statistics

| Category | Records |
|-----------|---------|
| Scam Keywords | 1000 |
| Legitimate Keywords | 1000 |
| Sensitive Documents | 1000 |
| Communication Channels | 1000 |
| Recruitment Process | 1000 |

---

# 🛠️ Technology Stack

| Category | Technologies |
|-----------|--------------|
| Frontend | React.js, TypeScript |
| Styling | Tailwind CSS |
| Backend | Flask |
| Machine Learning | Scikit-Learn |
| OCR | EasyOCR |
| Fuzzy Matching | RapidFuzz |
| Data Processing | Pandas, NumPy |
| Visualization | Recharts |
| Deployment | Railway, Vercel |
| Version Control | Git, GitHub |

---


# 📸 Project Screenshots

## 🏠 Home Page

![Home Page](assest/HOME.png)

---

## 🔎 Message Analyzer

![Message Analyzer](assest/MESSAGE%20ANALYZER.png)

---

## 📊 Analytics Dashboard

![Dashboard](assest/DASHBOARD.png)

---

## ℹ️ About Page

![About Page](assest/ABOUT.png)

---

## 🧠 Decision Making Process

![Decision Making](assest/DECISION%20-%20MAKING.png)

---

## 🔄 System Process Flow

![Process Flow](assest/PROCESS.png)

---

## 🛠️ Technology Stack & Use Cases

![Tech Stack](assest/TECH%20-%20USE%20CASE.png)

---

## 🌐 Threat Landscape

![Threat Landscape](assest/THREAD%20LANDSCAPE.png)

---

## 🖥️ Streamlit Interface

![Streamlit UI](assest/STREAM%20LIT.png)

----

# 📦 Installation

## Clone Repository

```bash
git clone https://github.com/17neerajkr/TrustShield-AI.git

cd TrustShield-AI
```

---

# ⚙️ Backend Setup

Create virtual environment:

```bash
python -m venv .venv
```

### Windows

```bash
.venv\Scripts\activate
```

### Linux / macOS

```bash
source .venv/bin/activate
```

Install dependencies:

```bash
pip install -r requirements.txt
```

Run backend:

```bash
python server.py
```

---

# 💻 Frontend Setup

```bash
npm install

npm run dev
```

---

# 🌐 API Endpoints

## Health Check

```http
GET /
```

## Analyze Text

```http
POST /analyze
```

### Request Example

```json
{
  "message": "Congratulations! Pay ₹2500 registration fee."
}
```

## Analyze Screenshot

```http
POST /analyze-image
```

---

# 📊 Sample Output

```json
{
  "trust_score": 8.39,
  "risk_level": "Critical Risk",
  "verdict": "Scam",
  "recommendation": "Do NOT proceed."
}
```

---

# 🔒 Security Features

- Scam Keyword Detection
- Sensitive Document Detection
- Payment Request Identification
- Communication Channel Verification
- Explainable AI Responses
- Trust Score Computation

---

# 🚀 Future Enhancements

- Browser Extension Integration
- Multilingual Support
- Deep Learning Models
- Mobile Application Development
- Voice Scam Detection
- Real-Time Threat Intelligence Integration

---

# 👨‍💻 Developer

**Neeraj Kumar**



## Connect With Me

- GitHub: https://github.com/17neerajkr
- LinkedIn: https://linkedin.com/in/neeraj-kumar-delhi

---

## ⭐ If you found this project useful, please consider giving it a Star!
