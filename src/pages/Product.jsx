import React, { useEffect, useState } from "react";
import { useData } from "../hooks/useData";
import FilterSection from "../components/FilterSection";
import ProductCard from "../components/ProductCard";
import Pagenation from "../components/Pagenation";
import Lottie from "lottie-react";
import notFound from "../assets/notFound.json";
import Loading from "../assets/Loading.json";
import MobileFilter from "../components/MobileFilter";

export default function Product() {
  const { data, allFatch } = useData();
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("ALL");
  const [brand, setBrand] = useState("ALL");
  const [price, setPrice] = useState([0, 5000]);
  const [page, setPage] = useState(1);
  const [openFilter, setOpenFilter] = useState(false);

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
    setPage(1);
    setOpenFilter(!openFilter)
  };

  const handleBrandChange = (e) => {
    setBrand(e.target.value);
    setPage(1);
    setOpenFilter(!openFilter)
  };

  const handlePage = (selectedPage) => {
    setPage(selectedPage);
    window.scrollTo({top: 0, behavior : 'smooth'})
  }

  const Filtered = data?.filter(
    (item) =>
      item.title.toLowerCase().includes(search.toLowerCase()) &&
      (category === "ALL" || item.category === category) &&
      (brand === "ALL" || item.brand === brand) &&
      item.price >= price[0] &&
      item.price <= price[1]
  );

  const dynamicPage = Math.ceil(Filtered?.length / 8);

  useEffect(() => {
    allFatch();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 min-h-screen">
      <MobileFilter
        openFilter={openFilter}
        setOpenFilter={setOpenFilter}
        search={search}
        setSearch={setSearch}
        category={category}
        setCategory={setCategory}
        brand={brand}
        setBrand={setBrand}
        price={price}
        setPrice={setPrice}
        handleCategoryChange={handleCategoryChange}
        handleBrandChange={handleBrandChange}
      />
      {data?.length > 0 ? (
        <div className="flex flex-col lg:flex-row gap-10">
          {/* Filter Sidebar */}
          <aside className="lg:w-1/4 w-full">
            <FilterSection
              search={search}
              setSearch={setSearch}
              category={category}
              setCategory={setCategory}
              brand={brand}
              setBrand={setBrand}
              price={price}
              setPrice={setPrice}
              handleCategoryChange={handleCategoryChange}
              handleBrandChange={handleBrandChange}
            />
          </aside>

          {/* Product Grid */}
          <section className="flex-1">
            {Filtered?.length > 0 ? (
              <>
                <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
                  {Filtered.slice(page * 8 - 8, page * 8).map(
                    (product, index) => (
                      <ProductCard key={index} product={product} />
                    )
                  )}
                </div>

                <div className="w-full flex justify-center mt-8">
                  <Pagenation
                    handlePage={handlePage}
                    page={page}
                    dynamicPage={dynamicPage}
                  />
                </div>
              </>
            ) : (
              <div className="flex justify-center items-center w-full mt-10">
                <Lottie
                  animationData={notFound}
                  className="w-[250px] sm:w-[350px] md:w-[450px] lg:w-[500px]"
                />
              </div>
            )}
          </section>
        </div>
      ) : (
        <div className="flex justify-center items-center w-full mt-20">
          <Lottie
            animationData={Loading}
            className="w-[250px] sm:w-[350px] md:w-[450px] lg:w-[500px]"
          />
        </div>
      )}
    </main>
  );
}
