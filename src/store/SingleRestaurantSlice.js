import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { SINGLE_RESTAURANT_API } from "../Utils/apiurls";
import axios from 'axios';
const initialState ={
    "singlerestaurantdata" :[],
     "isloading":true
}
const fetchsinglerestaurantdetails = async ()=>{
let url = SINGLE_RESTAURANT_API;
const headers ={
    'X-RapidAPI-Key': 'c79dd88a1cmshfdc3344de1c9a8fp10c842jsn5b878822dc67',
    'X-RapidAPI-Host': 'the-mexican-food-db.p.rapidapi.com'
}
const config ={
    headers:headers
};
try{
let res =await axios.get(url,config)
return res.data
}
catch(err){
    console.log(err)
}
}
export const getsinglerestaurantdetails = createAsyncThunk('fetchsingleresdata',fetchsinglerestaurantdetails)
const SingleRestaurantSlice = createSlice({
    name:'singlerestaurantdata',
    initialState,
reducers:{

},
extraReducers(builder){
    builder.addCase(getsinglerestaurantdetails.pending,(state,action)=>{
           return {...state,isloading:true}

    })
    builder.addCase(getsinglerestaurantdetails.fulfilled,(state,action)=>{
      return  {...state,singlerestaurantdata:[...action.payload],isloading:false}
    })
    builder.addCase(getsinglerestaurantdetails.rejected,(state,action)=>{
        return {...state,isloading:true}
    })
}
})
export default SingleRestaurantSlice.reducer;