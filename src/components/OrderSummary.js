import React, { useEffect,useState } from 'react'
import { useSelector } from 'react-redux'
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const OrderSummary = () => {
    const key = process.env.REACT_APP_SECRET_KEY
    const value = process.env.REACT_APP_SECRET_VALUE
    console.log(key)
    const{Cart} =useSelector((state)=>state.Cart)
    const[totalprice,settotalprice] =useState(0);
    const location = useLocation();
    
    const calculatetotalprice =()=>{
       let totalprice = Cart.reduce((acc,item)=>{
        acc+=Number(item.qty)*Number(item.price)
        return acc;
       },0)
       settotalprice(totalprice)
    }
    useEffect(()=>{
       calculatetotalprice()
    },[Cart])
  
   const handleOrder =()=>{
    var options = {
        key: "rzp_test_jB11kVgCTmMDag",
        key_secret:"53bIVNmd08TKgtiUXhphWi3i",
        amount: totalprice *100,
        currency:"INR",
        name:"Foodie",
        description:"Food App",
        handler: function(response){
          alert(response.razorpay_payment_id);
        },
        prefill: {
          name:"Rishabh Mehta",
          email:"mehtarishabh60@gmail.com",
          contact:"9588003710"
        },
        notes:{
          address:"Razorpay Corporate office"
        },
        theme: {
          color:"#3399cc"
        }
      };
      var pay = new window.Razorpay(options);
      pay.open();
   }
  return (
    <div className='bg-[whitesmoke] w-[100%] rounded-lg px-2 py-4 '>
        <p className='font-bold text-center py-2'>OrderSummary</p>
        <hr className='border-1 border-[green]'></hr>
        <div className='flex flex-col gap-10 py-2'>
        {Cart.map((item)=>{
           return( <div className='flex justify-between'>
            <span className='font-bold'>{item?.title}(1)</span>
             <span>₹{item?.price}</span>
            </div>
           )
        })}
        </div>
        <hr className='border-1 border-[green]'></hr>
        <div className='my-2 flex flex-col'>
            <p className='font-bold text-center'>Total Price</p>
            <div className='flex justify-between'>
             <p className='font-bold'>Total Price</p>
             <p>₹{totalprice}</p>
            
            </div>
            <Link to="/checkoutpage">
            <div className='flex items-center'>
                {location.pathname==="/checkoutpage"?( <Button onClick={handleOrder} sx={{marginTop:'4rem', marginX:'auto'}} variant="contained">PlaceOrder</Button>):(<Button sx={{marginTop:'4rem', marginX:'auto'}} variant="contained">Checkout</Button>)}
                
           </div>
           </Link>

        </div>
    </div>
  )
}

export default OrderSummary