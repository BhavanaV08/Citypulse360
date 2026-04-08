import { useEffect, useState } from "react";
import axios from "axios";

function RiskGauge() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetchData();
    const interval = setInterval(fetchData, 5000);
    return () => clearInterval(interval);
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:5000/sensor");
      setData(response.data);
    } catch (error) {
      console.error("Error fetching risk data:", error);
    }
  };

  if (!data)
    return (
      <div className="bg-white p-6 rounded-xl shadow">
        Loading...
      </div>
    );

  const risk = data.flood_risk;
  const score = data.risk_score;

  const getStyles = () => {
    if (risk === "High") {
      return {
        text: "text-red-600",
        circle: "border-red-500 text-red-600",
        badge: "bg-red-100 text-red-700"
      };
    }
    if (risk === "Moderate") {
      return {
        text: "text-orange-600",
        circle: "border-orange-500 text-orange-600",
        badge: "bg-orange-100 text-orange-700"
      };
    }
    return {
      text: "text-green-600",
      circle: "border-green-500 text-green-600",
      badge: "bg-green-100 text-green-700"
    };
  };

  const styles = getStyles();

  return (
    <div className="bg-white rounded-xl shadow-md p-6">
      <h2 className="text-lg font-semibold mb-4">
        Flood Risk Level
      </h2>

      <div className="flex items-center justify-between">
        <div>
          <p className={`text-3xl font-bold ${styles.text}`}>
            {risk}
          </p>

          <p className="text-sm text-gray-500 mt-1">
            Risk Score: {score.toFixed(2)}
          </p>

          <span
            className={`inline-block mt-2 text-xs px-3 py-1 rounded-full ${styles.badge}`}
          >
            {risk} Alert
          </span>
        </div>

        <div
          className={`w-24 h-24 rounded-full border-8 flex items-center justify-center text-xl font-semibold ${styles.circle}`}
        >
          {score.toFixed(0)}
        </div>
      </div>
    </div>
  );
}

export default RiskGauge;