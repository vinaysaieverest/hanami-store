import { Ttypecard } from "../types";
import { useContext, useState } from "react";
import {  toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import { dataContext } from "../Context/GlobalContext";





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
  isAddedToCartFromHome,
  // handleAddToCart,
  handleAddToWishList,

}: Ttypecard) => {
  
  const [notify, setNotify] = useState(false)
  const showToastMessage = () => {
    toast.success("We will notify soon!");
    setNotify(true)
    
  };
  const navigate = useNavigate();
  const {Data,setData} = useContext(dataContext)
  const {noOfCartItem, setNoOfCartItem} = useContext(dataContext);
  

  
  
  const [isLiked,setisLiked] = useState(false)
  const liked = () => {
    if (isLiked) {
      setisLiked(false);
      toast.error("Removed from Wishlist!");
    } else {
      setisLiked(true);
      toast.success("Added to Wishlist!");
    }
  };
  const updateCart = () => {
    setNoOfCartItem(noOfCartItem + 1);
  };

  const handleAddToCartHome = (id: number) => {
    console.log(id);
    setData((Data1: any[]) =>
      Data1.map((item) =>
        item.id === id ? { ...item, isAddedToCartFromHome: true } : item
      )
    );
    
  };

  const handleLikeClick = () => {
    liked();
    handleAddToWishList(id)
    
  };

  const [isAddedToCartHome,setIsAddedToCartHome] = useState(false)
  const added = () => {
    if (!isAddedToCartHome) {
      setIsAddedToCartHome(true)
    };
      
  };

  const handleClick1 = () => {
      added()
      handleAddToCartHome(id);
      updateCart()
     
      
    
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
            <img src={image} onClick={handleViewClick} className={`dressImage ${!isavailable && "disabled"}`} />
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
                  isAddedToCartFromHome ? (
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
                  <img className="heartImage" src={isAddedToWishList ? '/assets/likedImage.png' : 'assets/unLikedImage.png'} />
                </button>
              </div>
            </div>
          </>
        ) : (
          <>
            <img src={image} onClick={handleViewClick} className={`dressImage ${!isavailable && "disabled"}`} />
            <div className="discription">
              <p className="nameOfProduct">{name}</p>
              <div className="priceNrating">
                <p>{price}.00/- INR</p>
                <p>|</p>
                <p>{rating}★</p>
              </div>
              <div className="cardDetails">
                {isavailable ? (
                  isAddedToCartFromHome ? (
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
                <img className="heartImage" src={isAddedToWishList ? '/assets/likedImage.png' : 'assets/unLikedImage.png'} />
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
