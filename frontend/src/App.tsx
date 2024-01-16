import "./App.css";
import Map from "./components/Map";
import RegisterForm from "./components/RegisterForm";
import Table from "./components/Table";

function App() {
  return (
    <div id="outer-container">
      <div id="inner-container">
        <div id="form-container">
          <RegisterForm />
        </div>
        <div id="map-container">
          <Map />
          <div id="table-container">
            <Table />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
