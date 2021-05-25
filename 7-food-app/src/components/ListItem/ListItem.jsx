import React, { useContext } from "react";
import AddButton from "./AddButton";
import "./ListItem.css";
import { AppContext } from "../../state/Context";

const ListItem = ({ item }) => {
  const { name, description, price } = item;
  const { onAddItem, amountHandler, amount } = useContext(AppContext);

  return (
    <div className="list-item__container">
      <div className="list-item__details">
        <h2>{name}</h2>
        <h4>{description}</h4>
        <h3>${price}</h3>
      </div>
      <div className="list-item__metadata">
        <label>Amount</label>
        <input
          type="number"
          min="0"
          onChange={(e) => amountHandler(e, name)}
          value={amount[name]}
        />
        <AddButton
          onClick={() => onAddItem({ item: item, amount: +amount[name] })}
        />
      </div>
    </div>
  );
};

export default ListItem;
