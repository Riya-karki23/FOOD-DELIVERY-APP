import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { assets } from '../assets/admin_assets/assets'
import { toast } from 'react-toastify'

const List = ({url}) => {
  const [foodlist, setFoodlist] = useState([])

  

  const getFoodList=async()=>{
    try{
  const response=await axios.get(`${url}/api/food/foodList`);
  if(response.data.success){
    setFoodlist(response.data.data)
  }
  console.log(foodlist)
    }
    catch(error){
     toast.error('error')
    }

  }

const removeFooditem=async(foodId)=>{
try {
  const response=await axios.post(`${url}/api/food/remove`,{id:foodId});
  getFoodList();
  
  if(response.data.success){
    toast.success(response.data.message);
  }
  
} catch (error) {
  console.log(error)
  toast.error('Error');

}
}

  useEffect(()=>{
    getFoodList();
  },[])


  return (
    <div className="md:w-[calc(100vw-20%)] w-[calc(100vw-15%)] pt-10 md:px-20  ">
      <div className="">
        <h1 className='text-lg font-medium text-gray-500 '>All Foods List</h1>
        <div className="grid  md:grid-cols-[1fr_3fr_1fr_1fr_1fr] grid-cols-[1fr_2fr_1fr_1fr_1fr] text-gray-600  mt-5 md:gap-16 gap-3 py-2 border border-gray-500 md:px-5 px-2 text-sm md:text-lg">
          <b >Image</b>
          <b>Name</b>
          <b>Category</b>
          <b>Price</b>
          <b>Action</b>
        </div>

        {foodlist.map((item,idx)=>(
           <div key={idx} className="grid md:grid-cols-[1fr_3fr_1fr_1fr_1fr] grid-cols-[1fr_2fr_1fr_1fr_1fr] md:gap-18 gap-5 items-center py-2 text-gray-500 text-md md:px-5 px-2 border border-gray-500 border-t-0 md:text-lg text-sm">
           <img className='md:h-14 md:w-16 ' src={`${url}/images/${item.image}`} alt={item.name} />
           <p >{item.name}</p>
           <p>{item.category}</p>
           <p>{item.price}</p>
           <img onClick={()=>{removeFooditem(item._id)}} className='h-4 cursor-pointer' src={assets.cross_icon} alt='cross-icon'/>
         </div>      
        ))}
       
      </div>
</div>
  )
}

export default List