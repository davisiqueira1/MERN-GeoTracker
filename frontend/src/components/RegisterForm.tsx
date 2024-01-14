function RegisterForm() {
  return (
    <form id="form">
      <input
        required
        id="field"
        placeholder="Name"
        name="name"
        disabled={false}
      />
      <br />
      <input
        required
        id="field"
        placeholder="Weight"
        name="weight"
        disabled={false}
      />
      <br />
      <input
        required
        id="field"
        placeholder="Address"
        name="address"
        disabled={false}
      />
      <br />
      <input
        required
        id="field"
        placeholder="Latitude"
        name="lat"
        disabled={true}
      />
      <input
        required
        id="field"
        placeholder="Longitude"
        name="lng"
        disabled={true}
      />
      <br />
      <input id="form-button" type="submit" value="Register customer" />
      <br />
      <input id="form-button" type="reset" value="Reset fields" />
    </form>
  );
}

export default RegisterForm;
