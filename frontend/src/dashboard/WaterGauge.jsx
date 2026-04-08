import { useEffect, useState } from "react";
import axios from "axios";

function WaterGauge() {
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

  if (!data) return <div className="bg-white p-6 rounded-xl shadow">Loading...</div>;

  const water = data.water_level;
  const risk = data.flood_risk;

  const getColor = () => {
    if (risk === "High") return "border-red-500 text-red-600 bg-red-100";
    if (risk === "Moderate") return "border-orange-500 text-orange-600 bg-orange-100";
    return "border-green-500 text-green-600 bg-green-100";
  };

  return (
    <div className="bg-white rounded-xl shadow-md p-6">
      <h2 className="text-lg font-semibold mb-4">
        Water Level Monitoring
      </h2>

      <div className="flex items-center justify-between">
        <div>
          <p className="text-3xl font-bold text-gray-800">
            {water}
          </p>
          <span className={`text-sm px-3 py-1 rounded-full ${getColor()}`}>
            {risk}
          </span>
        </div>

        <div className={`w-24 h-24 rounded-full border-8 flex items-center justify-center text-xl font-semibold ${getColor()}`}>
          {water}
        </div>
      </div>
    </div>
  );
}

export default WaterGauge;