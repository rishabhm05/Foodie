import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    Cart:[],
    isAuthenticated:false
}
const CartSlice = createSlice({
    initialState,
    name:'Cart',
    reducers:{
        "ADD_TO_CART":(state,action)=>{
           return{...state,Cart:[...state.Cart,{...action.payload,qty:1}]}
        },
        "REMOVE_FROM_CART":(state,action)=>{
            return{...state,Cart:state.Cart.filter((item)=>item.id!==action.payload)}
        },
        "Change_ITEM_QTY":(state,action)=>{
            console.log(action.payload)
          return{...state,Cart:state.Cart.map((item)=>item.id===action.payload.id?{...item,qty:action.payload.qty}:item).filter((item)=>item.qty>0)}
        },
        "Change_Authentication":(state,action)=>{
            return{...state,isAuthenticated:action.payload}
        }
    }
})
export const {ADD_TO_CART,REMOVE_FROM_CART,Change_ITEM_QTY,Change_Authentication} = CartSlice.actions;
export default CartSlice.reducer;
