import React from "react";
import Cart from "../Cart/Cart";
import "./CartShop.css";

function CartShop() {
  return (
    <div className="shop">
      <h1>My Cart </h1>
      <div className="listCart">
        <Cart />
        <div className="subTotal">
          <h3>SubTotal = </h3>
          <button className="totBtn">Bay Now</button>
        </div>
      </div>
    </div>
  );
}

export default CartShop;
