import WaterGauge from "../dashboard/WaterGauge";
import RiskGauge from "../dashboard/RiskGauge";
import RainChart from "../dashboard/RainChart";
import TempHumidity from "../dashboard/TempHumidity";
import TrafficChart from "../dashboard/TrafficChart";
import AlertPanel from "../dashboard/AlertPanel";
import SensorMap from "../dashboard/SensorMap";
import UrbanHealthIndex from "../dashboard/UrbanHealthIndex";
import PredictionPanel from "../dashboard/PredictionPanel";

function Dashboard() {
  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <div className="grid lg:grid-cols-3 gap-6">

        <div className="lg:col-span-2 space-y-6">
  <WaterGauge />
  <RainChart />
  <TempHumidity />
  <TrafficChart />
  <PredictionPanel />   {/* Add here */}
</div>

        <div className="space-y-6">
  <RiskGauge />
  <UrbanHealthIndex />
  <AlertPanel />
  <SensorMap />
</div>

      </div>
    </div>
  );
}

export default Dashboard;