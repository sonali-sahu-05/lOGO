import React from "react";
import Navbar from "./Components/Navbar";
import ProductCart from "./Components/ProductCart";
import Men from "./Components/Men"; // Import the Men component
import { Routes, Route } from "react-router-dom"; // Imported Route from 'react-router-dom'
import ErrorPage from "./Components/ErrorPage"; // Import the ErrorPage component
import ProductDetails from "./Components/ProductDetails";

export const App = () => {
  return (
    <>
      {/* Navbar will always show */}
      <Navbar />
      <hr className="text-black border-b-2" />

      <Routes>
        {/* Route for the home page */}
        <Route path="/" element={<ProductCart />} />{" "}
        {/* ProductCart will show at "/" */}
        {/* Route for Men component */}
        <Route path="/men" element={<Men />} />{" "}
        {/* Men component will show at "/amen" */}
        <Route path="/product/:productid" element={<ProductDetails />}></Route>
        {/* Route for handling all undefined paths */}
        <Route path="*" element={<ErrorPage />} />{" "}
        {/* ErrorPage will show for all other paths */}
      </Routes>
    </>
  );
};
