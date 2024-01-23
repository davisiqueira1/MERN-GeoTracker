// docs: https://react-leaflet.js.org/docs/example-events/
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMapEvents,
} from "react-leaflet";
import { LatLng } from "leaflet";
import { backendAxios } from "../services/axios";
import { Key, useEffect, useState } from "react";
import IDelivery from "../interface/IDelivery";
import { LatLngTuple } from "leaflet";
import "./Map.css";

type DeliveryTableProps = IDelivery & { _id: Key };

const Map = () => {
  const [deliveries, setDeliveries] = useState<DeliveryTableProps[]>([]);
  let center = [-23.5, -46.65];

  useEffect(() => {
    backendAxios
      .get("/deliveries")
      .then((response) => {
        setDeliveries(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  function LocationMarker() {
    const [position, setPosition] = useState<LatLng | null>(null);
    const map = useMapEvents({
      click() {
        map.locate();
      },
      locationfound(e) {
        setPosition(e.latlng);
        map.flyTo(e.latlng, map.getZoom());
      },
    });

    return position === null ? null : (
      <Marker position={position}>
        <Popup>Sua posição</Popup>
      </Marker>
    );
  }

  return (
    <MapContainer
      id="map"
      center={center as LatLngTuple}
      zoom={10}
      scrollWheelZoom={true}
    >
      <>
        {deliveries.map((delivery: DeliveryTableProps) => (
          <Marker
            key={delivery._id}
            position={[
              delivery.address.geolocation.latitude,
              delivery.address.geolocation.longitude,
            ]}
          >
            <Popup>
              {delivery.name}
              <br />
              {delivery.weight}kg
            </Popup>
          </Marker>
        ))}
      </>
      <LocationMarker />
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
    </MapContainer>
  );
};

export default Map;
