import React from "react";

const Product = ({ product }) => {
    console.log(product);
    const { image, title, price, rating } = product;
    
    // Destructure 'rate' and 'count' from the 'rating' object
    const { rate, count } = rating;

    return (
        <>
            <div className="p-5 m-4 border border-black w-[200px] hover:shadow-xl      rounded-md           shadow-md text-center">
                <img className="w-40" src={image} alt={title} />
                <h1 className="mt-2">{title}</h1>
                {/* Use rate and count properly */}
                <p>Ratings: {rate} (based on {count} reviews)</p>
                <p>Price: {price}</p>
            </div>
        </>
    );
};

export default Product;
