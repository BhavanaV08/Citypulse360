import { useEffect, useState } from "react";
import axios from "axios";

function PredictionPanel() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetchData();
    const interval = setInterval(fetchData, 5000);
    return () => clearInterval(interval);
  }, []);

  const fetchData = async () => {
    try {
      const res = await axios.get("http://localhost:5000/sensor");
      setData(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  if (!data)
    return <div className="bg-white p-6 rounded-xl shadow">Loading...</div>;

  const rain = data.rain;
  const water = data.water_level;
  const risk = data.flood_risk;

  // Simple prediction logic
  let predictedRisk = "Low";
  let confidence = 70;
  let trend = "Stable";
  let action = "Continue Monitoring";

  if (rain > 2000 || water > 2500) {
    predictedRisk = "High";
    confidence = 85;
    trend = "Increasing ⬆";
    action = "Activate Drainage Systems";
  } else if (rain > 1000 || water > 1500) {
    predictedRisk = "Moderate";
    confidence = 78;
    trend = "Rising ⬆";
    action = "Inspect Drainage Channels";
  }

  const getColor = () => {
    if (predictedRisk === "High") return "text-red-600 border-red-500";
    if (predictedRisk === "Moderate") return "text-orange-600 border-orange-500";
    return "text-green-600 border-green-500";
  };

  return (
    <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition duration-300">
      <h2 className="text-lg font-semibold mb-4">
        Flood Prediction (Next 30 Minutes)
      </h2>

      <div className="space-y-2">
        <p className={`text-xl font-bold ${getColor()}`}>
          Predicted Risk: {predictedRisk}
        </p>
        <p>Confidence: {confidence}%</p>
        <p>Trend: {trend}</p>
        <p className="text-sm text-gray-600">
          Suggested Action: {action}
        </p>
      </div>
    </div>
  );
}

export default PredictionPanel;