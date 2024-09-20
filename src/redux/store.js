import {configureStore} from "@reduxjs/toolkit";
import cartReducer from "./cartSlice"
import  productReducer  from "./produclice";

 export default configureStore({
    reducer:{
        cart:cartReducer,
        prod:productReducer,
    }
})