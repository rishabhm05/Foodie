import React from 'react'

import { useSelector} from 'react-redux'
import CardComponent from './CardComponent';

const Restaurant = ({filterrestaurantsdata}) => {
//const{restaurantsdata } =useSelector((store)=>store.restaurantsdata)
const {byRating,SelectCuisine,pureveg,costs} =useSelector((state)=>state.Filters)
 const transformrestaurant =()=>{
  let restaurant=filterrestaurantsdata;
  if(byRating){
    restaurant = restaurant.filter((res)=>res.avgRating>byRating)
  }
  if(SelectCuisine.length>0){

    restaurant = restaurant.filter((res)=>res.cuisines.includes(...SelectCuisine))
  }
  if(pureveg){
    restaurant = restaurant.filter((res)=>res.type==="Veg")
  }
  if(costs!==200){
    
    restaurant =restaurant.filter((res)=>Number(res.costForTwo.split(" ")[0].substring(1))<=costs)
  }
  return restaurant;
 }

  return (
    <div className='py-[2rem] max-w-4xl mx-auto flex flex-col  '>
      <p className='text-3xl font-bold mx-4 my-4'>Best Food in Delhi</p>
      <div className='grid md:grid-cols-3 grid-cols-2 gap-2'>
        {transformrestaurant().length>0&&transformrestaurant().map((restaurant)=>{
          return <CardComponent restaurant={restaurant} key={restaurant.id}/>
        })}
    
      </div>
     
     </div>
  )
}

export default Restaurant