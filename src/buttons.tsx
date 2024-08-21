import { useState } from "react";
import { Htype } from "./types";
import { useNavigate } from "react-router-dom";
import { FaShoppingCart, FaSearch } from "react-icons/fa";
export const Button = ({ logo, login ,noOfCartItem ,setSearch}: Htype) => {
  const navigate = useNavigate();
  const addedItems=()=>{
    navigate(`/cart`);
  }
  return (
    <div className="header">
      <div className="logo">
        <p className="logo">{logo}</p>
      </div>
      <div className="search_div">
        <input placeholder="Search items" className="search_placeholder" onChange={(e)=>setSearch(e.target.value.toLocaleLowerCase())} />
      </div>
      <div className="button_1">
        <div className="cart_name">
        <FaShoppingCart  className="button3"  onClick={addedItems}/>
        <p className="number_of_items">{noOfCartItem}</p>
        </div>
        <button className="button2">{login}</button>
      </div>
    </div>



  );
};
