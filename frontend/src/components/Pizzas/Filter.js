import React from "react";
import "./Filter.css";

function Filter() {
  return (
    <div className="filter">
      <input type="text" placeholder="search pizza" />
      <select>
        <option>All</option>
        <option>Veg</option>
        <option>Non-Veg</option>
      </select>
      <button className="filterBtn">Filter</button>
    </div>
  );
}

export default Filter;
