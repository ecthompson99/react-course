import React, { useContext } from "react";
import { AppContext } from "../../state/Context";
import { FaPlus, FaMinus, FaTimes } from "react-icons/fa";
import "./CartItem.css";

const CartItem = ({ item }) => {
  const { onAddItem, amount } = useContext(AppContext);
  const { name, price } = item;

  return (
    <div className="cart-item__container">
      <div className="cart-item__details">
        <h2>{name}</h2>
        <div className="cart-item__pricing">
          <h3>{price}</h3>
          <span>
            <FaTimes />
            {amount[name]}
          </span>
        </div>
      </div>
      <div className="cart-item__incrementer">
        <span
          onClick={() => onAddItem({ item: item, amount: +amount[name] + 1 })}
        >
          <FaPlus />
        </span>
        <span
          onClick={() => onAddItem({ item: item, amount: +amount[name] - 1 })}
        >
          <FaMinus />
        </span>
      </div>
    </div>
  );
};

export default CartItem;
