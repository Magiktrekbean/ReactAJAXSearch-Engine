import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./styles.css";
import Weather from "./Weather";
export default function App() {
  return (
    <div className="App">
      <h1>Weather App</h1>

      <Weather />
    </div>
  );
}
