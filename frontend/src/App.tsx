import "./App.css";
import Map from "./components/Map";

function App() {
  return (
    <div id="container">
      <div id="form-container"></div>
      <div id="map-container">
        <Map />
        <div id="table"></div>
      </div>
    </div>
  );
}

export default App;
