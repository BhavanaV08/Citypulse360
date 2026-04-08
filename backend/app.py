

from flask import Flask, jsonify
from flask_cors import CORS
import pandas as pd
import smtplib
from email.mime.text import MIMEText

app = Flask(__name__)
CORS(app)

# =========================
# 🔐 EMAIL CONFIGURATION
# =========================
SENDER_EMAIL = "prabuabinaya74@gmail.com"
APP_PASSWORD = "qykjoxouxqqlroor"   # ⚠️ Replace with new app password
RECEIVER_EMAIL = "abinayaprabu0602@gmail.com"

# Flag to prevent email spamming
last_alert_sent = False


# =========================
# 📧 EMAIL FUNCTION
# =========================
def send_email_alert(risk_score, water, rain, gas):
    subject = "🚨 Emergency Flood Alert - CityPulse 360"

    body = f"""
ALERT LEVEL: HIGH RISK

Risk Score: {risk_score}
Water Level: {water}
Rain Level: {rain}
Gas Level: {gas}

Immediate action required.
"""

    msg = MIMEText(body)
    msg["Subject"] = subject
    msg["From"] = SENDER_EMAIL
    msg["To"] = RECEIVER_EMAIL

    try:
        server = smtplib.SMTP("smtp.gmail.com", 587)
        server.starttls()
        server.login(SENDER_EMAIL, APP_PASSWORD)
        server.sendmail(SENDER_EMAIL, RECEIVER_EMAIL, msg.as_string())
        server.quit()

        print("🚨 Email Sent Successfully")
        return "Sent"

    except Exception as e:
        print("❌ Email Error:", e)
        return "Failed"


# =========================
# 📊 SENSOR ROUTE
# =========================
@app.route("/sensor", methods=["GET"])
def get_sensor_data():
    global last_alert_sent

    try:
        # Read latest data every request (important)
        df = pd.read_csv("citypulse.csv")
        latest = df.iloc[-1]

        ir = int(latest["field1"])
        rain = int(latest["field2"])
        water = int(latest["field3"])
        gas = int(latest["field4"])

        # Risk formula
        risk_score = (water * 0.5) + (rain * 0.3) + (gas * 0.2)

        # Risk category
        if risk_score > 400:
            risk = "High"
        elif risk_score > 200:
            risk = "Moderate"
        else:
            risk = "Low"

        email_status = "Not Sent"

        # ✅ Send email only once when High
        if risk == "High" and not last_alert_sent:
            email_status = send_email_alert(risk_score, water, rain, gas)
            last_alert_sent = True

        # ✅ Reset when risk becomes Low
        if risk == "Low":
            last_alert_sent = False

        return jsonify({
            "ir": ir,
            "rain": rain,
            "water_level": water,
            "gas": gas,
            "risk_score": float(risk_score),
            "flood_risk": risk,
            "email_status": email_status
        })

    except Exception as e:
        print("❌ Sensor Error:", e)
        return jsonify({"error": "Failed to read sensor data"}), 500


# =========================
# 🚀 RUN SERVER
# =========================
if __name__ == "__main__":
    app.run(debug=True)