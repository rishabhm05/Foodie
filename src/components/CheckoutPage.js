import React from 'react'
import OrderSummary from './OrderSummary'
import { useSelector } from 'react-redux'
const CheckoutPage = () => {
    const {Cart} = useSelector((state)=>state.Cart)
  return (
    <div className='pt-[2rem] max-w-4xl mx-auto '>
        <p className='font-bold text-center text-3xl'>Checkout</p>
        {/* Dummy Address */}
        <div className='flex flex-col md:flex-row mx-2 gap-10 my-4 '>
        <div className='flex flex-col bg-[#AED2FF] font-bold  py-2 px-2 rounded my-10 md:w-[50%] max-h-[200px] justify-between'>
            <div className='flex justify-between'>
            <span>Rishabh Mehta</span>
            <input type='checkbox' checked={true}></input>
            </div>
             <div>
                <p>G-260/5 Vaibhav Nagar,Bhilwara</p>
              
             </div>
             <div>
             <span>9588003710</span>
             </div>
        </div>
        <div className='basis-[50%]'>
        {Cart.length>0&&<OrderSummary/>}
        </div>
        </div>
    </div>
  )
}

export default CheckoutPage