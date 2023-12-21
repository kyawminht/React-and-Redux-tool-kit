import { createSlice } from "@reduxjs/toolkit";


export const productSlice=createSlice({
    name:'products',
    initialState:{
        products:[],
        fav:[],
    },

    reducers:{
        getProductsDispatch:(state,action)=>{
            state.products=action.payload
        },

        addToFavouriate:(state,action)=>{
            state.fav.push(action.payload);
        },

        deleteFavItems:(state,action)=>{
            state.fav = state.fav.filter(item => item.id !== action.payload.id);
        },

    }
})
export const {getProductsDispatch,addToFavouriate,deleteFavItems}=productSlice.actions;
export default productSlice.reducer;