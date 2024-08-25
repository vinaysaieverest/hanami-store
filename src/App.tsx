import { useContext } from "react";
import React from "react";
import "./App.css";
import { Button } from "./components/NavBar";
import { Card} from "./components/Cards";
import {Ttypecard} from './types'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { dataContext } from "./Context/GlobalContext";


function App() {
  // const [Data, setData] = useState(data);
  const {Data,setData} = useContext(dataContext);
  const {noOfCartItem, setNoOfCartItem} = useContext(dataContext);
  const {search,setSearch} = useContext(dataContext)



  const handleAddToWishList = (id: number) => {
    console.log(id);
    setData((Data:any) =>
      Data.map((item: { id: number; isAddedToWishList:boolean }) =>
        item.id === id ? { ...item, isAddedToWishList: !item.isAddedToWishList } : item
      )
    );
    console.log(Data);
  };
  
  const filteredData = Data.filter((ele: { name: string; }) =>
    ele.name.toLowerCase().includes(search.toLowerCase())
  );


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
                    isAddedToCartFromHome={ele.isAddedToCartFromHome}
                    isAddedToWishList={ele.isAddedToWishList}
                    isInOffers={ele.isInOffers}
                    handleAddToWishList={handleAddToWishList} 
                    isAddedToCartFromProduct={ele.isAddedToCartFromProduct}                  
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
