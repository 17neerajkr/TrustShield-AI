import requests

response = requests.post(

    "http://127.0.0.1:5000/analyze",

    json={

        "message":
        "Congratulations! You have been selected. "
        "No interview is required. "
        "Pay ₹2500 registration fee "
        "and send Aadhaar Card via WhatsApp."

    }

)

print(response.status_code)

print(response.json())