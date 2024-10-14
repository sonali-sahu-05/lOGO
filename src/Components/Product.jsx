import React, { Component } from "react";

const Product = ({ product }) => {
  console.log(product);
  const { image, title, price, rating } = product;
  const { rate, count } = rating;

  return (
    <div className="p-5 m-4 border border-black w-[200px] h-[350px] hover:shadow-xl rounded-md shadow-md text-center flex flex-col justify-between           hover:bg-gray-200                        ">
      <img
        className="w-40 h-40 object-contain mx-auto"
        src={image}
        alt={title}
      />
      <h1 className="mt-2 text-sm truncate">{title}</h1>
      <p>
        Ratings: {rate} (based on {count} reviews)
      </p>
      <p>Price: {price}</p>
    </div>
  );
};

export default Product;





// product component new component


 export const HOF = (Product)=>{
return (props) => {
  return (
    <div>
      <span className="  absolute          bg-green-500 text-white px-4 py-1 rounded-md">Best Seller</span>
      <Product  {...props}/>
    </div>
  )
}
}


// const Component=HOF(Product)
// <Component product={product}/>



















