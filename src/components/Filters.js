import React, { useEffect,useRef } from 'react'
import { Button } from "@material-tailwind/react";
import {LiaFilterSolid} from 'react-icons/lia'
import Slider from '@mui/material/Slider';
import { useState } from 'react';
import Typography from '@mui/material/Typography';
import { useDispatch, useSelector } from 'react-redux';
import {RxCross2} from 'react-icons/rx'
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import ListItemText from '@mui/material/ListItemText';
import Select from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';
import { APPLY_CUISINE_FILTER, APPLY_PURE_VEG, APPLY_RATING, Apply_Cost_FILTER, Calulate_NO_FILTERS, REMOVE_RATING } from '../store/FiltersSlice';
import { Cuisines } from '../Utils/data';
const Filters = ({filterrestaurantsdata,setfilterrestaurantsdata}) => {
 
  const [isSticky, setIsSticky] = useState(false);
  const componentRef = useRef();

  const handleScroll = () => {
    const component = componentRef.current;
    const rect = component.getBoundingClientRect();
    const scrollTop = window.scrollY;

    setIsSticky(scrollTop > rect.top);
  };

  useEffect(() => {
    const component = componentRef.current;
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  

  const componentStyle = {
    position: isSticky ? 'fixed' : 'static',
    top: '0',
    backgroundColor: isSticky ? 'white' : 'white',
    height: isSticky ? 'auto' : 'auto',
    
    width: '100%',
    zIndex:999,
    
   
  };

  const dispatch =useDispatch();
  const {byRating,totalfilters,pureveg,costs,SelectCuisine} = useSelector(state=>state.Filters)
  const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};
console.log(Cuisines)

const [Cuisine, setCuisine] = React.useState([]);

const handleChange = (event) => {
  const {
    target: { value },
  } = event;
  setCuisine(
   
    typeof value === 'string' ? value.split(',') : value,
  );


};
const handlepricechange =(e)=>{
dispatch(Apply_Cost_FILTER(Number(e.target.value)))
}
useEffect(()=>{
  dispatch(APPLY_CUISINE_FILTER(Cuisine))
},[Cuisine])
useEffect(()=>{
  let totalappliedfilters = Cuisine.length
  if(byRating){
    totalappliedfilters +=1
  }
  if(pureveg){
    totalappliedfilters+=1;
  }
  if(costs!==200){
    totalappliedfilters+=1;
  }
  dispatch(Calulate_NO_FILTERS(totalappliedfilters))
},[Cuisine,byRating,pureveg,costs])
 
  return (
    <div id="your-component" ref={componentRef}  style={componentStyle} className=" flex  justify-start  flex-wrap md:gap-3">
 <Button  className={`flex items-center gap-1 border-2 border-[rgb(207, 207, 207)] px-2  rounded-md ${totalfilters>0?('bg-[#e75480]'):('')}`}>
        {totalfilters===0?(<LiaFilterSolid color='green'/>):(<span className='text-white  font-bold'>{totalfilters}</span>)}
        <span className={`text-gray-500 font-bold ${totalfilters>0?('text-white'):('')} `}>Filters</span>
      </Button>
      <Button onClick={()=>dispatch(APPLY_RATING(4))} className={`flex items-center gap-3 border-2 border-[rgb(207, 207, 207)] px-2 py-1 rounded-md ${byRating? 'bg-[#e75480]':''} `}>
        <span className={`text-gray-500 font-bold ${byRating? 'text-white':''}`}>Ratings:</span>
        <span className={`text-gray-500 font-bold ${byRating? 'text-white':''}`}>4.0+⭐</span>
        {byRating&&<span onClick={(e)=>{e.stopPropagation();dispatch(REMOVE_RATING(0))}} ><RxCross2 color='white'/></span>}
      </Button>
      <Button onClick={()=>dispatch(APPLY_PURE_VEG(true))} className={`flex items-center gap-3 border-2 border-[rgb(207, 207, 207)] px-2 py-1 rounded-md ${pureveg?'bg-[#e75480]':''}`}>
       
        <span className={`text-gray-500 font-bold ${pureveg? 'text-white':''}`} >Pure Veg</span>
        {pureveg&&<span onClick={(e)=>{e.stopPropagation();dispatch(APPLY_PURE_VEG(false))}} ><RxCross2 color='white'/></span>}
      </Button>
      <div className='md:flex flex-col hidden   '>
      <p className='text-gray-500 font-bold'>
  Cost For two Person
</p>
      <Slider 
  aria-label="Temperature"
  defaultValue={200}
 //getAriaValueText={valuetext}
  valueLabelDisplay="auto"
  step={40}
  sx={{
    color:'pink',
    width:'100%'
  }}
  onChange={handlepricechange}
  min={200}
 max={2000}
 
/>
</div>
<div>
      <FormControl sx={{ m: 1, width: 300 }}>
      <InputLabel id="demo-simple-select-label" style={{color:"#e75480"}}>Cuisine</InputLabel>
      <Select
    labelId="demo-multiple-checkbox-label"
    id="demo-multiple-checkbox"
    multiple
    value={Cuisine}
    onChange={handleChange}
    renderValue={(selected) => selected.join(', ')}
    MenuProps={MenuProps}
    label="Cuisine"
    
    // sx={{
    //   '& .MuiSelect-root': {
    //     padding: '10px', 
    //     border:'none',
    //     outline:'none',
    //     color:'pink',
    //     background:'pink'
    //   },
    //   '& .Mui-focused': {
    //     // Remove the blue outline on focus
    //     boxShadow: 'none',
    //     border: '1px solid black', // Add your desired border color
    //   },
    //   '& .MuiInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
    //     borderColor:'1px solid green'
    //   }
    // }}
  >
          {Cuisines.map((cuisine) => (
            <MenuItem key={cuisine} value={cuisine}>
              <Checkbox checked={Cuisine.indexOf(cuisine) > -1} />
              <ListItemText primary={cuisine} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
    </div>
  )
}

export default Filters