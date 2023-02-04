import About from "./components/about";
import Info from "./components/info";
import Interest from "./components/interest";

import "./style/style.css";

function App() {
  return (
    <div className="card">
      <Info />
      <About />
      <Interest />
    </div>
  );
}

export default App;
