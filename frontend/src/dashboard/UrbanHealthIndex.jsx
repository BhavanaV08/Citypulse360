import { useEffect, useState } from "react";
import axios from "axios";

function UrbanHealthIndex() {
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

  const water = data.water_level;
  const rain = data.rain;
  const gas = data.gas;
  const riskScore = data.risk_score;

  // Normalize values
  const waterPercent = (water / 4095) * 100;
  const rainPercent = (rain / 4095) * 100;
  const gasPercent = (gas / 4095) * 100;
  const riskPercent = (riskScore / 3000) * 100;

  // Urban Health Formula
  const urbanHealth =
    100 -
    (riskPercent * 0.4 +
      waterPercent * 0.2 +
      rainPercent * 0.2 +
      gasPercent * 0.2);

  const finalScore = Math.max(0, Math.min(100, urbanHealth.toFixed(2)));

  const getColor = () => {
    if (finalScore > 80) return "text-green-600 border-green-500";
    if (finalScore > 60) return "text-yellow-600 border-yellow-500";
    if (finalScore > 40) return "text-orange-600 border-orange-500";
    return "text-red-600 border-red-500";
  };

  return (
    <div className="bg-white rounded-xl shadow-md p-6">
      <h2 className="text-lg font-semibold mb-4">
        Urban Health Index
      </h2>

      <div className="flex items-center justify-between">
        <div>
          <p className="text-3xl font-bold">
            {finalScore} / 100
          </p>
          <p className="text-sm text-gray-500">
            Overall City Stability Score
          </p>
        </div>

        <div
          className={`w-24 h-24 rounded-full border-8 flex items-center justify-center text-xl font-semibold ${getColor()}`}
        >
          {finalScore}
        </div>
      </div>
    </div>
  );
}

export default UrbanHealthIndex;