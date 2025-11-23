import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MdLocationPin } from "react-icons/md";
import { FaCartArrowDown, FaBars } from "react-icons/fa6";
import { FaAngleDown } from "react-icons/fa";
import { IoMdCloseCircle } from "react-icons/io";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";
import { useCartContext } from "../context/CartContext";
import { FaRegHeart } from "react-icons/fa";



export default function Navbar({ location, detectLocation }) {
  const {cartItems} = useCartContext();
  const [active, setActive] = useState("Home");
  const [opendrop, setOpendrop] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggledown = () => setOpendrop(!opendrop);
  const closedrop = () => setOpendrop(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);


  

  const navItems = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Products", path: "/products" },
    { label: "Contact", path: "/contact" },
  ];

  return (
    <header className="bg-white/70 backdrop-blur-md w-full shadow-md transition-all duration-300 ease-in-out sticky top-0 z-50">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3 sm:px-6 lg:px-10">
        {/* Logo & Location */}
        <div className="flex items-center gap-4">
          <Link to="/" className="text-amber-500 text-xl sm:text-2xl font-bold">
            GadgetNova
          </Link>

          {/* Location Dropdown */}
          <div
            className="hidden sm:flex items-center gap-2 text-gray-700 text-sm cursor-pointer"
            onClick={toggledown}
            role="button"
          >
            <MdLocationPin className="text-lg" />
            <span>
              {location?.state && location?.city && location?.country
                ? `${location?.state}, ${location?.city}, ${location?.country}`
                : "Add location"}
            </span>
            <FaAngleDown />
          </div>

          {opendrop && (
            <div className="absolute top-16 left-4 sm:left-40 bg-white shadow-xl  rounded-md p-5 z-50 w-[250px]">
              <div className="flex justify-between items-center mb-4 font-semibold">
                <span>Change location</span>
                <button onClick={closedrop}>
                  <IoMdCloseCircle className="text-xl text-gray-500 hover:text-red-500" />
                </button>
              </div>
              <button
                onClick={detectLocation}
                className="bg-red-500 hover:bg-red-400 text-white px-4 py-2 rounded-full w-full transition hover:scale-105"
              >
                Detect location
              </button>
            </div>
          )}
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="sm:hidden text-gray-700 text-xl"
          onClick={toggleMenu}
        >
          <FaBars />
        </button>

        {/* Navigation */}
        <nav
          className={`${
            menuOpen ? "block" : "hidden"
          } sm:flex flex-col sm:flex-row gap-6 items-center sm:items-center sm:none sm:backdrop-blur-none bg-white/80 backdrop-blur-md transition-all duration-300 ease-in-out sm:bg-transparent absolute sm:static top-16 left-16 w-[70%] sm:w-auto px-4 sm:px-0 py-4 sm:py-0`}
        >
          <ul className="flex flex-col sm:flex-row gap-4 sm:gap-6  text-gray-700  font-semibold">
            {navItems.map((item) => (
              <li
                key={item.label}
                onClick={() => {
                  setActive(item.label);
                  setMenuOpen(false);
                }}
                className={`cursor-pointer hover:text-amber-400 ${
                  active === item.label
                    ? "text-amber-400 border-b-2 border-amber-400"
                    : ""
                }`}
              >
                <Link to={item.path}>{item.label}</Link>
              </li>
            ))}
          </ul>

          {/* Cart Icon */}
          <Link to="/cart" className="relative mt-4 sm:mt-0">
            <FaCartArrowDown className="text-lg text-gray-500 hover:text-amber-400" />
            <span className="absolute rounded-full text-gray-900 bg-amber-400 text-xs font-bold px-1.5 py-0.5 -top-3 -right-2">
              {cartItems.length}
            </span>
          </Link>

          <Link to={"/wishList" } className="">
          <FaRegHeart />
          </Link>

          {/* Auth Buttons */}
          <div className="mt-4 sm:mt-0">
            <SignedOut>
              <SignInButton>
                <button className="bg-amber-400 text-gray-900 font-semibold px-4 py-1.5 rounded hover:bg-amber-500 transition">
                  Sign In
                </button>
              </SignInButton>
            </SignedOut>
            <SignedIn>
              <UserButton
                appearance={{
                  elements: {
                    avatarBox: "w-8 h-8",
                  },
                }}
                afterSignOutUrl="/"
              />
            </SignedIn>
          </div>
        </nav>
      </div>
    </header>
  );
}
