🛡️ TrustShield AI
Intelligent Message Trust Assessment System
AI-Powered Cybersecurity Platform for Detecting Scam, Phishing, and Fraudulent Messages
Analyze suspicious text messages, emails, screenshots, and social media communications using Machine Learning, OCR, and Rule-Based Threat Intelligence.
🚀 Project Overview
TrustShield AI is an advanced cybersecurity platform developed to combat the growing threat of online scams, phishing attacks, and social engineering fraud.
The system intelligently analyzes both textual and image-based communications to determine whether a message is Legitimate, Suspicious, or Scam.
The platform combines:
🤖 Machine Learning-based Classification
🛡️ Rule-Based Threat Detection
🖼️ OCR-powered Screenshot Analysis
📊 Dynamic Trust Score Generation
⚠️ Risk Assessment Engine
💡 Explainable AI Recommendations
🎯 Problem Statement
With the rapid increase in digital communication platforms such as WhatsApp, Telegram, Email, LinkedIn, and Social Media, users are frequently targeted by:
Job Scams
Phishing Attacks
Fake Recruitment Messages
Impersonation Fraud
Financial Fraud
Social Engineering Attacks
Manual verification is time-consuming and often ineffective.
TrustShield AI provides an automated and intelligent trust assessment framework capable of identifying potential threats before users become victims.
✨ Key Features
🔍 AI-Powered Text Analysis
Analyze suspicious messages instantly.
Detect phishing patterns and scam indicators.
Predict whether communication is legitimate or fraudulent.
🖼️ OCR-Based Screenshot Analysis
Upload screenshots from:
WhatsApp
Telegram
LinkedIn
Email
SMS
Extract hidden text automatically using OCR.
🧠 Hybrid Detection Engine
Combines:
Machine Learning
Rule Engine
Fuzzy Matching
Threat Intelligence
for enhanced detection accuracy.
📊 Dynamic Trust Score
Generate:
Trust Score (0-100)
Risk Level
Confidence Score
Security Recommendations
📈 Interactive Dashboard
Real-time analytics dashboard with:
Trust Distribution
Risk Level Distribution
Threat Statistics
Security Insights
🏗️ System Architecture
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

🔄 Working Flow
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

🧪 Machine Learning Pipeline
Data Preprocessing
Data Cleaning
Missing Value Handling
Text Normalization
Lower Casing
Stopword Removal
Feature Engineering
TF-IDF Vectorization
Maximum Features: 10,000
Classification Algorithm
Logistic Regression
Evaluation Metrics
Accuracy
Precision
Recall
F1-Score
Confusion Matrix
📂 Datasets Used
The system integrates multiple cybersecurity datasets.
DatasetPurposeLinkedIn Job DatasetLegitimate recruitment messagesRecruitment Emails DatasetJob communication analysisPhishing Email DatasetScam identificationWhatsApp Scam DatasetFraud detectionScam Keywords DatasetRule generationLegitimate Keywords DatasetTrust verificationSensitive Documents DatasetIdentity document detectionCommunication Channels DatasetPlatform verification
Final Dataset Statistics
CategoryRecordsScam Keywords1000Legitimate Keywords1000Sensitive Documents1000Communication Channels1000Recruitment Process1000🛠️ Technology Stack
CategoryTechnologiesFrontendReact.js, TypeScriptStylingTailwind CSSBackendFlaskMachine LearningScikit-LearnOCREasyOCRFuzzy MatchingRapidFuzzData ProcessingPandas, NumPyVisualizationRechartsDeploymentRailway, VercelVersion ControlGit, GitHub📸 Project Screenshots
🏠 Home Page

🔎 Message Analyzer

📊 Analytics Dashboard

ℹ️ About Page

🖼️ OCR Screenshot Analysis

📦 Installation
Clone Repository
git clone https://github.com/17neerajkr/TrustShield-AI.git

cd TrustShield-AI

⚙️ Backend Setup
Create virtual environment:
python -m venv .venv

Activate environment:
Windows
.venv\Scripts\activate

Linux / macOS
source .venv/bin/activate

Install dependencies:
pip install -r requirements.txt

Run backend server:
python server.py

💻 Frontend Setup
Install dependencies:
npm install

Run frontend:
npm run dev

🌐 API Endpoints
Health Check
GET /

Analyze Text
POST /analyze

Request Example
{
    "message": "Congratulations! Pay ₹2500 registration fee."
}

Analyze Screenshot
POST /analyze-image

Upload image using multipart/form-data.
📊 Sample Output
{
  "trust_score": 8.39,
  "risk_level": "Critical Risk",
  "verdict": "Scam",
  "recommendation": "Do NOT proceed."
}

🔒 Security Features
Scam Keyword Detection
Sensitive Document Detection
Payment Request Identification
Communication Channel Verification
Explainable AI Responses
Trust Score Computation
🚀 Future Enhancements
Browser Extension Integration
Multilingual Support
Deep Learning Models
Mobile Application Development
Voice Scam Detection
Real-Time Threat Intelligence Integration
👨‍💻 Developer
Neeraj Kumar
🎓 B.Tech CSE (Data Science)
🏫 Raj Kumar Goel Institute of Technology (AKTU)
Connect With Me
GitHub: https://github.com/17neerajkr
LinkedIn: https://linkedin.com/in/neeraj-kumar-delhi
⭐ If you found this project useful, please consider giving it a Star!
