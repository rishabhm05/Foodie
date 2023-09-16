import React from 'react'
import { Button } from '@material-tailwind/react'


import { useDispatch, useSelector } from 'react-redux';
import { ADD_TO_CART, REMOVE_FROM_CART } from '../store/CartSlice';
const SingleItem = ({fooditem,searchquery,setsearchquery}) => {
    const dispatch =useDispatch();
    const {isloading} =useSelector((state)=>state.singlerestaurant)
    const {Cart} = useSelector((state)=>state.Cart)
const handleaddtocart =(item)=>{
    console.log(item)
let price =Math.floor(Math.random() * (1000 - 100 + 1)) + 100;
let newitemwithprice ={...item,price:price}
dispatch(ADD_TO_CART(newitemwithprice))
}
const handleremovefromcart =(id) =>{
    dispatch(REMOVE_FROM_CART(id))
}
  return (
    <>
  
    
        <div className='flex mt-2 gap-3'>
        <img src={fooditem?.image} alt="fooditem" width="200px" height="200px" className=' rounded'/>
        <div className='flex flex-col'>
            <span>{fooditem?.title}</span>
            
            <div>
          { Cart.some((item)=>item.id===fooditem.id)? (<Button onClick={()=>handleremovefromcart(fooditem.id)}  className='bg-[#e75480] text-white px-4 py-2 my-2' variant="filled">Remove from Cart</Button>):(<Button  onClick={()=>handleaddtocart(fooditem)} className='bg-[#e75480] text-white px-4 py-2 my-2' variant="filled">Add to Cart</Button>)}
            </div>
            

        </div>
       
    </div>
   

    
  
  
  </>
  )
}

export default SingleItem