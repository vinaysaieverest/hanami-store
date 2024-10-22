import { useState } from "react";
import { Htype } from "./types";
import { FaShoppingCart, FaSearch } from "react-icons/fa";
export const Button = ({ logo, search, login ,noOfCartItem}: Htype) => {
  return (
    <div className="header">
      <div className="logo">
        <p className="logo">{logo}</p>
      </div>
      <div className="search_div">
        <input placeholder="Search items" className="search_placeholder" />
      </div>
      <div className="button_1">
        <div className="cart_name">
        <FaShoppingCart  className="button3" />
        <p className="number_of_items">{noOfCartItem}</p>
        </div>
        <button className="button2">{login}</button>
      </div>
    </div>



  );
};
