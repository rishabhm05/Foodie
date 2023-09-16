import React from 'react'
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
  } from "@material-tailwind/react";
  import { IconButton } from "@material-tailwind/react";
import { Link } from 'react-router-dom';
const CardComponent = ({restaurant}) => {
  return (
    <div className=''>
        <Link to={`/restaurant/${restaurant.id}`}><Card className="bg-[whitesmoke] rounded-lg px-0  flex flex-col justify-start min-h-[300px] cursor-pointer">
      <CardHeader color="blue-gray" className="w-[100%]  mx-0 ">
        <img className='max-h-[150px] w-[100%] object-cover rounded-lg'
          src="https://b.zmtcdn.com/data/pictures/3/20441273/137117bdc4b84fc68de5aa4b97b8497d_o2_featured_v2.jpg?output-format=webp"
          alt="card-image"
        />
      </CardHeader>
      <CardBody>
        <div className='flex justify-between mx-2 my-2'>
        <Typography variant="h5" color="blue-gray" className="mb-2">
         {restaurant.name}
        </Typography>
        <Typography variant="h5" color="blue-gray" className="mb-2">
        <button className='bg-[green] px-2 rounded '>{restaurant?.avgRating}⭐ </button>
        
                </Typography>
        </div>
      </CardBody>
      <CardFooter className="pt-0 mx-2 flex justify-between">
      <Typography variant="h5"  className="mb-2 text-[grey]">
         {restaurant?.areaName},{restaurant?.locality}

        </Typography>
        <Typography variant="h5"  className="mb-2 text-[black]">
        {restaurant?.costForTwo.split(" ")[0]} 

        </Typography>
      </CardFooter>
      </Card>
      </Link>
    </div>
  )
}

export default CardComponent