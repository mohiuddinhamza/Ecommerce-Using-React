import { useCartContext } from "../context/CartContext";
import { FaTrashAlt } from "react-icons/fa";
import EmptyCart from "../assets/videos/EmptyCart.mp4";
import DeliveryInfo from "../components/DeliveryInfo";
import BillDetail from "../components/BillDetail";
import { useNavigate } from "react-router-dom";
import { FaStore } from "react-icons/fa";

export default function Cart() {
  const { cartItems, updateQuantity, removeFromCart } = useCartContext();
  const navigate = useNavigate();

  return (
    <div className="mt-10 max-w-6xl mx-auto mb-5 px-4 sm:px-6 lg:px-8">
      {cartItems?.length > 0 ? (
        <div>
          <h1 className="text-lg sm:text-xl font-bold text-gray-700">
            My Cart ({cartItems.length})
          </h1>
          <div className="mt-6 space-y-4">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex flex-col sm:flex-row justify-between gap-4 items-center p-4 bg-gray-100 rounded-md"
              >
                <div className="flex items-center gap-4 w-full sm:w-auto">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-24 h-24 rounded-md object-contain"
                  />
                  <div>
                    <h1 className="text-sm sm:text-base w-full sm:w-[300px] line-clamp-2">
                      {item.title}
                    </h1>
                    <p className="text-red-500 text-base sm:text-lg font-semibold">
                      ${item.price}
                    </p>
                  </div>
                </div>

                <div className="bg-red-500 text-white flex items-center gap-4 px-4 py-2 rounded-md font-bold text-base sm:text-xl">
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                  >
                    -
                  </button>
                  <span>{item.quantity}</span>
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  >
                    +
                  </button>
                </div>

                <span
                  className="hover:shadow-2xl cursor-pointer"
                  onClick={() => removeFromCart(item.id)}
                >
                  <FaTrashAlt className="text-xl sm:text-2xl text-red-500 hover:text-red-600" />
                </span>
              </div>
            ))}

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-20 mt-10">
              <DeliveryInfo />
              <BillDetail />
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flex-col gap-4 justify-center items-center text-center px-4">
          <p className="text-xl sm:text-2xl md:text-3xl font-extrabold text-red-500 p-4">
            Oops! Nothing here. Your cart’s waiting for something cool.
          </p>
          <video
            src={EmptyCart}
            typeof="video/mp4"
            className="w-[250px] sm:w-[300px] h-[250px] sm:h-[300px] mt-4"
            autoPlay
            loop
            playsInline
          ></video>
          <button
            className="flex justify-center items-center bg-red-500 hover:bg-red-600 px-5 py-2 rounded-md text-white hover:shadow-md gap-2 transition-all duration-300 text-sm sm:text-base"
            onClick={() => navigate("/products")}
          >
            <FaStore /> <span>Back to Store</span>
          </button>
        </div>
      )}
    </div>
  );
}
