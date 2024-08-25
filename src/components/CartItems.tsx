
import React, { useContext, useState } from "react";
import { dataContext } from "../Context/GlobalContext";

import { Button } from "../buttons";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "react-toastify/dist/ReactToastify.css";
import { confirmAlert as showPopUp } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';

export const CartAddedProducts = () => {
  const { Data ,setData } = useContext(dataContext);
//   const { noOfItems, setnoOfItems } = useContext(dataContext);
  const { isAdded, setisAdded } = useContext(dataContext);
  const { noOfCartItem, setNoOfCartItem } = useContext(dataContext);
  const {search,setSearch} = useContext(dataContext)
  const [isModalOpen, setModalOpen] = useState(false);
  const [itemToRemove, setItemToRemove] = useState(null);
  const navigate = useNavigate();
  const[noOfItems, setnoOfItems] = useState(1)
  const {size,setSize} = useContext(dataContext)


  // Filter all products that have been added to the cart
  const cartItems = Data.filter(
    (item: { isAddedToCart: boolean }) => item.isAddedToCart === true
  );
  const CartItemsIncrement = (id: number) => {
    const updatedData = Data.map((item: { id: number; quantity?: number }) =>
      item.id === id
        ? { ...item, quantity: (item.quantity || 1) + 1 }  // Initialize quantity if it doesn't exist
        : item
    );
    setData(updatedData);
  };
  
  const CartItemsDecrement = (id: number) => {
    const updatedData = Data.map((item: { id: number; quantity?: number }) => {
      if (item.id === id && item.quantity) {
        const newQuantity = item.quantity - 1;
        if (newQuantity <= 0) {
          handleRemove(id);  // Trigger remove action if quantity is zero
          return { ...item, quantity: 1, isAddedToCart: false };  // Reset quantity or remove from cart
        }
        return { ...item, quantity: newQuantity };
      }
      return item;
    });
    setData(updatedData);
  };
  

  const deleteFromCart = (id: any) => {
    const updatedData = Data.map((item: { id: any; }) =>
      item.id === id ? { ...item, isAddedToCart: false, quantity: 1 } : item
    );
    setData(updatedData);
    setNoOfCartItem(noOfCartItem-1)
  };



const handleRemove = (id: number) => {
        showPopUp({
            title: 'Confirm to delete',
            message: 'Are you sure you want to delete this item?',
            buttons: [
                {
                    label: 'Yes',
                    onClick: () => {
                        deleteFromCart(id)
                        toast.success("Removed From Cart");
                    }
                },
                {
                    label: 'No',
                    onClick: () => {
                        
                        toast.success("Deleting from cart cancelled");
                    }
                }
            ]
        });
};
  const discount = () => {
    return cartItems.reduce((sum: number, item: { id: string | number; price: number; discount: number,quantity:number  }) => {
     
      const discountAmount = (item.price * item.discount) / 100;
      return sum + discountAmount *(item.quantity||1);
    }, 0);
  };
  
  const totalCost = () => {
    return cartItems.reduce((sum: number, item: { id: string | number; price: number;quantity:number }) => {
      return sum + item.price * (item.quantity||1);
    }, 0);
  };
  
  const OurCost = () => {
    return totalCost() - discount();
  };
  const backToHome = () => {
    navigate("/");
  };

  const [isLiked, setisLiked] = useState(false);
  // const {isLiked,setisLiked} = useContext(dataContext)

  const liked = () => {
    if (isLiked) {
      setisLiked(false);
      toast.error("Removed from Wishlist!");
    } else {
      setisLiked(true);
      toast.success("Added to Wishlist!");
    }
  };

  const orderNowAll = () => {
    toast.success(`Thank you for placing your order!You have shopped total worth of :${OurCost()}`);
    const updatedData = Data.map((item: any) => ({
      ...item,
      isAddedToCart: false,

    }));
  
    setData(updatedData);
    setNoOfCartItem(0)
  };
  const orderNow = (id: number) => {
    
    const updatedData = Data.map((item: any) => 
      item.id === id 
        ? { ...item, isAddedToCart: false }
        : item 
    );
  
    setData(updatedData);
    setNoOfCartItem(noOfCartItem-1)
    toast.success(`Thank you for placing order.`);
    

  };


  return (
    <>
    <Button
            logo={"HANAMI"}
            login={"Login"}
            noOfCartItem={noOfCartItem}
            setSearch={setSearch}
          />
 <button className="back-button" onClick={backToHome}>Back</button>
 <p className="top-items-added">Items added ({noOfCartItem})</p>
    <div className="cart-container">
    
        
      <div className="cart-items">
        {cartItems.length === 0 ? (
          <p className="zero-products">Your cart feels very light!🥺 </p>
        ) : (
          cartItems.map((item: any) => (
            
            
            <div key={item.id} className="cart-item">
                
              <img src={item.image} alt={item.name} className="cart-image" />
              <div className="cart-item-details">
                <p>{item.name}</p>
                <p>Discount :{item.discount}%</p>
                <p>Price: {item.price * (item.quantity||1)}</p>
                <p>Rating: {item.rating}</p>
                <div className="quantity-controls">
                  <button onClick={() => CartItemsDecrement(item.id)}>-</button>
                  <p>{item.quantity||1}</p>
                  <button onClick={() => CartItemsIncrement(item.id)}>+</button>
                  
                </div>
                <p>Size: {size}</p>
                <div className="cart-item-actions">
                  <button className="buy-now" onClick={() => orderNow(item.id)}>Buy now</button>
                  <button className="remove-cart-item" onClick={()=>handleRemove(item.id)} >
                    Remove from cart
                  </button>
                  
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      <div className="cart-summary">
        <div><h2>Cart Summary</h2></div>
        <hr/>
        <div><p>Total Items: {noOfCartItem}</p></div>
        <p className="discount-of product">Discount:{discount()}</p>
        <div><p>Total Cost: {totalCost()}</p></div>
        <div><p>Our Price:{OurCost()}</p></div>
        <p className="delivey-charges"> Delivery Charges: Free delivery</p>
        <button className="order-now" onClick={orderNowAll}>Order Now</button>
        
        
        
      </div>
      <ToastContainer/>
      
    </div>
    </>
  );
};



