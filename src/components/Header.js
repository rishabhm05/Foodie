import React from 'react'
import { Button } from "@material-tailwind/react";
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';

import {AiOutlineShoppingCart} from 'react-icons/ai'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
const Header = () => {
  const{Cart} =useSelector((state)=>state.Cart)
  return (
    //Desktop Header
    <header>
        <nav className='flex my-4  items-center w-[100%] mx-2 md:max-w-[80%]  md:mx-[auto] '>
          <div className='App-logo md:basis-[70%]'>
          <Link to="/"> <h3 className='text-4xl font-bold md:mx-10  italic cursor-pointer'>Foodie</h3></Link>
          </div>
          {/* Search Bar */}
        
    <div className="md:basis-[30%] ml-[8rem]   flex items-center ">
     
     
      <Button className='md:basis-[20%] '  variant="text">Log in</Button>
      <Link to="/cart"><IconButton aria-label="cart">
      <Badge badgeContent={Cart.length} color="success">
        <AiOutlineShoppingCart/>
      </Badge>
    </IconButton>
    </Link>
      <Button className='md:basis-[20%]' variant='text'>Sign up</Button>
      
    </div>

    

         
        </nav>
    </header>
  )
}

export default Header