import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    byRating:0,
    totalfilters:0,
    SelectCuisine:[],
    pureveg:false,
    costs:200
}
const FiltersSlice = createSlice({
     name:'Filters',
     initialState,
     reducers:{
     "APPLY_RATING":(state,action)=>{
        return{...state,byRating:action.payload}
     },
     "REMOVE_RATING":(state,action)=>{
        return {...state,byRating:action.payload}
     },
     "APPLY_CUISINE_FILTER" :(state,action)=>{
        return {...state,SelectCuisine:[...action.payload]}
     },
     "APPLY_PURE_VEG":(state,action)=>{
        return{...state,pureveg:action.payload}
     },
     "Apply_Cost_FILTER":(state,action)=>{
        return{...state,costs:action.payload}
     },
     "Calulate_NO_FILTERS":(state,action)=>{
        return{...state,totalfilters:action.payload}
     } 
     
    }
})
export const {APPLY_RATING,REMOVE_RATING,APPLY_CUISINE_FILTER,APPLY_PURE_VEG,Apply_Cost_FILTER,Calulate_NO_FILTERS} =FiltersSlice.actions;
export default FiltersSlice.reducer;