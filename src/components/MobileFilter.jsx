import { FaFilter } from "react-icons/fa";
import { useData } from "../hooks/useData";

export default function MobileFilter({
  openFilter,
  setOpenFilter,
  search,
  setSearch,
  handleCategoryChange,
  category,
  handleBrandChange,
  brand,
  price,
  setPrice,
  setCategory,
  setBrand,
  
}) {
     const { categoryOnly, brandOnly } = useData();
     const toggleFilter = ()=>{
        setOpenFilter(!openFilter)
     }
  return (
    <>
      <div className="bg-gray-100 p-2 px-4 flex justify-between items-center md:p-3 rounded-md lg:hidden">
        <h1 className="font-semibold text-xl text-gray-800">Filters</h1>
        <FaFilter
          className="text-gray-700"
          onClick={ toggleFilter}
        />
      </div>
      {openFilter ? (
        <div className="bg-gray-100 p-2 px-4 lg:hidden">
          <input
            type="text"
            placeholder="Search products..."
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-amber-400"
            onChange={(e) => {
              setSearch(e.target.value);
            }}
            value={search}
          />
          <div>
            <h2 className="text-lg font-semibold text-gray-800 mb-2">
              Category
            </h2>
            <div className="space-y-2">
              {categoryOnly?.map((item, index) => (
                <label
                  key={index}
                  className="flex items-center gap-2 text-sm text-gray-700"
                >
                  <input
                    type="checkbox"
                    name={item}
                    checked={category === item}
                    value={item}
                    onChange={handleCategoryChange}
                    className="accent-amber-500"
                  />
                  <span className="uppercase">{item}</span>
                </label>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-gray-800 mb-2">Brand</h2>
            <select
              name="brand"
              value={brand}
              onChange={handleBrandChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md bg-white text-sm
        
        "
            >
              {brandOnly?.map((item, index) => (
                <option key={index} value={item}>
                  {item.toUpperCase()}
                </option>
              ))}
            </select>
          </div>
          
           <div>
        <h2 className="text-lg font-semibold text-gray-800 mb-2">
          Price Range
        </h2>
        <label className="text-sm text-gray-600 block mb-1">
          {" "}
          ${price[0]} - $ {price[1]}
        </label>
        <input
          type="range"
          min="0"
          max="5000"
          value={price[1]}
          onChange={(e) => setPrice([price[0], Number(e.target.value)])}
          className="w-full "
        />

        <button
          className="mt-3 w-full px-4 py-2 bg-amber-500 text-white rounded-md hover:bg-amber-600 transition"
          onClick={() => {
            setSearch(""), setCategory("ALL"), setBrand("ALL");
            setPrice([0, 5000]);
          }}
        >
          Reset Filters
        </button>
      </div>

        </div>
      ) : null}
    </>
  );
}
