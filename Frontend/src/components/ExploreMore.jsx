import React from 'react'
import { menu_list } from '../assets/frontend_assets/assets'

function ExploreMore({category,setCategory}) {
  return (
    <div className=' mt-10' id='ExploreMore'>
        <h1 className=' font-semibold text-2xl md:text-4xl'>Explore our menu</h1>
        <p className=' md:w-[55%] py-4'>Choose from a diverse menu featuring a delectable array of dishes. Our mission is to satisfy your cravings and elevate your dining experience, one delicious meal at a time.</p>
        <div className=" scroll-container flex gap-6 md:gap-10 md:flex-nowrap py-5 md:px-14 px-2">
            {menu_list.map((item,idx)=>(
              <div onClick={()=>setCategory(prev=>prev===item.menu_name?"All":item.menu_name) }
               className=" flex flex-col justify-between min-w-20  text-[#282626] items-center w-24  md:gap-3 ">
            
<img 
  className={`cursor-pointer ${category===item.menu_name ? "rounded-full outline-4 outline-red-600 " : ""} `} 
  src={item.menu_image} 
  alt='menu-image'
/>
                <p>{item.menu_name}</p>
              </div>
            ))} 

        </div>
    </div>
  )
}

export default ExploreMore