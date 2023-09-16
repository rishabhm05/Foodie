import React from 'react'
import {
    Tabs,
    TabsHeader,
    TabsBody,
    Tab,
    TabPanel,
  } from "@material-tailwind/react";

import { useNavigate } from 'react-router-dom';
const TabComponent = () => {
    const Navigate =useNavigate();
    const [activeTab, setActiveTab] = React.useState("Delivery");
    const data = [
      {
        label: "Delivery",
        value: "Delivery",
        img:'https://www.svgrepo.com/show/503678/order-food.svg',
        linkto:'/'
      },
      {
        label: "Dining Out",
        value: "Dining Out",
        img:'https://www.svgrepo.com/show/247117/dinner.svg',
        linkto:"/dining"
      },
      // {
      //   label: "NightLife",
      //   value: "NightLife",
      //   img:'https://www.svgrepo.com/show/501885/grapefruit-juice.svg'
      // },
     
    ];
    const handleactivetab = (value,path)=>{
     setActiveTab(value)
     Navigate(path)
    }
    return (
      <Tabs className="pt-[10rem]   md:max-w-4xl md:mx-auto" value={activeTab}>
        <TabsHeader 
          className=" grid md:grid-cols-4 grid-cols-2 rounded-none border-b border-blue-gray-50 bg-transparent p-0"
          indicatorProps={{
            className:
              "bg-transparent border-b-4 border-gray-900 shadow-none rounded-none",
          }}
        >
         
          {data.map(({ label, value ,img,linkto}) => (
            <Tab 
              key={value}
              value={value}
              
              onClick={()=>handleactivetab(value,linkto)}
              className={activeTab === value ? "text-gray-900 cursor-pointer" : ""}
            >
              <div className='flex items-center flex-start'>
              <img src={img} className='w-[20%] h-[20%]' alt={value}></img>
              <p className='text-2xl text-gray-500 '>{label}</p>
              </div>
            </Tab>
          ))}
        </TabsHeader>
        <TabsBody>
          {data.map(({ value, desc }) => (
            <TabPanel key={value} value={value}>
             {desc}
            </TabPanel>
          ))}
           
        </TabsBody>
      </Tabs>
   
    );
}

export default TabComponent