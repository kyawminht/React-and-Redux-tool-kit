import { configureStore } from '@reduxjs/toolkit'
import productSlice from './features/product/productSlice'
import cartSlice from './features/cartSlice'
export const store =configureStore({
    reducer:{
        products:productSlice,
        cart:cartSlice,
    }
})