import React from "react";
import { Ttypecard } from "./types";
import { Stypecard } from "./types";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "react-toastify/dist/ReactToastify.css";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import likedImage from "./heart (1).png";
import unlikedImage from "./heart.png";

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
      toast.error("Removed from Wishlist!");
    } else {
      setisLiked(true);
      toast.success("Added to Wishlist!");
    }
  };

  const handleLikeClick = () => {
    liked();
  };

  const [isAdded, setisAdded] = useState(false);
  const added = () => {
    if (isAdded) {
      setisAdded(false);
    } else {
      setisAdded(true);
    }
  };
  function handleClick1() {
    added();
    updateCart();
  }
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
            <p>{price}.00/- INR</p>
            <p>|</p>

            <p>{rating}★</p>
          </div>
          <div className="cardDetails">
            {isavailable ? (
              <button
                onClick={handleClick1}
                className="button_add_to_cart"
                disabled={isAdded}
              >
                {isAdded ? "Added" : Bname}
              </button>
            ) : (
              <button onClick={showToastMessage} className="notify_button">
                Notify Me
              </button>
            )}
            <button onClick={handleLikeClick} className="wishListButton">
              <img
                className="heartImage"
                src={isLiked ? likedImage : unlikedImage}
                alt="like/unlike"
              />
            </button>
          </div>
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
