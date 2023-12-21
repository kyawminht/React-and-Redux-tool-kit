import React from 'react'
import { AiFillDelete } from 'react-icons/ai'
import { useDispatch } from 'react-redux'
import { deleteFavItems } from './features/product/productSlice';

const FavouriateItems = ({p}) => {
    const removeFavDispatch=useDispatch();
  return (
    <div className=' flex shadow-md border border-collapse rounded-md justify-between items-center mx-auto container mb-3'>
      <img src={p.image} alt="" className=' w-20 border-separate p-3' />
        <div className=" text-start">
            <p>{p.title}</p>
            <p>{p.price}</p>
            <p>{p.description}</p>
        </div>

        <div className="">
          <button onClick={()=>removeFavDispatch(deleteFavItems(p))} >  <AiFillDelete  className=' w-10 h-10 hover:scale-105 duration-150'/></button>
        </div>
    </div>
  )
}

export default FavouriateItems
