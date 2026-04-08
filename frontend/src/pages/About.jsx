import React from "react";

function About() {
  return (
    <div className="bg-gray-100 min-h-screen p-10">

      <div className="max-w-5xl mx-auto space-y-10">

        <h1 className="text-4xl font-bold text-center">
          About CityPulse 360
        </h1>

        {/* 2015 Flood Section */}
        <div className="bg-white rounded-2xl shadow-md p-8 space-y-4">
          <h2 className="text-2xl font-semibold">
            Inspiration: Chennai Floods 2015
          </h2>

          <p className="text-gray-700 leading-relaxed">
            In 2015, Chennai faced one of the most devastating floods in
            Indian history. Over 400 lives were lost and thousands were
            displaced. The disaster exposed the lack of real-time monitoring,
            predictive analytics, and integrated emergency response systems.
          </p>

          <p className="text-gray-700 leading-relaxed">
            CityPulse 360 was built to ensure that such tragedies can be
            predicted, monitored, and managed using intelligent urban
            analytics.
          </p>
          <div className="grid md:grid-cols-3 gap-6 mt-6">
  <img
    src="/flood1.jpg"
    alt="Flood Rescue Operation"
    className="rounded-2xl shadow-md hover:scale-105 transition duration-300"
  />
  <img
    src="/flood2.jpg"
    alt="Chennai Flood Aerial View"
    className="rounded-2xl shadow-md hover:scale-105 transition duration-300"
  />
  <img
    src="/flood3.jpg"
    alt="Flood Evacuation"
    className="rounded-2xl shadow-md hover:scale-105 transition duration-300"
  />
</div>
        </div>

        {/* Problem Section */}
        <div className="bg-white rounded-2xl shadow-md p-8 space-y-4">
          <h2 className="text-2xl font-semibold">
            The Problem
          </h2>

          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Lack of unified urban monitoring systems</li>
            <li>Delayed flood response mechanisms</li>
            <li>No predictive flood risk analysis</li>
            <li>No integrated city stability index</li>
          </ul>
        </div>

        {/* Solution Section */}
        <div className="bg-white rounded-2xl shadow-md p-8 space-y-4">
          <h2 className="text-2xl font-semibold">
            Our Solution
          </h2>

          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Real-time IoT-based monitoring</li>
            <li>Flood Risk Scoring Engine</li>
            <li>AI-based Flood Prediction</li>
            <li>Urban Health Index</li>
            <li>Geo-based Visualization & Alerts</li>
          </ul>
        </div>

      </div>
    </div>
  );
}

export default About;