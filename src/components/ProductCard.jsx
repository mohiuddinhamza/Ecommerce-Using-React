import React from 'react';
import { FaCartArrowDown } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom'; 
import { useCartContext } from '../context/CartContext';

export default function ProductCard({ product }) {
  const navigate = useNavigate();
  const {addToCart} = useCartContext();
  return (
    <div className="relative bg-white/70 backdrop-blur-md border border-gray-200 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-4">
      <div className="overflow-hidden rounded-lg">
        <img
          src={product.image}
          alt={product.title}
          className="w-full aspect-square object-cover transition-transform duration-300 hover:scale-105 cursor-pointer"
          onClick={() => navigate(`/product/${product.id}`)}
        />
      </div>

      <div className="mt-4 space-y-2">
        <h3 className="text-base font-semibold text-gray-900 line-clamp-2">
          {product.title}
        </h3>

        <div className="flex justify-between items-center">
          <span className="text-sm font-bold text-red-600 bg-gray-100 px-3 py-1 rounded-full">
            ${product.price}
          </span>
        </div>

        <button 
        className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-amber-500 to-yellow-400 text-black font-medium rounded-full hover:scale-[0.98] hover:brightness-105 transition"
        onClick={()=>addToCart(product)}
        >
          <FaCartArrowDown className="w-5 h-5" />
          Add to Cart
        </button>
      </div>

      <span className="absolute top-2 right-2 text-xs bg-white text-gray-500 px-2 py-1 rounded shadow">
        In Stock
      </span>
    </div>
  );
}
