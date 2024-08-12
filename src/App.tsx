import { useState } from "react";
import React from "react";
import "./App.css";
import { Button } from "./buttons";
import { Card } from "./card";
import { data } from "./data";
import {productData} from './data'
import { Select_card } from "./card";
import { S_data } from "./data";
import Heart from "react-animated-heart";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { toBeDisabled } from "@testing-library/jest-dom/matchers";
import { FaRegHeart } from "react-icons/fa";


function App() {
  const [noOfCartItem,setNoOfCartItem] = useState(0);
  // const [isDisabled, setIsDisabled] = useState(false);
  const updateCart = ()=>{

    setNoOfCartItem(noOfCartItem+1)
    toast.success("Item added!")
    // setIsDisabled(true)
  }

  
  return (
    <div className="parent">
      <div className="navbar">
        <Button logo={"HANAMI"} search={"Enter something"} login={"Login"} noOfCartItem={noOfCartItem}/>
      </div>
      <div>
      <div className="content">
        <h1 className="freedom">Freedom Day Sales</h1>
        <h1 className="discount">Get upto 70% discount</h1>
      </div>
      <ToastContainer />
      <div className="con">
        {data.map((ele) => (
          <Card
            image={ele.image}
            name={ele.name}
            price={ele.price}
            rating={ele.rating}
            Bname={ele.Bname}
            isnew={ele.isnew}
            discount={ele.discount}
            isavailable={ele.isavailable}
            updateCart  = {updateCart}
            


          />
        ))}
      </div>
      <div className="ourProducts">

        <p>
          Our Products
        </p>
      </div>
      <div className="ourProductsCard">
      {productData.map((ele) => (
          <Card
            image={ele.image}
            name={ele.name}
            price={ele.price}
            rating={ele.rating}
            Bname={ele.Bname}
            isnew={ele.isnew}
            discount={ele.discount}
            isavailable={ele.isavailable}
            updateCart  = {updateCart}

            


          />
      ))}
      </div>
      </div>
    </div>
  );
}

export default App;
