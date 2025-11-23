// context/WishListContextProvider.jsx
import { useEffect, useState } from "react";
import { WishListContext } from "./WishListContext";

export default function WishListContextProvider({ children }) {
  const [wishList, setWishList] = useState([]);

  const addWishList = (product) => {
    setWishList(prev =>
      prev.find(item => item.id === product.id) ? prev : [...prev, product]
    );
  };

  const removeWishList = (id) => {
    setWishList(prev => prev.filter(item => item.id !== id));
  };

  useEffect(()=>{
    try {
      const storedWishlist =  localStorage.getItem('wishList')
   if(storedWishlist){
   const parsed =  JSON.parse(storedWishlist);
   if(Array.isArray(parsed))
    setWishList(parsed);
   }
  }
      
     catch (error) {
      console.log(error);
    }
  },[]);
  useEffect(()=>{
    localStorage.setItem('wishList', JSON.stringify(wishList));
  },[wishList])

  return (
    <WishListContext.Provider value={{ wishList, addWishList, removeWishList }}>
      {children}
    </WishListContext.Provider>
  );
}
