import React from "react";
import "./Cart.css";

function Cart() {
  return (
    <div className="shopCart">
      <img
        src="https://images.pexels.com/photos/842519/pexels-photo-842519.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        alt=""
        width="200"
        height="200"
      />
      <div className="cartDet">
        <div>
          <h3>Name</h3>
          <h4>pizza</h4>
          <button className="deletBtn">
            <i className="fa-solid fa-trash-can"></i>
          </button>
        </div>
        <div>
          <h3>Price</h3>
          <h4>10D</h4>
        </div>
        <div>
          <h3>Quantity </h3>
          <button className="icon">
            <i className="fa-solid fa-plus"></i>
          </button>
          <span>0</span>
          <button className="icon">
            <i className="fa-solid fa-minus"></i>
          </button>
        </div>
        <div>
          <h3>Total </h3>
          <h4>10D</h4>
        </div>
      </div>
    </div>
  );
}

export default Cart;
