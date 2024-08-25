import { Router,Route,Routes } from "react-router-dom"
import { Products } from "./Products"
import{CartAddedProducts} from './CartItems'

import App from '../App'
import { data  } from '../data';
import { useState } from "react";

export const RouteC = () => {
  const [Data, setData] = useState(data);

    return(
       
            <Routes>
        <Route path="/products/:id" element={<Products Data1={Data}/>} />
        <Route path="/" element={<App/>}/>
        <Route path="/cart" element={<CartAddedProducts/>} />
            </Routes>

      
    )
} 
