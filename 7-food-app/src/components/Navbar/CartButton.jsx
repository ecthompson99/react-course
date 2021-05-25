import React, { useContext } from "react";
import "./CartButton.css";
import { FaShoppingCart } from "react-icons/fa";
import { AppContext } from "../../state/Context";

const CartButton = () => {
  const { itemCount, toggleCartDisplay } = useContext(AppContext);

  return (
    <div className="button__container" onClick={toggleCartDisplay}>
      <FaShoppingCart />
      Your Cart
      <div className="button__notif">{itemCount}</div>
    </div>
  );
};

export default CartButton;
