import { useState, FormEvent, ChangeEvent } from "react";
import FormField from "./FormField";
import axios from "../services/axios";

function RegisterForm() {
  const [latitude, setLatitude] = useState<number>(0);
  const [longitude, setLongitude] = useState<number>(0);
  const [address, setAddress] = useState<string>("");
  const [registrable, setRegistrable] = useState<boolean>(false);

  const resetForm = () => {
    /*
      default event handler for reset button will not reset the values of latitude and longitude
      so we have to do it
    */
    setLatitude(0);
    setLongitude(0);
  };

  const submitForm = (e: FormEvent) => {
    e.preventDefault();
    if (registrable) console.log("register customer");
    else console.log("do nothing");
  };

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setAddress(e.target.value);
  };

  const searchAdress = () => {
    setRegistrable(true); //
    console.log(address);
    // example
    setLatitude(12.1);
    setLongitude(25.12);
  };

  return (
    <form id="form" onSubmit={submitForm}>
      <FormField label="Customer name" placeholder="Name" name="name" />
      <br />
      <FormField label="Delivery weight" placeholder="Weight" name="weight" />
      <br />
      <FormField
        label="Customer address"
        onChange={onChange}
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
