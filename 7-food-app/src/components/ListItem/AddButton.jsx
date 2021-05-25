import React from "react";
import "./AddButton.css";

export default function AddButton({ onClick }) {
  return (
    <button className="add-button" onClick={onClick}>
      + Add
    </button>
  );
}
