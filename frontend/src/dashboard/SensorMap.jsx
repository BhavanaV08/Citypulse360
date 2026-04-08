import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

function SensorMap() {
  return (
    <div className="bg-white rounded-xl shadow p-4 h-72">
      <MapContainer center={[13.0827, 80.2707]} zoom={12} style={{ height: "100%" }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[13.0827, 80.2707]}>
          <Popup>Sensor #07 - Safe</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}

export default SensorMap;