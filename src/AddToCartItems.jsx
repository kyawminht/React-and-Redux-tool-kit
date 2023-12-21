import React from 'react'
import { AiFillDelete } from 'react-icons/ai'
import { useDispatch } from 'react-redux'
import { removeFromCart } from './features/cartSlice';

const AddToCartItems = ({product}) => {
    const dispatch=useDispatch();
  return (
    <div className=' flex shadow-md border border-collapse rounded-md justify-between items-center mx-auto container mb-3'>
    
        <img src={product.image} alt="" className='w-20 border-separate p-3' />
    <div className="text-start">
      <p className=' text-xl fw-bold'>{product.title}</p>
      <p>{product.price}</p>
      <p>{product.description}</p>
    </div>
    <button onClick={()=>dispatch(removeFromCart(product))} >
      <AiFillDelete className='w-10 h-10 hover:scale-105 duration-150' />
    </button>
    

  </div>
  )
}

export default AddToCartItems
