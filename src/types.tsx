export type Ttypecard = {
  id:number,
  image: string;
  name: string;
  price: string;
  rating: string;
  Bname: string;
  BUname:string;
  discount:string;
  isavailable:boolean;
  isnew:boolean;
  isAddedToCart:boolean;
  isAddedToWishlist:boolean;
  updateCart:Function;
  handleAddToCart:Function;
};
export type Ttypecard1 = {
  image: string;
  name: string;
  price: string;
  rating: string;
  Bname: string;
  isavailable:boolean;
  isnew:boolean;
  isAddedToCart:boolean;
  isAddedToWishlist:boolean;
  updateCart:() => void;
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
  Bname: string;
  isavailable:boolean;
  isnew:boolean;
  isAddedToCart:boolean;
  isAddedToWishlist:boolean;
  updateCart:() => void;
  handleAddToCart1:Function;

}