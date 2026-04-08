function RainChart() {
  return (
    <div className="bg-white rounded-xl shadow-md p-6">
      <h2 className="text-lg font-semibold mb-4">
        Rain Intensity
      </h2>

      <div className="flex items-end gap-2 h-32">
        {[5, 8, 12, 6, 10, 14, 9].map((value, index) => (
          <div
            key={index}
            className="bg-blue-400 w-6"
            style={{ height: `${value * 5}px` }}
          ></div>
        ))}
      </div>
    </div>
  );
}

export default RainChart;