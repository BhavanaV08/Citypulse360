function FeatureCard({ icon: Icon, title, description }) {
  return (
    <div className="bg-white rounded-2xl shadow-md p-8 text-center hover:shadow-xl transition duration-300">
      
      <div className="flex justify-center mb-6">
        <div className="bg-gray-100 p-4 rounded-full">
          <Icon size={32} className="text-gray-700" />
        </div>
      </div>

      <h3 className="text-lg font-semibold mb-3">
        {title}
      </h3>

      <p className="text-gray-600 text-sm">
        {description}
      </p>

    </div>
  );
}

export default FeatureCard;