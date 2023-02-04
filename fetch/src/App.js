import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Blog from "./components/blog";

import Home from "./components/home";
import Navbar from "./components/navbar";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
//json server paketini indirebiliriz ya da npx kullanırız.
//npx json-server --watch data/db.json --port 8000 //port3000e atamasın diye belirttik.
//bununla birlite elde ettiğimiz endpoint te verileri gözlemleyebiliriz.
