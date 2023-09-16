import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import SingleCartItem from './SingleCartItem'
import OrderSummary from './OrderSummary'
import { Change_Authentication } from '../store/CartSlice'

const CartPage = () => {
    const dispatch = useDispatch()
    const {Cart,isAuthenticated} = useSelector((state)=>state.Cart)
    useEffect(()=>{
     if(Cart.length>0){
        dispatch(Change_Authentication(true))
     }
     else{
        dispatch(Change_Authentication(false))
     }
    },[Cart])
  return (
    <div className='flex flex-col md:flex-row mx-2 pt-[2rem] max-w-4xl md:mx-auto justify-between gap-10'>
    <div className='py-2 flex flex-col w-[100%] '>
        <p className='text-center'>Cart({Cart.length})</p>
    {/* Each Cart item */}
    <div className='flex flex-col gap-10'>
     {Cart.length>0&&Cart.map((cartitem)=>{
        return <SingleCartItem cartitem={cartitem}/>
     })}
    </div>
    {Cart.length===0&&<p className='font-bold text-2xl'>Your Cart is Empty</p>}
    </div>
    {Cart.length>0&&<OrderSummary/>}
    </div>
  )
}

export default CartPage