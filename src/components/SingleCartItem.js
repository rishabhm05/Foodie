import React from 'react'
import { useDispatch } from 'react-redux'
import { Change_ITEM_QTY } from '../store/CartSlice';

const SingleCartItem = ({cartitem}) => {
    const dispatch =useDispatch();
  return (
    <div className='flex  gap-2 '>
      <div>
       
        <img src={cartitem?.image} alt={cartitem?.title} className='w-[150px] h-[150px]' />
      </div>
      <div>
        <p>{cartitem?.title}</p>
        <p>₹{cartitem?.price*cartitem.qty}</p>
        <div className='flex justify-between items-center '>
         <p className='cursor-pointer'onClick={()=>dispatch(Change_ITEM_QTY({"id":cartitem.id,"qty":cartitem.qty-1}))}>➖</p>
        <p className='border-2  px-2 py-2'>{cartitem?.qty}</p>
        <p className='cursor-pointer' onClick={()=>dispatch(Change_ITEM_QTY({"id":cartitem.id,"qty":cartitem.qty+1}))}>➕</p>
        </div>
      </div>
      <div>
       
      </div>
    </div>
  )
}

export default SingleCartItem