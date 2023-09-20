import React from 'react'
import { Carouseldata } from '../Utils/data'
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import {GrFormNext,GrFormPrevious} from 'react-icons/gr'

const Carousel = () => {
 const items = Carouseldata[0].map((items)=>{
    return(
        <div className='mx-4 my-4 flex flex-col items-center gap-2 '>
        <img src={'https://b.zmtcdn.com/data/o2_assets/d0bd7c9405ac87f6aa65e31fe55800941632716575.png'} className=' rounded-full object-cover '/>
        <span>Pizza</span>
        </div>
    )
 })
 const responsive ={
    0:{
      items:3
    },
    512:{
      items:4
    }
  }
 console.log(items)
  return (
    <div className='mt-10 bg-[whitesmoke] w-[100%] '>
        <div className='py-[1rem] md:max-w-4xl md:mx-auto'>
          <p className='text-3xl font-bold mx-4'>Let's Explore Some Food Items.</p>
          <div className='flex flex-row items-center'>
          <AliceCarousel items={items} responsive={responsive} disableDotsControls className='relative' 
         renderPrevButton={({ isDisabled, onClick }) => (
            <button
              className={`custom-arrow custom-left-arrow ${isDisabled ? 'hidden disabled' : ''}`}
              onClick={onClick}
            >
              <GrFormPrevious className='bg-white absolute left-[0%] top-[30%] rounded-full text-black' size={40} />
            </button>
          )}
           renderNextButton={({ isDisabled, onClick }) => (
            <button
              className={`custom-arrow custom-right-arrow ${isDisabled ? 'disabled' : ''}`}
              onClick={onClick}
            >
              <GrFormNext className='bg-white absolute md:left-[96%] left-[90%] top-[30%] rounded-full  text-black'size={40} /> {/* Use the React icon here */}
            </button>
          )}
          
          
          />
        
          </div>
        </div>
        
    </div>
  )
}

export default Carousel