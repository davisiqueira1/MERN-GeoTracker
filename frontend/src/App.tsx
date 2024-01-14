import "./App.css";
import Map from "./components/Map";
import RegisterForm from "./components/RegisterForm";

function App() {
  return (
    <div id="container">
      <div id="form-container">
        <RegisterForm />
      </div>
      <div id="map-container">
        <Map />
        <div id="table"></div>
      </div>
    </div>
  );
}

export default App;
