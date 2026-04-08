function TrafficChart() {
  return (
    <div className="bg-white rounded-xl shadow-md p-6">
      <h2 className="text-lg font-semibold mb-4">
        Traffic Density
      </h2>

      <div className="flex justify-between text-sm">
        <div className="text-green-600">Low - 34%</div>
        <div className="text-yellow-600">Moderate - 46%</div>
        <div className="text-red-600">High - 20%</div>
      </div>
    </div>
  );
}

export default TrafficChart;