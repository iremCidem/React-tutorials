import "./App.css";
import Navbar from "./components/navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/login";
import Contact from "./components/contact";
import Home from "./components/home";
import Detail from "./components/detail";

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<Login />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/contact/:id" element={<Detail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
//sayfa içerisinde değişecek bölümleri routes içine koyuyoruz.routes içinde routelar
//react routera özel <link> tagi ile tekrar servera istek atıp sayfayı yenilemek yerine sadece değişiklikler düzenleniyor.
