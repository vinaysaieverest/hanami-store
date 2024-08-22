import React, { Children, createContext, useState } from 'react'
import { data } from '../data'
import { Ttypecard } from '../types';

export const dataContext = createContext<any>(null)

export default function GlobalContext(props:any) {
    const [queryResults, setQueryResults] = useState<Ttypecard[]>([]);
    const [Data, setData] = useState(data);
    const [noOfCartItem, setNoOfCartItem] = useState(0);
    const [noOfItems,setnoOfItems] = useState(1)
    const [isAdded, setisAdded] = useState(false);
    const[openModal,setOpenModal] = useState(false)
    const [search, setSearch] = useState("");
    const [isLiked, setisLiked] = useState(false);
    const [size,setSize] = useState("M")

    
    const updateResults = (searchQuery: string) => {
    fetch('http://localhost:5050/api/items')
        .then(response => response.json())
        .then((data: Ttypecard[]) => {
            console.log(data);
            const filteredResults = data.filter((item) =>
                item.name.toLowerCase().includes(searchQuery.toLowerCase())
            );
            setQueryResults(filteredResults);
        });
};
    

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
        setOpenModal,
        search,
        setSearch,
        isLiked,
        setisLiked,
        size,
        setSize
        
    }
    

  return (
    <dataContext.Provider value={value}>
        {props.children}
    </dataContext.Provider>
  )
}
