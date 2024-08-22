import { Ttypecard } from "./types";
import { useState } from "react";
import {  toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "react-toastify/dist/ReactToastify.css";
import likedImage from "./assets/heart (1).png";
import unlikedImage from "./assets/heart.png";
import { useNavigate } from "react-router-dom";




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
  isAddedToWishList,
  isAddedToCart,
  handleAddToCart,
  handleAddToWishList,

}: Ttypecard) => {
  
  const [notify, setNotify] = useState(false)
  const showToastMessage = () => {
    toast.success("We will notify soon!");
    setNotify(true)
    
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
          <img src="https://png.pngtree.com/png-vector/20221106/ourmid/pngtree-new-product-banner-poster-pointer-png-image_6425858.png"  className="newarrivalimg" />
        </div>
      )}
      <div className="card">
        {isInOffers ? (
          <>
            <img src={image} onClick={handleViewClick} className="dressImage" />
            <div className="discription">
              <p className="nameOfProduct">{name}</p>
              <p className="discount1">Get flat {discount}%</p>
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
                ) : notify?( <button onClick={showToastMessage} className="notify_button" disabled={true}>
                  Notify Me
                </button>):( 
                  <button onClick={showToastMessage} className="notify_button">
                  Notify Me
                </button>
              
                )}
                <button onClick={handleLikeClick} className="wishListButton">
                  <img className="heartImage" src={isAddedToWishList ? likedImage : unlikedImage} />
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
                <img className="heartImage" src={isAddedToWishList ? likedImage : unlikedImage} />
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
