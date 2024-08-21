import React, { Children, createContext, useState } from 'react'
import { data } from '../data'

export const dataContext = createContext<any>(null)

export default function GlobalContext(props:any) {
    const [Data, setData] = useState(data);
    const [noOfCartItem, setNoOfCartItem] = useState(0);
    const [noOfItems,setnoOfItems] = useState(1)
    const [isAdded, setisAdded] = useState(false);
    const[openModal,setOpenModal] = useState(false)
    

    const value = {
        Data,
        setData,
        noOfCartItem,
        setNoOfCartItem,
        noOfItems,
        setnoOfItems,
        isAdded,
        setisAdded,
        openModal,
        setOpenModal
        
    }
    

  return (
    <dataContext.Provider value={value}>
        {props.children}
    </dataContext.Provider>
  )
}
