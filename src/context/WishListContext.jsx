
import { createContext, useContext } from "react";

export const WishListContext = createContext();

export const useWishListContext = () => useContext(WishListContext);
