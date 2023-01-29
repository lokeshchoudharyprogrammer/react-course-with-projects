
import "./App.css";
import Routing from "./Components/Router";
import Navbar from "./Components/Navbar";
function App() {
  return (
    <div className="App">
      <div>
        <Navbar />
        <Routing />
      </div>
    </div>
  );
}

export default App;
