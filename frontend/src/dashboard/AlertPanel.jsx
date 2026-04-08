import { useEffect, useState } from "react";
import axios from "axios";

function AlertPanel() {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios.get("http://localhost:5000/sensor")
      .then(res => setData(res.data))
      .catch(err => console.error(err));
  }, []);

  if (!data) return null;

  const risk = data.flood_risk;

  return (
    <div className="bg-white rounded-xl shadow-md p-6">
      <h2 className="text-lg font-semibold mb-4">
        Alert Panel
      </h2>

      {risk === "High" && (
        <p className="text-red-600 font-medium">
          🚨 High Flood Risk Detected
        </p>
      )}

      {risk === "Moderate" && (
        <p className="text-orange-600 font-medium">
          ⚠ Moderate Flood Risk
        </p>
      )}

      {risk === "Low" && (
        <p className="text-green-600 font-medium">
          ✅ System Safe
        </p>
      )}
    </div>
  );
}

export default AlertPanel;