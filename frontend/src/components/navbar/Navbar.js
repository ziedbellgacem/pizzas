import React from "react";
import { useNavigate } from "react-router-dom";
import "./Navbar.css";
function Navbar() {
  const navigate = useNavigate();
  return (
    <div className="navbar">
      <img
        src="https://c8.alamy.com/compfr/pmcke3/logo-vector-pizza-pmcke3.jpg"
        alt=""
        className="logo"
      />
      <ul className="navItems">
        <li onClick={() => navigate("/")}>Home</li>
        <li onClick={() => navigate("/pizzas")}>Pizzas</li>
        <li onClick={() => navigate("/cartshop")}>Cart</li>
        <li onClick={() => navigate("/login")}>Login</li>
      </ul>
    </div>
  );
}

export default Navbar;
