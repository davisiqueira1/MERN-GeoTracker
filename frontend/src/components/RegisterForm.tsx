import { useState, FormEvent, ChangeEvent } from "react";
import FormField from "./FormField";
import { backendAxios, googleAxios } from "../services/axios";
import { AxiosResponse } from "axios";
import IDelivery from "../interface/IDelivery";
import IAddressComponents from "../interface/IAddressComponents";
import { useMap } from "react-leaflet";
import L from "leaflet";

function RegisterForm() {
  const [latitude, setLatitude] = useState<number>(0);
  const [longitude, setLongitude] = useState<number>(0);
  const [name, setName] = useState<string>("");
  const [weight, setWeight] = useState<number>(0);
  const [address, setAddress] = useState<string>("");
  const [registrable, setRegistrable] = useState<boolean>(false);
  const [delivery, setDelivery] = useState<IDelivery>({} as IDelivery);

  const getAddressComponents = (
    address_components: Array<IAddressComponents>
  ) => {
    const components = {
      administrative_area_level_2: undefined,
      administrative_area_level_1: undefined,
      subpremise: undefined,
      country: undefined,
      neighborhood: undefined,
      street_number: undefined,
      route: undefined,
    } as { [key: string]: string | undefined };

    Object.keys(components).forEach((key) => {
      const component = address_components.find((component) => {
        return component.types.includes(key);
      });
      if (component) components[key] = component.long_name;
    });

    return {
      city: components.administrative_area_level_2,
      state: components.administrative_area_level_1,
      complement: components.subpremise,
      country: components.country,
      neighborhood: components.neighborhood,
      number:
        Number.parseFloat(components.street_number as string) || undefined,
      street: components.route,
    };
  };

  const resetForm = () => {
    /*
      default event handler for reset button will not reset the values of latitude and longitude
      so we have to do it
    */
    setRegistrable(false);
    setLatitude(0);
    setLongitude(0);
  };

  const submitForm = (e: FormEvent) => {
    e.preventDefault();
    if (!registrable)
      throw new Error(
        "Enter your address and press the 'Search address' button"
      );

    delivery.name = name;
    delivery.weight = weight;

    backendAxios
      .post("/deliveries", delivery)
      .then(() => {
        location.reload();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const searchAdress = () => {
    const googleApiKey = import.meta.env.VITE_GOOGLE_API_KEY;
    googleAxios
      .get(`/json?address=${address}&key=${googleApiKey}`)
      .then((response: AxiosResponse) => {
        if (response.data.status !== "OK") throw new Error("Invalid address");

        setRegistrable(true);

        const addressComponents = response.data.results[0].address_components;

        const delivery: IDelivery = {
          name,
          weight,
          address: {
            ...getAddressComponents(addressComponents),
            geolocation: {
              latitude: response.data.results[0].geometry.location.lat,
              longitude: response.data.results[0].geometry.location.lng,
            },
          },
        };

        console.log(delivery);
        setDelivery(delivery);

        setLatitude(response.data.results[0].geometry.location.lat);
        setLongitude(response.data.results[0].geometry.location.lng);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <form id="form" onSubmit={submitForm}>
      <FormField
        label="Customer name"
        onChange={(e: ChangeEvent<HTMLInputElement>) => {
          setName(e.target.value);
        }}
        placeholder="Name"
        name="name"
      />
      <br />
      <FormField
        label="Delivery weight"
        onChange={(e: ChangeEvent<HTMLInputElement>) => {
          setWeight(Number.parseFloat(e.target.value));
        }}
        placeholder="Weight"
        name="weight"
      />
      <br />
      <FormField
        label="Customer address"
        onChange={(e: ChangeEvent<HTMLInputElement>) => {
          setAddress(e.target.value);
        }}
        placeholder="Address"
        name="address"
      />
      <br />
      <FormField label="Latitude" value={latitude} name="lat" readOnly />
      <FormField label="Longitude" value={longitude} name="lng" readOnly />
      <br />
      <input
        style={{ backgroundColor: "grey" }}
        className="form-button"
        type="button"
        value="Search address"
        onClick={searchAdress}
      />
      <br />
      <input
        style={{ backgroundColor: "green" }}
        className="form-button"
        type="submit"
        value="Register customer"
      />
      <br />
      <input
        style={{ backgroundColor: "red" }}
        className="form-button"
        type="reset"
        value="Reset fields"
        onClick={resetForm}
      />
    </form>
  );
}

export default RegisterForm;
