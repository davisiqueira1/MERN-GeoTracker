import { useState, FormEvent } from "react";
import FormField from "./FormField";

function RegisterForm() {
  const [latitude, setLatitude] = useState<number | undefined>(undefined);
  const [longitude, setLongitude] = useState<number | undefined>(undefined);

  const resetForm = () => {
    /*
      default event handler for reset button will not reset the values of latitude and longitude
      so we have to do it
    */
    setLatitude(undefined);
    setLongitude(undefined);
  };

  const submitForm = (e: FormEvent) => {
    e.preventDefault();
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
        placeholder="Address"
        name="address"
      />
      <br />
      <FormField label="Latitude" placeholder="Latitude" name="lat" readOnly />
      <FormField
        label="Longitude"
        placeholder="Longitude"
        name="lng"
        readOnly
      />
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
