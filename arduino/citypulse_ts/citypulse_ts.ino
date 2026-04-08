#include <WiFi.h>
#include <ThingSpeak.h>

/******** WIFI ********/
const char* ssid = "Omega_babu";
const char* password = "12345678";

/******** THINGSPEAK ********/
unsigned long channelID = 3272557;
const char* writeAPIKey = "YSW8J7E5GUAT7XWP";

WiFiClient client;

/******** PIN CONFIG ********/
#define IR_PIN   4
#define MQ6_PIN  34
#define SOIL_PIN 35
#define RAIN_PIN 32

/******** VARIABLES ********/
int objectCount = 0;
int lastIRState = HIGH;

int gasThreshold = 3800;
int dryValue = 3200;
int wetValue = 1500;
int rainThreshold = 2500;

void setup() {
  Serial.begin(115200);

  pinMode(IR_PIN, INPUT);

  analogReadResolution(12);
  analogSetAttenuation(ADC_11db);

  /******** WIFI CONNECT ********/
  WiFi.begin(ssid, password);
  Serial.print("Connecting WiFi");

  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.print(".");
  }

  Serial.println("\nWiFi Connected");
  ThingSpeak.begin(client);

  Serial.println("===== CityPulse Smart Monitoring Started =====");
}

void loop() {

  // ===== IR SENSOR =====
  int currentIRState = digitalRead(IR_PIN);
  if (lastIRState == HIGH && currentIRState == LOW) {
    objectCount++;
  }
  lastIRState = currentIRState;

  // ===== RAIN SENSOR =====
  int rainValue = analogRead(RAIN_PIN);
  bool rainDetected = rainValue > rainThreshold;

  // ===== GAS SENSOR =====
  int gasValue = analogRead(MQ6_PIN);
  bool gasAlert = gasValue > gasThreshold;

  // ===== SOIL SENSOR =====
  int soilRaw = analogRead(SOIL_PIN);
  int moisturePercent = map(soilRaw, dryValue, wetValue, 0, 100);
  moisturePercent = constrain(moisturePercent, 0, 100);

  // ===== SERIAL DISPLAY =====
  Serial.println("\n----------- CityPulse Data -----------");

  Serial.print("IR Count: ");
  Serial.println(objectCount);

  Serial.print("Rain Raw: ");
  Serial.print(rainValue);
  Serial.print(" | ");
  Serial.println(rainDetected ? "Rain" : "No Rain");

  Serial.print("Gas Level: ");
  Serial.print(gasValue);
  Serial.print(" | ");
  Serial.println(gasAlert ? "Bad Air" : "Air Safe");

  Serial.print("Soil Raw: ");
  Serial.print(soilRaw);
  Serial.print(" | Moisture: ");
  Serial.print(moisturePercent);
  Serial.println(" %");

  // ===== THINGSPEAK UPLOAD =====
  ThingSpeak.setField(1, objectCount);
  ThingSpeak.setField(2, rainValue);
  ThingSpeak.setField(3, gasValue);
  ThingSpeak.setField(4, soilRaw);
  ThingSpeak.setField(5, moisturePercent);

  int x = ThingSpeak.writeFields(channelID, writeAPIKey);

  if (x == 200) Serial.println("Upload Success");
  else Serial.println("Upload Failed");

  Serial.println("--------------------------------------");

  delay(15000);   // ThingSpeak rule
}