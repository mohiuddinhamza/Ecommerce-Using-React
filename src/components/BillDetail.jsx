import React from 'react';
import { LuNotebookText } from "react-icons/lu";
import { GiCash, GiShoppingBag } from "react-icons/gi";
import { useCartContext } from "../context/CartContext";

export default function BillDetail() {
  const { cartItems } = useCartContext();
  const totelPrice = cartItems.reduce((totel, item) => totel + item.price, 0);

  return (
    <div className="bg-white rounded-md shadow-lg p-4 sm:p-5 mt-5 space-y-4 h-max w-full">
      <h1 className="text-gray-700 font-bold text-lg sm:text-xl">Bill Details</h1>

      <div className="flex justify-between items-center text-sm sm:text-base">
        <h1 className="text-gray-500 flex items-center gap-1">
          <LuNotebookText />
          Total Items
        </h1>
        <p>${totelPrice}</p>
      </div>

      <div className="flex justify-between items-center text-sm sm:text-base">
        <h1 className="text-gray-500 flex items-center gap-1">
          <GiCash />
          Delivery Charges
        </h1>
        <p className="text-red-500 font-semibold">
          <span className="text-gray-500 line-through">$25</span> Free
        </p>
      </div>

      <div className="flex justify-between items-center text-sm sm:text-base">
        <h1 className="text-gray-500 flex items-center gap-1">
          <GiShoppingBag />
          Handling
        </h1>
        <p className="text-red-500 font-semibold">$5</p>
      </div>

      <hr className="text-gray-200 mt-2" />

      <div className="flex justify-between items-center mt-2 text-sm sm:text-base">
        <h1 className="font-semibold text-gray-500">Grand Total</h1>
        <p className="text-red-500 font-semibold text-base sm:text-lg">
          ${totelPrice + 5}
        </p>
      </div>

      <div>
        <h1 className="font-semibold text-gray-500 mt-6 mb-3 text-sm sm:text-base">
          Promo Code
        </h1>
        <div className="flex flex-col sm:flex-row gap-3">
          <input
            type="text"
            placeholder="Enter PromoCode"
            className="p-2 rounded-md border border-amber-400 outline-none w-full"
          />
          <button className="bg-red-500 hover:bg-red-400 text-white px-4 py-2 rounded-md w-full sm:w-auto">
            Apply
          </button>
        </div>
      </div>

      <div className="flex justify-center items-center mt-5">
        <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md hover:shadow-lg w-full">
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
}
