import { backendAxios } from "../services/axios";
import { useEffect, useState } from "react";
import IDelivery from "../interface/IDelivery";

const DeliveryTable = () => {
  const [deliveries, setDeliveries] = useState<IDelivery[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    backendAxios
      .get("/")
      .then((response) => {
        console.log(response.data);
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
        {deliveries.map((delivery: IDelivery) => (
          <tr>
            <td>{delivery.name}</td>
            <td>{delivery.address.street}</td>
            <td>{delivery.address.city}</td>
            <td>{delivery.address.country}</td>
            <td>{delivery.weight.toString()}</td>
            <td>{delivery.address.geolocation.latitude.toString()}</td>
            <td>{delivery.address.geolocation.longitude.toString()}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default DeliveryTable;
