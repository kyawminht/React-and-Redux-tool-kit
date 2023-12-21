import React, { useEffect, useState } from 'react'

import { useSelector } from 'react-redux'
import AddToCartItems from './AddToCartItems';

const AtToCart = () => {
    const products=useSelector(state=>state.cart.cart);
    const [total,setTotal]=useState(0);
    const calculateTotal=()=>{
      const result=products?.reduce((a,c)=>a + c?.price,0);
      setTotal(result);
    }

    useEffect(()=>{
      calculateTotal();
    },[products])
  return (
    <div className='grid grid-cols-2 gap-4 justify-center container mx-auto mt-5'>

      <div>
      {
        products.map(product=>(
          <AddToCartItems key={product.id} product={product}/>
        ))
      }
      </div>
      <div className="">
        <h2 className="text-2xl">Total price</h2>
        <p className="text-rose-300">$ {total}</p>
      </div>
    
  </div>
  )
}

export default AtToCart
