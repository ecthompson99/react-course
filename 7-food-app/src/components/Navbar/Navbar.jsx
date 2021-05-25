import React from "react";
import CartButton from "./CartButton";
import "./Navbar.css";

const Navbar = (props) => {
  return (
    <div className="navbar-container">
      <div className="navbar-container__inner">
        <h1>ReactMeals</h1>
        <CartButton />
      </div>
    </div>
  );
};

export default Navbar;
