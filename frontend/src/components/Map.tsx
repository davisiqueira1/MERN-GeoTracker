// docs: https://react-leaflet.js.org/docs/example-events/
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { backendAxios } from "../services/axios";
import { Key, useEffect, useState } from "react";
import IDelivery from "../interface/IDelivery";
import { LatLngTuple } from "leaflet";

type DeliveryTableProps = IDelivery & { _id: Key };

const Map = () => {
  const [deliveries, setDeliveries] = useState<DeliveryTableProps[]>([]);

  useEffect(() => {
    backendAxios
      .get("/deliveries")
      .then((response) => {
        console.log(response.data);
        setDeliveries(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  function mapCenter() {
    if (deliveries.length === 0) return [-23.5, -46.5] as LatLngTuple;
    let delivery = deliveries[0];
    let lat = delivery.address.geolocation.latitude;
    let lng = delivery.address.geolocation.longitude;
    return [lat, lng] as LatLngTuple;
  }

  const center = mapCenter();

  return (
    <MapContainer id="map" center={center} zoom={17} scrollWheelZoom={true}>
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
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
    </MapContainer>
  );
};

export default Map;
