import React from "react";
import Filter from "./Filter";
import Pizza from "./Pizza";
import "./Pizzas.css";
import pizzas from "./data";
function Pizzas() {
  return (
    <div className="pizzas">
      <Filter />
      <div className="listPizzas">
        {pizzas.map((pizza) => (
          <Pizza key={pizza.id} pizza={pizza} />
        ))}
      </div>
    </div>
  );
}

export default Pizzas;
