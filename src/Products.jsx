import React, { useEffect } from 'react'
import { getDataFromApi } from './api'
import { useDispatch, useSelector } from 'react-redux'
import { getProductsDispatch } from './features/product/productSlice';
import ProductCard from './ProductCard';

const Products = () => {
    //with redux state
    const dispatch=useDispatch();
    //redux sele
    const products=useSelector((state)=>state.products.products);
   console.log(products)

    const getProducts=async()=>{
        const data=await getDataFromApi("/products")
        dispatch(getProductsDispatch(data))
       console.log(data)
    }

    useEffect(()=>{
        getProducts();
    },[]);

  return (
    <div className=' flex flex-wrap justify-center mt-10 gap-10 container mx-auto'>
       {
        products?.map(product=> (
          <ProductCard key={product.id} product={product}/>
        ))
       }

    </div>
  )
}

export default Products
