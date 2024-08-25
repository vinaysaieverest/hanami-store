import React, { useContext, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { dataContext } from "../Context/GlobalContext";
import { Button } from "./NavBar";
import { toast } from "react-toastify";

type Product = {
  id: number;
  name: string;
  image: string;
  price: string;
  rating: string;
  discount: number;
  isnew: boolean;
  isavailable: boolean;
  isAddedToCartFromHome: boolean;
  isAddedToWishList: boolean;
  isAddedToCartFromProduct:boolean
};
interface CartItem extends Product {
  quantity: number;
}
interface ProductsProps {
  Data1: Product[];
}

export const Products = ({ Data1 }: ProductsProps) => {
  const { Data, setData } = useContext(dataContext);
  const navigate = useNavigate();
  const { noOfCartItem, setNoOfCartItem } = useContext(dataContext);
  const {  setSearch } = useContext(dataContext);
  const [isLiked, setisLiked] = useState(false);
  const [cart, setCart] = useState([]);
  const { size, setSize } = useContext(dataContext);
  const {isAdded,setisAdded} = useContext(dataContext)
  const SelectSize = (selectedSize: string) => {
    setSize(selectedSize);
    console.log(selectedSize); 
  };
  const liked = () => {
    if (isLiked) {
      setisLiked(false);
      toast.error("Removed from Wishlist!");
    } else {
      setisLiked(true);
      toast.success("Added to Wishlist!");
    }
    
  };

  const handleClick1 = () => {
    if (!a) return;
  
    if (!a.isAddedToCartProduct) {
      handleAddToCart(id1);
      updateCart();
    
    }
    console.log(Data)
  };
  
  const handleAddToCart = (id: number) => {
    setData((Data1: Product[]) =>
      Data1.map((item) =>
        item.id === id ? { ...item, isAddedToCartFromProduct: true } : item
      )
    );
  };
  
  const updateCart = () => {
    setNoOfCartItem(noOfCartItem + 1);
  };
  
  
  const { id } = useParams();
  if (!id) {
    return <></>;
  }
  const id1 = parseInt(id);
  const a = Data.find((item: { id: number }) => item.id === id1);
  const sizes = ["XS", "S", "M", "L", "XL", "XXL"];
  if (!a) {
    return <p className="product-not-found">Product not found. Please try again later.</p>;
  }

  const backToHome = () => {
    navigate("/");
  };
  const addedItems = () => {
    navigate(`/cart`);
  };

  return (
    <>
      <Button
        logo={"HANAMI"}
        login={"Login"}
        noOfCartItem={noOfCartItem}
        setSearch={setSearch}
      />
      <button className="back-button" onClick={backToHome}>
        Back
      </button>
      <div className={a?.isavailable ? "select_one_div1" : "select_one_div2"}>
        <div className="single-image-container">
          <img src={a?.image} className="image-single-product" />
        </div>
        <div className="details-container">
          <p className="name-single-product">{a?.name}</p>
          <p className="discount-single-product">Discount: {a?.discount}%</p>
          <p className="price-single-product">Price: {a?.price} INR</p>
          <p className="rating-single-product">Rating: {a?.rating}</p>
          <div>
            {sizes.map((Size) => (
              <button
              className={`sizeButton ${size === Size ? 'selected1' : ''}`}
                key={Size}
                disabled={false}
                onClick={() => SelectSize(Size)}
              >
                {Size}
              </button>
            ))}
          </div>
          {a?.isAddedToCartFromProduct ? (
            <>
              <button className="button_add_to_cart" onClick={addedItems}>
                Go to Cart
              </button>
            </>
          ) : (
            <button
              className="button_add_to_cart"
              onClick={handleClick1}
              disabled={!a.isavailable}
            >
              Add to cart
            </button>
          )}
          <button
            className="buy-now-single-product"
            disabled={a?.isavailable ? false : true}
          >
            Buy now
          </button>
          <button onClick={liked} className="single-like-button">
            <img
              className="heartImage"
              src={a?.isAddedToWishList ? 'likedImage.png' : 'unLikedImage.png'}
            />
          </button>

          <p>
            This is the white shoes which have great durability and good quality
          </p>
        </div>
      </div>
    </>
  );
};


