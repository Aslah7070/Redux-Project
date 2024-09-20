import {createSlice} from "@reduxjs/toolkit"
export const cartSlice= createSlice({
          name:"cart",
          initialState:{value:[]},
          reducers:{
            add(state,action){
                state.value.push(action.payload)
            },
            deleteItem(state,action){
               state.value= state.value.filter((val)=>val.id!==action.payload)
            }
          }
})
export const {add,deleteItem}=cartSlice.actions
export default cartSlice.reducer