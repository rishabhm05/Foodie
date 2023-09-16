import React from 'react'
import Filters from './Filters'
import Carousel from './Carousel'
import Restaurant from './Restaurant'
import { useState } from 'react'
import { useSelector } from 'react-redux'

const Diningout = () => {
  const {restaurantsdata}=useSelector((state)=>state.restaurantsdata)
  const[filterrestaurantsdata,setfilterrestaurantsdata] = useState(restaurantsdata)
  
  return (
    <div>
         <div className='py-[1rem] max-w-4xl mx-auto'>
     <Filters filterrestaurantsdata={filterrestaurantsdata} setfilterrestaurantsdata={setfilterrestaurantsdata}/>
    
    </div>
    <Carousel/>
    <Restaurant filterrestaurantsdata={filterrestaurantsdata}/>
    </div>
  )
}

export default Diningout