import React, { useEffect, useState } from "react";
import Product, { HOF } from "./Product";
import Skeleton from "./Skleton";
import { Link } from "react-router-dom";

const ProductCart = () => {
  const [listOfProduct, setListOfProduct] = useState([]);
  const [filterproduct, setFilterProduct] = useState([]); // Store filtered products
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchdata();
  }, []);

  const fetchdata = async () => {
    const data = await fetch("https://fakestoreapi.com/products");
    const response = await data.json();
    setListOfProduct(response);
    setFilterProduct(response); // Initially, show all products
  };

  const filterTopRated = () => {
    const filteredProducts = listOfProduct.filter(
      (product) => product.rating.rate >= 4
    );
    setFilterProduct(filteredProducts); // Update filtered products list
  };

  const handleSearch = () => {
    const filteredData = listOfProduct.filter((product) =>
      product.title.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilterProduct(filteredData);
  };

  // calling of the hof higher order component for best seller
  const HOFComponent = HOF(Product);

  return listOfProduct.length === 0 ? (
    <Skeleton />
  ) : (
    <>
      {/* Search Input */}
      <div className="mt-2 m-3 p-2">
        <input
          className="border border-black p-2"
          type="text"
          onChange={(e) => setSearchText(e.target.value)}
          value={searchText}
        />
        <button
          onClick={handleSearch}
          className="ml-3 bg-slate-400 p-2 rounded"
        >
          Search
        </button>
      </div>

      {/* Filter Button */}
      <div className="mt-3 m-2">
        <button
          onClick={filterTopRated}
          className="bg-purple-600 rounded p-2 text-white"
        >
          Top Rated Products
        </button>
      </div>

      {/* Products Display */}
      <div className="mt-5 flex flex-wrap">
        {filterproduct.map((product) => {
          return (
            <Link key={product.id} to={`/product/${product.id}`}>
              {product.rating.rate >= 4 ? (
                <HOFComponent product={product} />
              ) : (
                <Product product={product} />
              )}
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default ProductCart;
