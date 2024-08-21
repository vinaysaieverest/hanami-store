import React from "react";
import { Ttypecard, Ttypecard1 ,PtypeCard } from "./types";
import { Stypecard } from "./types";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "react-toastify/dist/ReactToastify.css";
import likedImage from "./assets/heart (1).png";
import unlikedImage from "./assets/heart.png";
import { useNavigate } from "react-router-dom";
import { data } from "./data";



export const Card = ({
  id,
  image,
  name,
  price,
  rating,
  isavailable,
  isnew,
  isInOffers,
  discount,
  isAddedToWishlist,
  isAddedToCart,
  handleAddToCart,
  handleAddToWishList,
  handleProduct

}: Ttypecard) => {
  const showToastMessage = () => {
    toast.success("We will notify soon!");
  };
  const navigate = useNavigate();
  
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

  const [noOfCartItem, setNoOfCartItem] = useState(0);
  const updateCart = () => {
    setNoOfCartItem(noOfCartItem + 1);
    
  };

  const handleLikeClick = () => {
    liked();
    handleAddToWishList(id)
    console.log(isAddedToWishlist)
    console.log(isAddedToCart)
  };

  const [isAdded, setisAdded] = useState(false);
  const added = () => {
    if (!isAdded) {
      setisAdded(true)
    };
      console.log(isAddedToCart)
      console.log(isAdded)
  };

  const handleClick1 = () => {
      added()
      handleAddToCart(id);
      updateCart();
     
      
    
  };
  const handleViewClick = () => {
    navigate(`/products/${id}`); // Navigate to Cart page
  };
  
  const addedItems=()=>{
    navigate(`/cart`);
  }
  return (
    <div className="mainCard">
      {isnew && (
        <div className="newArrival">
          <img src="/assets/img.png"  className="newarrivalimg" />
        </div>
      )}
      <div className="card">
        {isInOffers ? (
          <>
            <img src={image} onClick={handleViewClick} className="dressImage" />
            <div className="discription">
              <p className="nameOfProduct">{name}</p>
              <p className="discount1">Get flat {discount}</p>
              <div className="priceNrating">
                <p>{price}.00/- INR</p>
                <p>|</p>
                <p>{rating}★</p>
              </div>
              <div className="cardDetails">
                {isavailable ? (
                  isAddedToCart ? (
                    <>
                      <button className="button_add_to_cart" onClick={addedItems}>
                        Go to Cart
                      </button>
                    </>
                  ) : (
                    <button onClick={handleClick1} className="button_add_to_cart">
                      Add to Cart
                    </button>
                  )
                ) : (
                  <button onClick={showToastMessage} className="notify_button">
                    Notify Me
                  </button>
                )}
                <button onClick={handleLikeClick} className="wishListButton">
                  <img className="heartImage" src={isLiked ? likedImage : unlikedImage} />
                </button>
              </div>
            </div>
          </>
        ) : (
          <>
            <img src={image} onClick={handleViewClick} className="dressImage" />
            <div className="discription">
              <p className="nameOfProduct">{name}</p>
              <div className="priceNrating">
                <p>{price}.00/- INR</p>
                <p>|</p>
                <p>{rating}★</p>
              </div>
              <div className="cardDetails">
                {isavailable ? (
                  isAddedToCart ? (
                    <>
                      <button className="button_add_to_cart" onClick={addedItems}>
                        Go to Cart
                      </button>
                    </>
                  ) : (
                    <button onClick={handleClick1} className="button_add_to_cart">
                      Add to Cart
                    </button>
                  )
                ) : (
                  <button onClick={showToastMessage} className="notify_button">
                    Notify Me
                  </button>
                )}
                <button onClick={handleLikeClick} className="wishListButton">
                  <img className="heartImage" src={isLiked ? likedImage : unlikedImage} />
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}




