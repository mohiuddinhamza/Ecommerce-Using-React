import React from "react";
import { useUser } from "@clerk/clerk-react";
import { useOutletContext } from "react-router-dom";

export default function DeliveryInfo() {
  const { user } = useUser();
  const { location, detectLocation } = useOutletContext(); 

  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="bg-gray-100 p-4 sm:p-6 space-y-4 rounded-lg shadow-md max-w-3xl mx-auto">
        <h1 className="text-lg sm:text-xl text-gray-700 font-bold">Delivery Info</h1>

        <div className="flex flex-col space-y-1">
          <label className="font-semibold text-sm sm:text-base">Full Name</label>
          <input
            type="text"
            placeholder="Enter your full name"
            value={user.fullName}
            name="fullName"
            className="p-2 rounded-md bg-gray-50 border border-amber-400 outline-none text-sm"
          />
        </div>

        <div className="flex flex-col space-y-1">
          <label className="font-semibold text-sm sm:text-base">Address</label>
          <input
            type="text"
            placeholder="Enter your address"
            value={location?.city || ''}
            className="p-2 rounded-md bg-gray-50 border border-amber-400 outline-none text-sm"
          />
        </div>

        <div className="flex flex-col sm:flex-row gap-4 w-full">
          <div className="flex flex-col space-y-1 w-full">
            <label className="font-semibold text-sm sm:text-base">State</label>
            <input
              type="text"
              placeholder="Enter your state"
              value={location?.state || ""}
              className="p-2 rounded-md bg-gray-50 border border-amber-400 outline-none text-sm w-full"
            />
          </div>
          <div className="flex flex-col space-y-1 w-full">
            <label className="font-semibold text-sm sm:text-base">Postcode</label>
            <input
              type="text"
              placeholder="Enter your postcode"
              value={location?.postcode || ""}
              className="p-2 rounded-md bg-gray-50 border border-amber-400 outline-none text-sm w-full"
            />
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 w-full">
          <div className="flex flex-col space-y-1 w-full">
            <label className="font-semibold text-sm sm:text-base">Country</label>
            <input
              type="text"
              placeholder="Enter your country name"
              value={location?.country || ""}
              className="p-2 rounded-md bg-gray-50 border border-amber-400 outline-none text-sm w-full"
            />
          </div>
          <div className="flex flex-col space-y-1 w-full">
            <label className="font-semibold text-sm sm:text-base">Phone Number</label>
            <input
              type="tel"
              placeholder="Enter your phone No."
              className="p-2 rounded-md bg-gray-50 border border-amber-400 outline-none text-sm w-full"
            />
          </div>
        </div>

        <div className="mt-4">
          <button className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-400 w-full sm:w-auto">
            Submit
          </button>
        </div>

        <div className="flex justify-center items-center text-gray-400 text-sm">
          ------- OR -------
        </div>

        <div className="flex justify-center items-center">
          <button
            className="bg-red-500 hover:bg-red-600 rounded-md shadow-lg px-4 py-2 text-white"
            onClick={detectLocation}
          >
            Detect Address
          </button>
        </div>
      </div>
    </div>
  );
}
