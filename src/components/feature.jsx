import React from 'react';
import { FaTruckArrowRight } from "react-icons/fa6";
import { RiSecurePaymentLine } from "react-icons/ri";
import { GiReturnArrow } from "react-icons/gi";
import { Ri24HoursLine } from "react-icons/ri";

export default function Feature() {
  const features = [
    {
      icon: FaTruckArrowRight,
      text: "Free Shipping",
      subtext: "Free shipping on all orders over $100",
    },
    {
      icon: RiSecurePaymentLine,
      text: "Secure Payment",
      subtext: "Secure payment with 100% secure payment",
    },
    {
      icon: GiReturnArrow,
      text: "Return Policy",
      subtext: "30 days return policy",
    },
    {
      icon: Ri24HoursLine,
      text: "24/7 Support",
      subtext: "24/7 support available for your queries",
    },
  ];

  return (
    <div className="bg-gray-100 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left px-4 py-6 bg-white rounded-lg shadow-sm hover:shadow-md transition"
              >
                <Icon className="text-3xl text-amber-500 mb-2 sm:mb-0" />
                <div className="sm:ml-4 mt-2 sm:mt-0">
                  <div className="text-gray-800 text-base font-semibold mb-1">
                    {feature.text}
                  </div>
                  <div className="text-gray-500 text-sm leading-snug">
                    {feature.subtext}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
