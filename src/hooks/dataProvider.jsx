// src/hooks/dataProvider.jsx
import axios from "axios";
import { useState } from "react";
import { DataContext } from "./dataContext"; 

export const DataProvider = ({ children }) => {
  const [data, setData] = useState(null);

  const allFatch = async () => {
    try {
      const response = await axios.get("https://fakestoreapi.in/api/products?limit=150");
      const allProductsData = response.data.products;
      setData(allProductsData);
    } catch (error) {
      console.log("API fetching error", error);
    }
  };

  const getUniqueCategory = (data,property)=>{
      let newVariable = data?.map((currentElement)=>{
        return currentElement[property]
      })
      newVariable = ["ALL",...new Set(newVariable)]
      return newVariable
    }

    const categoryOnly = getUniqueCategory(data,'category')

    const brandOnly = getUniqueCategory(data, "brand");

  return (
    <DataContext.Provider
      value={{ setData, data, allFatch, categoryOnly, brandOnly }}
    >
      {children}
    </DataContext.Provider>
  );
};


