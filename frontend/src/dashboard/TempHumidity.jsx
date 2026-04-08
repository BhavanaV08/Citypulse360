import { useEffect, useState } from "react";
import axios from "axios";

function TempHumidity() {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios.get("http://localhost:5000/sensor")
      .then(res => setData(res.data))
      .catch(err => console.error(err));
  }, []);

  if (!data) return null;

  return (
    <div className="bg-white rounded-xl shadow-md p-6">
      <h2 className="text-lg font-semibold mb-4">
        Rain & Gas Levels
      </h2>

      <div className="flex justify-between">
        <div>
          <p className="text-2xl font-bold">{data.rain}</p>
          <p className="text-gray-500 text-sm">Rain</p>
        </div>

        <div>
          <p className="text-2xl font-bold">{data.gas}</p>
          <p className="text-gray-500 text-sm">Gas</p>
        </div>
      </div>
    </div>
  );
}

export default TempHumidity;