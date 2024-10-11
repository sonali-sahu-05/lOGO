import React from 'react'
import Product from './Product'
import { ProductData } from '../Utils/ProductData'
const ProductCart = () => {
  return (
  <>
  
  
  <div className="mt-5  flex  flex-wrap   ">
   {/* <Product product={ProductData[0]}/> */}

  {ProductData.map((product)=>{
return (
    <Product key={product.id}  product={product}     />
)
  })}
   
  </div>
  
  
  
  
  
  
  </>
  )
}

export default ProductCart