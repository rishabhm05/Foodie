import { createSlice } from "@reduxjs/toolkit";
import { restaurantdata } from "../Utils/data";
const initialState ={
    "restaurantsdata" : restaurantdata
}
const restaurantSlice = createSlice({
    name:"restaurantsdata",
    initialState,
    reducers:{

    }
})
export default restaurantSlice.reducer;