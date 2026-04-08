function HeroSection() {
  return (
    <section className="text-center py-32 bg-gradient-to-b from-gray-100 via-white to-gray-100">
      
      <h1 className="text-6xl font-bold text-gray-900 mb-6">
        CityPulse 360
      </h1>

      <h2 className="text-xl text-gray-700 mb-4">
        Smart Urban Monitoring & Predictive Alert System
      </h2>

      <p className="text-gray-500 mb-10">
        Transforming Urban Infrastructure Monitoring from Reactive to Predictive
      </p>

      <a
        href="/dashboard"
        className="bg-black text-white px-10 py-4 rounded-lg shadow-md hover:shadow-xl transition duration-300"
      >
        View Live Dashboard
      </a>

    </section>
  );
}

export default HeroSection;