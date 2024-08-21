import { useContext, useEffect, useState } from "react";
import React from "react";
import "./App.css";
import { Button } from "./buttons";
import { Card} from "./card";
import {Ttypecard} from './types'
import { data } from "./data";


import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { dataContext } from "./Context/GlobalContext";


function App() {
  // const [Data, setData] = useState(data);
  const {Data,setData} = useContext(dataContext);
  const {noOfCartItem, setNoOfCartItem} = useContext(dataContext);
  const{isAdded,setisAdded} = useContext(dataContext)
  

  const [search, setSearch] = useState("");

  const updateCart = () => {
    setNoOfCartItem(noOfCartItem + 1);
    if (noOfCartItem > 1) {
      return 1;
    }
  };
  const handleAddToCart = (id: number) => {
    console.log(id);
    setData((Data1: any[]) =>
      Data1.map((item) =>
        item.id === id ? { ...item, isAddedToCart: true } : item
      )
    );
    console.log(Data);
    updateCart();
  };
  
  const handleAddToWishList = (id: number) => {
    console.log(id);
    setData((Data:any) =>
      Data.map((item: { id: number; }) =>
        item.id === id ? { ...item, isAddedToWishlist: true } : item
      )
    );
    console.log(Data);
  };
  
  const filteredData = Data.filter((ele: { name: string; }) =>
    ele.name.toLowerCase().includes(search.toLowerCase())
  );


  const handleProduct = (id: number) => {
    
  };

  return (
    <>
      <div className="parent">
        <div className="navbar">
          <Button
            logo={"HANAMI"}
            login={"Login"}
            noOfCartItem={noOfCartItem}
            setSearch={setSearch}
          />
        </div>
        <div>
          {filteredData.length === 0  ? (
            <div className="noProducts">
              <h1 className="sorryFont">Oops! no products found.</h1>
              <br />
              <img
                src="https://t4.ftcdn.net/jpg/07/84/55/45/240_F_784554581_CqOWcc8pBqdmMz8ck6emrLoq1w1IKVQm.jpg"
                className="sadImage"
              />
            </div>
          ) : (
            <>
              <div className="content">
                <h1 className="freedom">Freedom Day Sales</h1>
                <h1 className="discount">Get upto 70% discount</h1>
              </div>
              <ToastContainer />
              <div className="con">
                {Data.filter((ele: { name: string; }) =>
                  ele.name.toLocaleLowerCase().includes(search)
                ).map((ele:Ttypecard) => (
                  <Card
                    id={ele.id}
                    image={ele.image}
                    name={ele.name}
                    price={ele.price}
                    rating={ele.rating}
                    isnew={ele.isnew}
                    discount={ele.discount}
                    isavailable={ele.isavailable}
                    isAddedToCart={ele.isAddedToCart}
                    isAddedToWishlist={ele.isAddedToWishlist}
                    isInOffers={ele.isInOffers}
                    updateCart={updateCart}
                    handleAddToCart={handleAddToCart}
                    handleAddToWishList={handleAddToWishList}
                    handleProduct={handleProduct}
                  />
                ))}
              </div>
              
            </>
          )}
        </div>
      </div>

      
    </>
  );
}

export default App;
