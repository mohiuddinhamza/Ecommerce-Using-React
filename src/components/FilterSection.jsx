import React from 'react';
import { useData } from '../hooks/useData';

export default function FilterSection({
  setPrice,
  price,
  brand,
  setBrand,
  category,
  setCategory,
  search,
  setSearch,
  handleCategoryChange,
  handleBrandChange,
}) {
  const { categoryOnly, brandOnly } = useData();

  return (
    <aside className="w-full max-w-xs bg-white shadow-md rounded-lg p-6 space-y-6 hidden lg:block">
      <input
        type="text"
        placeholder="Search products..."
        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-400"
        onChange={(e) => {
          setSearch(e.target.value);
        }}
        value={search}
      />

      <div>
        <h2 className="text-lg font-semibold text-gray-800 mb-2">Category</h2>
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
    </aside>
  );
}
