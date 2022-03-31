import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/navbar/Navbar";
import SectionOne from "./components/SectionOne/SectionOne";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Pizzas from "./components/Pizzas/Pizzas";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import CartShop from "./components/CartShop/CartShop";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<SectionOne />} />
          <Route path="/pizzas" element={<Pizzas />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/cartshop" element={<CartShop />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
