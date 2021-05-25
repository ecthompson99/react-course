import React, { useContext } from "react";
import ListItem from "../ListItem/ListItem";
import "./Menu.css";
import { AppContext } from "../../state/Context";

export default function Menu() {
  const { menuItems } = useContext(AppContext);

  return (
    <div className="menu__container">
      <div className="menu__contents">
        {menuItems.map((item) => {
          return <ListItem key={item.name} item={item} />;
        })}
      </div>
    </div>
  );
}
