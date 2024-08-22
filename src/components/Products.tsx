import React, { useContext, useState } from "react";
import { useNavigate, useNavigation, useParams } from "react-router-dom";
import { dataContext } from "../Context/GlobalContext";
import { Button } from "../buttons";
import likedImage from "../assets/heart (1).png";
import unlikedImage from "../assets/heart.png";
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
  isAddedToCart: boolean;
  isAddedToWishList: boolean;
};
interface ProductsProps {
  Data1: Product[];
}
export const Products = ({ Data1 }: ProductsProps) => {
  const { Data, setData } = useContext(dataContext);
  const navigate = useNavigate();
  const { noOfCartItem, setNoOfCartItem } = useContext(dataContext);
  const { search, setSearch } = useContext(dataContext);
  const [isLiked, setisLiked] = useState(false);
  const { size, setSize } = useContext(dataContext);

  const handleAddToWishList1 = (id: number) => {
    console.log(id);
    setData((Data: any) =>
      Data.map((item: { id: number }) =>
        item.id === id ? { ...item, isAddedToWishList: true } : item
      )
    );
    console.log(Data);
  };
  const SelectSize = (selectedSize: string) => {
    setSize(selectedSize); // Set the selected size
    console.log(selectedSize); // Log the selected size
  };
  const liked = () => {
    if (isLiked) {
      setisLiked(false);
      toast.error("Removed from Wishlist!");
    } else {
      setisLiked(true);
      toast.success("Added to Wishlist!");
    }
    temp();
    handleAddToWishList1(a.id);
  };

  const { id } = useParams();
  if (!id) {
    return <></>;
  }
  const id1 = parseInt(id);
  const a = Data.find((item: { id: number }) => item.id === id1);
  const sizes = ["XS", "S", "M", "L", "XL", "XXL"];
  const check = () => {};

  const backToHome = () => {
    navigate("/");
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
  const singleProductAddToCart = () => {
    handleAddToCart(id1);
    updateCart();
  };
  const temp = () => {
    console.log(a);
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
          {a?.isAddedToCart ? (
            <>
              <button className="button_add_to_cart" onClick={addedItems}>
                Go to Cart
              </button>
            </>
          ) : (
            <button
              className="button_add_to_cart"
              onClick={singleProductAddToCart}
            >
              Add to Cart
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
              src={a?.isAddedToWishList ? likedImage : unlikedImage}
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
