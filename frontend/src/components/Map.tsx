// docs: https://react-leaflet.js.org/docs/example-events/
import { MapContainer, TileLayer } from "react-leaflet";

function Map() {
  return (
    <MapContainer
      id="map"
      center={[-23.5, -46.5]}
      zoom={17}
      scrollWheelZoom={true}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
    </MapContainer>
  );
}

export default Map;
