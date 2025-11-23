import { useState } from "react";
import { CartContext } from "./CartContext";
import { toast } from "react-toastify";

export const CartContextProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    let toastMessage = "";
    setCartItems((prevItems) => {
      const exists = prevItems.find((item) => item.id === product.id);
      if (exists) {
        toastMessage = 'Product quantity updated';
        return prevItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      else{
        toastMessage = 'Product added to cart';
      return [...prevItems, { ...product, quantity: 1 }];
      }
    });
   if(toastMessage) toast.success(toastMessage)
  };

  const updateQuantity = (productId, newQuantity) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === productId
          ? { ...item, quantity: Math.max(newQuantity, 1) }
          : item
      )
    );
    toast.info('Quantity updated');
  };

  const removeFromCart = (productId) => {
    setCartItems((prevItems) =>
      prevItems.filter((item) => item.id !== productId)
    );
    toast.success('Product removed successfully!');
  };

  const clearCart = () =>{
 setCartItems([]);
  toast.info('Cart cleared');
  }
   
  return (
    <CartContext.Provider
      value={{ cartItems,setCartItems, addToCart, updateQuantity, removeFromCart, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
};
