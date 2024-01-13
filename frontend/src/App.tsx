import { MapContainer, Marker, TileLayer, Popup, useMap } from "react-leaflet";
// useMap is a hook that gives access to the map object
// docs: https://react-leaflet.js.org/docs/example-popup-marker/
import "./App.css";

function App() {
  return (
    <div id="container">
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
        <Marker position={[-23.5, -46.5]}>
          <Popup>
            {/* hardcoded example */}
            Eduardo
            <br />
            120kg
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}

export default App;
