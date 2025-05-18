import React from "react";
import "./style.css";

function SearchButton({ buttonText, onClick }) {
  return (
    <button className="search_button" onClick={onClick}>
      {buttonText}
    </button>
  );
}

export default SearchButton;
