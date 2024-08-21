import React, { useContext, useState } from "react";
import { dataContext } from "../Context/GlobalContext";
import { data } from "../data";
import Modal from "./ModelComponent";

export const CartAddedProducts = () => {
  const { Data } = useContext(dataContext);
  const { noOfItems, setnoOfItems } = useContext(dataContext);
  const { isAdded, setisAdded } = useContext(dataContext);
  const { noOfCartItem, setnoOfCartItem } = useContext(dataContext);
  const [isModalOpen, setModalOpen] = useState(false); // State to control modal visibility
  const [itemToRemove, setItemToRemove] = useState(null);

  // Filter all products that have been added to the cart
  const cartItems = Data.filter(
    (item: { isAddedToCart: boolean }) => item.isAddedToCart === true
  );
  const CartItemsIncrement = () => {
    setnoOfItems(noOfItems + 1);
  };
  const CartItemsDecrement = () => {
    setnoOfItems(noOfItems - 1);
  };

  const totalCost = () => {
    return cartItems.reduce((sum: number, item: { id: string | number; price: number; }) => {
     
      return sum + (item.price * noOfItems);
    }, 0);
  };
//   const removeFromCart = () => {
//     const confirmed = window.confirm("Are you sure you want to remove this item from the cart?");
//     if (confirmed) {
//       setisAdded(false);
   
//       setnoOfItems(setnoOfItems-1)
     
//     }
//   };

 

    function openModal(item: any): void {
        throw new Error("Function not implemented.");
    }

  return (
    <div>
      {cartItems.length === 0 ? (
        <p>No items in the cart</p>
      ) : (
        cartItems.map((item: any) => (
            
          <div key={item.id} className="select_one_div">
            
              <img src={item.image} alt={item.name} className="cartImage" />
              <div className="borderOfCartItems">
                <p>{item.name}</p>
                <p>{item.discount}</p>
                <p>Price: {item.price * noOfItems}</p>
                <p>Rating :{item.rating}</p>
                <div className="IandD">
                <button onClick={CartItemsDecrement}>-</button>
                 
                  <p>{noOfItems}</p>
                  <button onClick={CartItemsIncrement}>+</button>
                  
                </div>
                <div>
                  <button className="cartButton1">Buy now</button>
                  <button className="cartButton2" onClick={()=>{setModalOpen(true)}} >
                    Remove from cart
                  </button>
                </div>
              </div>
              
            
           
          </div>
          
        ))
      )}
      <div className="cart-summary">
        <h2>Cart Summary</h2>
        <p>Total Items: {noOfCartItem}</p>
        <p>Total Cost:{totalCost()} </p>
      </div>
      {isModalOpen &&< Modal/>}
     
    </div>
  );
};


