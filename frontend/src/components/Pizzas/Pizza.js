import React, { useState } from "react";
import "./Pizza.css";
import { Modal } from "react-bootstrap";
function Pizza({ pizza }) {
  const [quantity, setQuantity] = useState(1);
  const [varient, setVarient] = useState("small");
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="pizza">
      <div onClick={handleShow} style={{ cursor: "pointer" }}>
        <h4>{pizza.name}</h4>
        <img src={pizza.image} alt="" className="pizzaImg" />
      </div>
      <div className="pizzaVQ">
        <div className="pizzaV">
          <h5>Varients :</h5>
          <select value={varient} onChange={(e) => setVarient(e.target.value)}>
            {pizza.varients.map((varient) => {
              return <option value={varient}>{varient}</option>;
            })}
          </select>
        </div>
        <div className="pizzaQ">
          <h5>Quantity :</h5>
          <select
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
          >
            {[...Array(5).keys()].map((x, i) => {
              return <option value={i + 1}>{i + 1}</option>;
            })}
          </select>
        </div>
      </div>
      <div className="pizzaPrice">
        <p>
          Price :<span> {pizza.prices[0][varient] * quantity} </span>
        </p>
        <button className="pizzaBtn">Add To Cart</button>
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{pizza.name}</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <img src={pizza.image} alt="" width="400" />
          <p>{pizza.description}.</p>
        </Modal.Body>

        <Modal.Footer>
          <button className="modalBtn" onClick={handleClose}>
            Ok
          </button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Pizza;
