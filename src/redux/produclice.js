import {createSlice,createAsyncThunk}from "@reduxjs/toolkit";
import axios from 'axios'

const productSlice=createSlice({
    
    name:"product",
    initialState:{
        products:[],
        status:'idle'
    },
   
    extraReducers:(builder)=>{
     builder
     .addCase(getProduct.pending,(state,action)=>{
        state.status="Loading"
     })
     .addCase(getProduct.fulfilled,(state,action)=>{
        state.products=action.payload;
        state.status="idle"
     })
     .addCase(getProduct.rejected,(state,action)=>{
        state.status="failed"
     })
    }
})
export default productSlice.reducer

export const {fetchProducts}=productSlice.actions;
    export const getProduct=createAsyncThunk("products/put",async ()=>{

        const responce= await axios.get("http://fakestoreapi.com/products")
        const result =responce.data;
        return result
    })



// export  const getProduct=()=>{
//     return async function getProductThunk(dispatch,getState){
//         const responce= await axios.get("http://fakestoreapi.com/products")
//         dispatch(fetchProducts(responce.data))
//     }
// }