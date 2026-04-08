function StatusCard({ title, value, status }) {

  const getStatusColor = () => {

    if (status === "High")
      return "bg-red-100 text-red-700";

    if (status === "Moderate")
      return "bg-orange-100 text-orange-700";

    if (status === "Low")
      return "bg-green-100 text-green-700";

    return "bg-yellow-100 text-yellow-700";

  };


  return (

    <div className="bg-white rounded-xl shadow-md px-6 py-5">

      <p className="text-sm text-gray-500">
        {title}
      </p>


      <p className="text-xl font-semibold text-gray-900">
        {value}
      </p>


      {status && (

        <span className={`text-xs px-3 py-1 rounded-full ${getStatusColor()}`}>

          {status}

        </span>

      )}

    </div>

  );

}

export default StatusCard;