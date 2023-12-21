import React from 'react'
import{RiShoppingCartFill} from 'react-icons/ri';
import{AiFillHeart} from 'react-icons/ai';
import { useDispatch } from 'react-redux';
import { addToFavouriate } from './features/product/productSlice';
import { addToCart } from './features/cartSlice';
const ProductCard = ({product}) => {

    const dispatch=useDispatch();

  return (
    <div className=' h-96 w-72 shadow-lg rounded-md hover:scale-105 duration-200'>
      <img src={product.image} alt="image" className=' w-44 h-40 mx-auto' />
      <div className=" h-10 text-center font-bold">
        <p className=' text-md'>{product.title}</p>
      </div>
      <p className=' mt-16'>${product.price}</p>
      <button onClick={()=>dispatch(addToCart(product))} className=" hover:scale-110 duration-150">
        <RiShoppingCartFill className=' w-8 h-8'/>
      </button>
      <button onClick={()=>dispatch(addToFavouriate(product))} className=" hover:scale-110 duration-150">
        <AiFillHeart className=' w-8 h-8'/>
      </button>
    </div>
  )
}

export default ProductCard
