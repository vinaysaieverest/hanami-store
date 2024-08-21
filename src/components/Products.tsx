import React, { useContext } from "react";
import { data } from "../data";
import { useParams } from "react-router-dom";
import { Card } from "../card";
import { dataContext } from "../Context/GlobalContext";
type Product = {
  id: number;
  name: string;
  image: string;
  price: string;
  rating: string;
  discount: string;
  isnew: boolean;
  isavailable: boolean;
  isAddedToCart: boolean;
  isAddedToWishlist: boolean;
};

interface ProductsProps {
  Data: Product[];
}


export const Products: React.FC<ProductsProps> = ({
  Data,
}) => {
  const {setData}  = useContext(dataContext);
  const {noOfCartItem,setNoOfCartItem} = useContext(dataContext)
  
  const { id } = useParams();
  if (!id) {
    return <></>;
  }
  const id1 = parseInt(id);
  const a = Data.find((item) => item.id === id1);
  const sizes = ["XS", "S", "M", "L", "XL", "XXL"];
  const check = () => {
    
  };



  const handleAddToCart = (id: number) => {
  
    console.log(id);
    setData((Data1: any[]) =>
      Data1.map((item) =>
        item.id === id ? { ...item, isAddedToCart: true } : item
      )
    );
   
    
  };
  const updateCart = () => {
    setNoOfCartItem(noOfCartItem + 1);
    if (noOfCartItem > 1) {
      return 1;
    }
  };
  const hello =()=>{
    handleAddToCart(id1)
    updateCart()
  }
 
  return (
    <div className="select_one_div1">
      <img src={a?.image} />
      <div>
        <p>{a?.name}</p>

        <p className="discount-single-product">{a?.discount}</p>
        <p className="price-single-product">Price :{a?.price} INR</p>
        <p className="rating-single-product">Rating : {a?.rating}</p>
        <div>
          {sizes.map((size) => (
            <button className="sizeButton" key={size} >

              {size}
            </button>
          ))}
        </div>
        <button onClick={hello} className="buy-now-single-product" >Add to cart</button>
        <button className="buy-now-single-product">Buy now</button>
        <p>
          This is the white shoes which have great durablity and good quality
        </p>
      </div>
    </div>
  );
};
