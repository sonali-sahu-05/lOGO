import  { useState } from 'react'
import { useEffect } from 'react';
import Skeleton from './Skleton';

import { useParams } from 'react-router-dom';


const ProductDetails = () => {
  const [singleProduct, setSingleProduct] = useState(null);
  const { productid } = useParams();

  useEffect(() => {
    fetchdata();
  }, [productid]); // Add productid as a dependency to refetch on id change

  const fetchdata = async () => {
    try {
      const response = await fetch(`https://fakestoreapi.com/products/${productid}`);
      const data = await response.json();
      
      setSingleProduct(data); // Update state with the fetched product
    } catch (error) {
      console.error('Error fetching product:', error); // Handle errors gracefully
    }
  };

  if (singleProduct === null) {
    return <Skeleton />; // Show loading state while fetching data
  }

  const { image, title, description, price } = singleProduct;

  return (
   <div className="max-w-sm mx-auto p-6 m-4 border border-black hover:shadow-xl rounded-md shadow-md text-center bg-white mt-10">
      <img className="w-48 h-48 object-cover mx-auto" src={image} alt={title} />
      <h1 className="mt-4 text-lg font-semibold">{title}</h1>
      <p className="mt-2 text-gray-700">Price: ${price}</p>
      <p className="mt-2 text-gray-500 text-sm">{description}</p>
    </div>
    
  );
};

export default ProductDetails;
