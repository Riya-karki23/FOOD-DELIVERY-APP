import React, { useContext } from 'react'
import {storeContext} from '../context/StoreContext'
import FoodItemCard from './FoodItemCard'

function FoodDisplay({category}) {
    const {foodlist}=useContext(storeContext)
  return (
    <div className=' my-10 '>
        <h1 className=' font-semibold md:text-4xl text-2xl pb-6'>Top dishes near you</h1>
        <div className=" grid-cols-1 grid md:grid-cols-4 gap-6 ">
        {foodlist.map((item,idx)=>{

          if(category==="All" || category===item.category){
            return(
            <div>

      <FoodItemCard  key={idx} id={item._id} name={item.name} image={item.image} price={item.price} description={item.description} category={item.category}/>
      </div>
            )
}
})}
        </div>
        </div>
  )
}

export default FoodDisplay