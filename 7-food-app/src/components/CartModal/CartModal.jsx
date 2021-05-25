import React, { useContext } from "react";
import ReactDOM from "react-dom";
import "./CartModal.css";
import { AppContext } from "../../state/Context";
import CartItem from "./CartItem";

export default function CartModal() {
  const { cartItems, toggleCartDisplay, amount } = useContext(AppContext);
  let subtotal;

  // Calculating Subtotal.
  subtotal = 0;
  for (let item of Object.values(cartItems)) {
    subtotal += amount[item.name] * +item.price;
  }

  // Filter cart
  const items = Object.values(cartItems).filter(
    (item) => amount[item.name] > 0
  );

  return ReactDOM.createPortal(
    <div className="cart-modal__container">
      <div className="cart-modal__overlay" onClick={toggleCartDisplay} />
      <div className="cart-modal__contents">
        {items.map((item) => {
          return <CartItem key={item.name} item={item} />;
        })}
        <div className="cart-modal__subtotal">
          <h2>Subtotal</h2>
          <h2>${subtotal.toFixed(2)}</h2>
        </div>
        <div className="cart-modal__buttons">
          <button onClick={toggleCartDisplay}>Close</button>
          <button
            className="primary"
            onClick={() => console.log("ordering food!")}
          >
            Order
          </button>
        </div>
      </div>
    </div>,
    document.getElementById("modal-root")
  );
}
