import { useState, FormEvent } from "react";

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
      <label className="form-label">Customer name</label>
      <input required className="field" placeholder="Name" name="name" />
      <br />
      <label className="form-label">Delivery weight</label>
      <input required className="field" placeholder="Weight" name="weight" />
      <br />
      <label className="form-label">Customer address</label>
      <input required className="field" placeholder="Address" name="address" />
      <br />
      <label className="form-label">Latitude</label>
      <input className="field" name="lat" value={latitude} readOnly />
      <label className="form-label">Longitude</label>
      <input className="field" name="lng" value={longitude} readOnly />
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
