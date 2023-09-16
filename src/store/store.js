import { configureStore } from "@reduxjs/toolkit";

import restaurantsdata from "./RestaurantSlice";
import SingleRestaurantSlice from "./SingleRestaurantSlice";
import CartSlice from "./CartSlice";
import FiltersSlice from "./FiltersSlice";
const Store = configureStore({
    reducer:{
         'restaurantsdata' :restaurantsdata,
         'singlerestaurant'   :SingleRestaurantSlice,
         'Cart':CartSlice,
         'Filters':FiltersSlice
    }
})
export default Store;