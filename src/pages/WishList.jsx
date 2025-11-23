import { RiDeleteBinLine } from "react-icons/ri";
import { useWishListContext } from "../context/WishListContext"
import { useCartContext } from "../context/CartContext";
import emptyWishList from '../assets/videos/Empty Wishlist Hint message.mp4'


export default function WishList() {
  const { wishList, removeWishList } = useWishListContext();
  const { addToCart } = useCartContext();

  return (
    <div className="mt-10 max-w-6xl mx-auto mb-5 px-4 sm:px-6 lg:px-8">
      {wishList?.length > 0 ? (
        <div>
          <h1 className="sm:text-2xl text-xl font-bold text-gray-700 mt-4">WishList</h1>
          <div className="mt-6 space-y-4">
            {wishList.map((item) => (
              <div
                key={item.id}
                className="flex flex-col sm:flex-row justify-between p-4 gap-5 items-center bg-gray-100 hover:bg-gray-50 hover:shadow-md rounded-md"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-24 h-24 rounded-md object-contain"
                />
                <div className="w-[80%]">
                  <h1 className="text-sm sm:text-base font-bold text-gray-500  line-clamp-2">
                    {item.title}
                  </h1>
                  <p className="text-sm sm:text-base font-semibold text-red-500">
                    ${item.price}
                  </p>
                </div>
                <div className="flex flex-col gap-5 items-center w-[20%]">
                  <RiDeleteBinLine
                    className="text-red-500 cursor-pointer text-2xl"
                    onClick={() => removeWishList(item.id)}
                  />
                  <button
                    className="px-3 py-1 rounded text-white bg-red-500 hover:bg-red-600 border border-amber-500"
                    onClick={() => addToCart(item)}
                  >
                    Add to cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="flex flex-col justify-center items-center mt-10 px-4 text-center">
          <p className="text-2xl lg:text-4xl font-extrabold text-red-500">
            No favorites yet. Start exploring and save what you love.
          </p>
          <video
            src={emptyWishList}
            autoPlay
            muted
            loop
            playsInline
            typeof="video/mp4"
            className="w-[250px] sm:w-[300px] h-[250px] sm:h-[300px] mt-4"
          />
        </div>
      )}
    </div>
  );
}
