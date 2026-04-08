import { useEffect, useState } from "react";
import axios from "axios";
import StatusCard from "./StatusCard";

function LiveStatusSection() {

  const [data, setData] = useState(null);


  useEffect(() => {

    fetchSensorData();

    // Auto refresh every 5 seconds
    const interval = setInterval(fetchSensorData, 5000);

    return () => clearInterval(interval);

  }, []);



  const fetchSensorData = async () => {

    try {

      const response = await axios.get("http://localhost:5000/sensor");

      setData(response.data);

    }
    catch (error) {

      console.error("Error fetching sensor data:", error);

    }

  };



  if (!data) {

    return (
      <div className="text-center py-20">
        Loading...
      </div>
    );

  }



  return (

    <section className="py-20 bg-gray-100 text-center">


      <h2 className="text-3xl font-semibold mb-8">
        Live System Status
      </h2>



      <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto px-6">


        <StatusCard
          title="Water Level"
          value={data.water_level}
          status={data.flood_risk}
        />


        <StatusCard
          title="Rain Level"
          value={data.rain}
        />


        <StatusCard
          title="Gas Level"
          value={data.gas}
        />


        <StatusCard
          title="Risk Score"
          value={data.risk_score.toFixed(2)}
        />


      </div>


    </section>

  );

}


export default LiveStatusSection;