export type Ttypecard = {

  id:number,
  image: string;
  name: string;
  price: string;
  rating: string;
  discount:number;
  isavailable:boolean;
  isnew:boolean;
  isAddedToCart:boolean;
  isAddedToWishList:boolean;
  isInOffers:boolean;
  updateCart?:Function;
  handleAddToCart: Function
  handleAddToWishList:Function
  handleProduct?:Function
};
export type Ttypecard1 = {
  id:number,
  image: string;
  name: string;
  price: string;
  rating: string;
  discount:number;
  isavailable:boolean;
  isnew:boolean;
  isAddedToCart:boolean;
  isAddedToWishList:boolean;
  isInOffers:boolean;
};

export type Htype = {
  logo: string;
  // search: string;
  login: string;
  noOfCartItem:number;
  setSearch:Function
  
};
export type Stypecard = {
  image: string;
  name: string;
};

export type PtypeCard = {
  id:number,
  image: string;
  name: string;
  price: string;
  rating: string;
   isavailable:boolean;
  isnew:boolean;
  isAddedToCart:boolean;
  isAddedToWishlist:boolean;
  updateCart:() => void;
  handleAddToCart1:Function;
  handleAddToWishList1:Function

}