import "./App.css";
import Map from "./components/Map";

function App() {
  return (
    <div id="container">
      <div id="form-container">
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
          <input
            id="botao-formulario"
            type="submit"
            value="Register customer"
          />
          <br />
          <input id="botao-formulario" type="submit" value="Reset fields" />
        </form>
      </div>
      <div id="map-container">
        <Map />
        <div id="table"></div>
      </div>
    </div>
  );
}

export default App;
