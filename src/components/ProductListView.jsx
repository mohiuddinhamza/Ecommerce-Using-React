import { useNavigate } from "react-router-dom";
import { useCartContext } from "../context/CartContext";

export default function ProductListView({ item }) {
  const navigate = useNavigate();
  const { addToCart } = useCartContext();

  return (
    <div className="mt-4 rounded-md px-4">
      <div className="bg-gray-100 flex flex-col md:flex-row gap-6 md:gap-10 items-center md:items-start rounded-md p-4">
        <img
          src={item.image}
          alt={item.title}
          className="w-full sm:w-72 md:w-60 h-auto object-contain cursor-pointer rounded-md"
          onClick={() => navigate(`/product/${item.id}`)}
        />
        <div className="space-y-3 w-full">
          <h1 className="font-bold text-base sm:text-lg text-gray-700 line-clamp-2">
            {item.title}
          </h1>
          <p className="font-semibold text-gray-700 text-sm sm:text-base flex flex-wrap items-center gap-2">
            <span className="text-red-500 text-2xl sm:text-3xl">${item.price}</span>
            <span className="text-xs sm:text-sm">({item.discount}% off)</span>
          </p>
          <p className="text-gray-500 text-xs sm:text-sm leading-relaxed">
            Free delivery <b>Fri, 18 April</b> <br />
            Fastest delivery <b>Tomorrow, 19 April</b>
          </p>
          <button
            className="bg-red-500 hover:bg-red-600 text-white px-5 py-2 rounded-md w-full sm:w-auto"
            onClick={() => addToCart(item)}
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}
