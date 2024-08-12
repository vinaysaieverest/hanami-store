import React from "react";
import { Ttypecard } from "./types";
import { Stypecard } from "./types";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "react-toastify/dist/ReactToastify.css";

export const Card = ({
  image,
  name,
  price,
  rating,
  Bname,
  isavailable,
  isnew,
  updateCart,
  discount,
  
}: Ttypecard) => {
  const showToastMessage = () => {
    toast.success("We will notify soon!");
  };
  const [isLiked, setisLiked] = useState(false);

  const liked = () => {
    if (isLiked) {
      setisLiked(false);
    } else {
      setisLiked(true);
    }
  };

  const handleLikeClick = () => {
    liked();
  };

  return (
    <div className="mainCard">
      {isnew && (
        <div className="newArrival">
          <img src="img.png" alt="new arrival" className="newarrivalimg" />
        </div>
      )}
      <div className="card">
        <img src={image} className="dressImage" />
        <div className="discription">
          <p className="nameOfProduct">{name}</p>
          <p className="discount1">{discount}</p>
          <div className="priceNrating">
            <p>{price}.00/-</p>
            <p>|</p>

            <p>{rating}★</p>
          </div>
          {isavailable ? (
            <button onClick={() => updateCart()} className="button_add_to_cart">
              {Bname}
            </button>
          ) : (
            <button onClick={showToastMessage} className="notify_button">
              Notify Me
            </button>
          )}
          <button onClick={handleLikeClick}>{isLiked ? "❤️" : "🤍"}</button>
        </div>
      </div>
    </div>
  );
};

export const Select_card = ({ image, name }: Stypecard) => {
  return (
    <div className="s_i">
      <img src={image} className="seletion_image" />
      <p className="selection_name">{name}</p>
    </div>
  );
};
//disabled={isDisabled}
