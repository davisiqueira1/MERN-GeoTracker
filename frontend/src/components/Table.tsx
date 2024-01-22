import { backendAxios } from "../services/axios";
import { Key, useEffect, useState } from "react";
import IDelivery from "../interface/IDelivery";
import "./Table.css";

type DeliveryTableProps = IDelivery & { _id: Key };

const DeliveryTable = () => {
  const [deliveries, setDeliveries] = useState<DeliveryTableProps[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    backendAxios
      .get("/deliveries")
      .then((response) => {
        setDeliveries(response.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Street</th>
          <th>City</th>
          <th>Country</th>
          <th>Weigth</th>
          <th>Lat</th>
          <th>Lng</th>
        </tr>
      </thead>
      <tbody>
        {deliveries.map((delivery: DeliveryTableProps) => (
          <tr key={delivery._id}>
            <td>{delivery.name}</td>
            <td>{delivery.address.street || "-"}</td>
            <td>{delivery.address.city || "-"}</td>
            <td>{delivery.address.country}</td>
            <td>{delivery.weight.toFixed(2).toString()}</td>
            <td>
              {delivery.address.geolocation.latitude.toFixed(4).toString()}
            </td>
            <td>
              {delivery.address.geolocation.longitude.toFixed(4).toString()}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default DeliveryTable;
