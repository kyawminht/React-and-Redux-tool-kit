import React from 'react'
import { AiFillHeart } from 'react-icons/ai'
import { RiShoppingCartFill } from 'react-icons/ri'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <div className=' shadow-md p-6 flex justify-between'>
           <Link to='/'>
      <h4 className=' text-xl fw-bold'>MyShop</h4>
      </Link>
     <div className=" flex mx-6">
     <Link to='/cart'>
    <RiShoppingCartFill className=' w-8 h-8 me-2'/>
    </Link>
     <Link to='/favouriate'>
     <AiFillHeart className=' w-8 h-8'/>
     </Link>
     </div>
    </div>
  )
}

export default Nav
