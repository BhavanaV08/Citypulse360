import FeatureCard from "./FeatureCard";
import { Cpu, Cloud, BarChart3, Bell } from "lucide-react";

function FeaturesSection() {
  return (
    <section id="features" className="py-24 bg-gray-50 text-center">
      
      <h2 className="text-3xl font-semibold mb-4">
        Key Features
      </h2>

      <p className="text-gray-600 mb-14">
        Include guides to intelligence, user-friendly services.
      </p>

      <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto px-6">

        <FeatureCard
          icon={Cpu}
          title="Real-time IoT Data Monitoring"
          description="Collects and transmits real-time environmental data using IoT sensors."
        />

        <FeatureCard
          icon={Cloud}
          title="Cloud-based Data Storage"
          description="Securely stores urban sensor data in centralized cloud storage."
        />

        <FeatureCard
          icon={BarChart3}
          title="Machine Learning Risk Prediction"
          description="Utilizes ML algorithms to detect anomalies and predict risks."
        />

        <FeatureCard
          icon={Bell}
          title="Automated Alert System"
          description="Displays predictive alerts through centralized dashboard."
        />

      </div>

    </section>
  );
}

export default FeaturesSection;