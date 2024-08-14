import { useEffect, useState } from "react";
import React from "react";
import "./App.css";
import { Button } from "./buttons";
import { Card, Card1 } from "./card";
import { data } from "./data";
import {productData} from './data'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Ttypecard } from "./types";



function App() {
  const [Data, setData] = useState(data);
  const [noOfCartItem,setNoOfCartItem] = useState(0);
  
  const updateCart = ()=>{
    

    setNoOfCartItem(noOfCartItem+1)
    toast.success("Item added!")
  }
  const [search,setSearch]=useState("")

  const handleAddToCart = (id:number) => {
    console.log(id)
    setData(Data1 =>
      Data1.map(item => item.id === id ? { ...item, isAddedToCart: true } : item
      )
      
      
    );
    updateCart();
  };







const [PData, setPData] = useState(productData);
const handleAddToCart1 = (id:number) => {
console.log(id)
setPData(Data1 =>
  Data1.map(item => item.id === id ? { ...item, isAddedToCart: true } : item
  )
  
  
);

updateCart();
};

  return (
    <div className="parent">
      <div className="navbar">
        <Button logo={"HANAMI"}  login={"Login"} noOfCartItem={noOfCartItem} setSearch={setSearch}/>
      
      </div>
      <div>
      <div className="content">
        <h1 className="freedom">Freedom Day Sales</h1>
        <h1 className="discount">Get upto 70% discount</h1>
      </div>
      <ToastContainer />
      <div className="con">
        {Data.filter((ele)=>ele.name.toLocaleLowerCase().includes(search)).map((ele) => (
          <Card
            id={ele.id}
            image={ele.image}
            name={ele.name}
            price={ele.price}
            rating={ele.rating}
            Bname={ele.Bname}
            BUname={ele.BUname}
            isnew={ele.isnew}
            discount={ele.discount}
            isavailable={ele.isavailable}
            isAddedToCart={ele.isAddedToCart}
            isAddedToWishlist={ele.isAddedToWishlist}
            updateCart  = {updateCart}
            handleAddToCart={handleAddToCart}
          />
        ))}
      </div>
      <div className="ourProducts">

        <p>
          Our Products
        </p>
      </div>










      <div className="ourProductsCard">
      {PData.filter((ele)=>ele.name.toLocaleLowerCase().includes(search)).map((ele) => (
          <Card1
            id={ele.id}
            image={ele.image}
            name={ele.name}
            price={ele.price}
            rating={ele.rating}
            Bname={ele.Bname}
            isnew={ele.isnew}
            isavailable={ele.isavailable}
            isAddedToCart={ele.isAddedToCart}
            isAddedToWishlist={ele.isAddedToWishlist}
            updateCart  = {updateCart}
            handleAddToCart1={handleAddToCart1}

            


          />
      ))}
      </div>
      </div>
    </div>
  );
}

export default App;
