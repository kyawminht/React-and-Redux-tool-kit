import React from 'react'
import { useSelector } from 'react-redux'
import FavouriateItems from './FavouriateItems';

const Favouriate = () => {
    const Favproducts=useSelector((state)=>state.products.fav);
  return (
    <div className=' mt-7 '>
      {
        Favproducts?.map(p=>(
            <FavouriateItems key={p.id} p={p}/>
        ))
      }
    </div>
  )
}

export default Favouriate
