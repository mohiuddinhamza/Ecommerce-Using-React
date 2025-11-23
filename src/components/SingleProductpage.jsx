import axios from 'axios';
import Lottie from 'lottie-react';
import React, {useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import loading from '../assets/Loading.json';
import BreadScrumb from './BreadScrumb';
import { FaCartPlus } from "react-icons/fa6";
import { CiBookmarkPlus } from "react-icons/ci";
import { useCartContext } from '../context/CartContext';
import { useWishListContext } from '../context/WishListContext';



export default function SingleProductPage() {
  const { addWishList } = useWishListContext();
  const params = useParams();
  const [product, setProduct] = useState(null);
  const [loadingState, setLoadingState] = useState(true);
  const {addToCart} = useCartContext();

 const fetchProduct = useCallback(async () => {
  try {
    const response = await axios.get(`https://fakestoreapi.in/api/products/${params.id}`);
    setProduct(response.data.product);
  } catch (error) {
    console.error("Something went wrong!", error);
  } finally {
    setLoadingState(false);
  }
}, [params.id]);



useEffect(() => {
  fetchProduct();
}, [fetchProduct]);
  if (loadingState || !product) {
    return <Lottie animationData={loading} className="w-[600px] mx-auto" />;
  }

  const discount = product.discount || 0;
  const OrignalPrice = (product.price +( product.price * discount /100))

  return (
    <>
      <div className="px-4 py-6 md:px-8 lg:px-16">
        <BreadScrumb title={product.title} />

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Product Image */}
          <div className="w-full aspect-square overflow-hidden rounded-lg shadow-md">
            <img
              src={product.image}
              alt={product.title}
              onError={(e)=>{ e.target.src = '/fallback.jpg' }}
              className="w-full h-full object-contain transition-transform duration-300 hover:scale-105"
            />
          </div>

          {/* Product Details */}
          <div className="flex flex-col gap-6">
            <h1 className="text-2xl md:text-4xl font-semibold text-gray-800 leading-tight">
              {product.title}
            </h1>

            <div className="text-sm text-gray-500 uppercase tracking-wide">
              {product.brand} &bull; {product.category} &bull; {product.model}
            </div>

            <div className="text-xl font-bold text-red-600 flex items-center gap-3">
              ${product.price}
              <span className="bg-red-500 text-white text-sm px-3 py-1 rounded-full">
                {product.discount}% OFF
              </span>
            </div>

            <p className="text-gray-600 text-base leading-relaxed">
              {product.description || "No description available."}
            </p>

            {/* Quantity Selector */}
            <div className="flex items-center gap-4">
              <label
                htmlFor="Quantity"
                className="text-sm font-medium text-gray-700"
              >
                Quantity:
              </label>
              <input
                type="number"
                name="Quantity"
                id="Quantity"
                min={1}
                defaultValue={1}
                className="w-20 px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-amber-400 outline-none"
              />
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4 mt-6">
              <button className="flex justify-center items-center px-4 py-2 sm:px-6 sm:py-3 gap-2  bg-red-500 text-white text-lg font-md sm:font-medium rounded-md hover:bg-red-600 transition shadow-md" onClick={()=>addToCart(product)} >
                <FaCartPlus className="w-5 h-5" /> Add to Cart

              </button>
              <button className="flex  justify-center items-center gap-2 px-4 py-2 sm:px-6 sm:py-3 bg-gray-100 text-gray-700 text-lg font-medium rounded-md hover:bg-gray-200 transition shadow-md" onClick={()=> addWishList(product)} >
                <CiBookmarkPlus className="w-5 h-5" /> Wishlist
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
