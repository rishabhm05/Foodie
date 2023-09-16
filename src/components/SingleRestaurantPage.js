import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getsinglerestaurantdetails } from '../store/SingleRestaurantSlice'
import { useParams } from 'react-router-dom'
import { restaurantdata } from '../Utils/data'
import SingleItem from './SingleItem'
import Skeleton from '@mui/material/Skeleton';
const SingleRestaurantPage = () => {
    const {id} = useParams();
    const [searchquery,setsearchquery] =useState("");
    //const[noresult,setnoresult] =useState(false);
    const {isloading} =useSelector((state)=>state.singlerestaurant)
 
   console.log(searchquery)
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(getsinglerestaurantdetails())
    },[])
    const {singlerestaurantdata} =useSelector((state)=>state.singlerestaurant)
    
   const restaurantdetail = restaurantdata.find((res)=>res.id===id)
   const filteredproducts = ()=>{
        let filteredrestaurantdata = singlerestaurantdata.filter((items)=>items?.title.toLowerCase().includes(searchquery.toLowerCase()))
        return filteredrestaurantdata;
   }
  return (
   <>
   {isloading?(
    <div className='py-[100px] md:max-w-4xl md:mx-auto mx-2'>
     <div className=''>
<div className='w-[100%] object-fit  rounded cursor-pointer transform transition-transform hover:scale-90  m-0.5'>
<Skeleton variant="rectangular" sx={{width:'100%'}} />
</div>
</div>
<div className='my-2'>
    <div className='flex flex-col'>
    <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
    <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
    <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
    </div>
</div>
    </div>
   ):(
    <div className='py-[100px] md:max-w-4xl md:mx-auto mx-2'>
    {/* Main Image */}
    <div className=''>
<div className='w-[100%] object-fit  rounded cursor-pointer transform transition-transform hover:scale-90  m-0.5'>
<img alt="pizza" className='rounded w-[100%]' src="https://plus.unsplash.com/premium_photo-1680303989900-b4b002b520c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"/>
</div>
</div>
<div className='my-2'>
    <div className='flex flex-col'>
    <p className='font-bold text-2xl'>{restaurantdetail?.name}</p>
    <span className=' font-bold text-[grey] text-xl'>{restaurantdetail?.areaName}</span>
    <span className='text-[grey] '>Open Now </span>
    </div>
</div>
{/* Menu Items */}
<div>
    <div className='flex items-end justify-between'>
<p className='font-bold text-[red]'>Menu Items</p>
<input type="search" className='border-[grey] border-2 outline-none rounded px-4 py-2 ' value={searchquery} onChange={(e)=>setsearchquery(e.target.value)} placeholder='Search'/>
</div>
<hr></hr>

<div className='flex flex-col gap-10'>
{isloading ?(
 <div className='flex mt-2 gap-3'>
 <Skeleton variant="rectangular" width={200} height={200} />
  <div className='flex flex-col'>
  <Skeleton variant="text" sx={{ fontSize: '2rem' }} />
      <div>
      <Skeleton variant="rectangular" width={80} height={80} />
      </div>
      

  </div>
  </div>
 ):
filteredproducts().length === 0 ? ( // Check if there are no search results
      <p className='text-[red] font-bold'>No results found.</p>
    ) : (
      filteredproducts().map((fooditem) => {
        return (
          <SingleItem
            fooditem={fooditem}
            searchquery={searchquery}
            setsearchquery={setsearchquery}
          />
        );
      })
    )


    }
{/* {singlerestaurantdata&&filteredproducts().length<=0&&<p className='text-[red] font-bold '>Sorry! Could not find the search results.</p>} */}
</div>
</div>     
    </div>
    )}
    </>
  )
 
}

export default SingleRestaurantPage