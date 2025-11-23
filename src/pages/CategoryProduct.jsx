import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Lottie from "lottie-react";
import loading from "../assets/Loading.json";
import { IoMdArrowBack } from "react-icons/io";
import ProductListView from "../components/ProductListView";

export default function CategoryProduct() {
  const [searchData, setSearchData] = useState([]);
  const { category } = useParams();
  const navigate = useNavigate();

  const getFilteredProducts = async () => {
    try {
      const response = await axios.get(
        `https://fakestoreapi.in/api/products/category?type=${category}`
      );
      const productData = response.data.products;
      setSearchData(productData);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getFilteredProducts();
    window.scrollTo(0, 0);
  }, [category]);

  return (
    <div className="px-4 sm:px-6 lg:px-8">
      {searchData.length > 0 ? (
        <div className="max-w-6xl mx-auto mt-10 mb-10">
         
          <button
  onClick={() => navigate("/")}
  className="fixed bottom-5 left-5 z-50 flex items-center gap-2 px-5 py-2 rounded-full bg-black/70 backdrop-blur-md text-white text-sm shadow-xl hover:bg-black/80 transition-all duration-300 md:bottom-8 md:left-8 md:px-6 md:py-2.5 md:text-base"
>
  <IoMdArrowBack className="text-base md:text-lg" />
  <span className="font-medium">Back</span>
</button>



          <div className="mt-6 space-y-6">
            {searchData.map((item, index) => (
              <ProductListView key={index} item={item} />
            ))}
          </div>
        </div>
      ) : (
        <div className="flex flex-col justify-center items-center h-screen px-4">
          <Lottie
            animationData={loading}
            className="w-[300px] sm:w-[400px] md:w-[600px]"
          />
        </div>
      )}
    </div>
  );
}
