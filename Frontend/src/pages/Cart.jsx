import React, { useContext } from 'react'
import { storeContext } from '../context/StoreContext'
import { assets } from '../assets/frontend_assets/assets'
import { useNavigate } from 'react-router-dom';

function Cart() {

    const{foodlist, cartItems, removeFromCart, getTotalCartAmount,url}=useContext(storeContext);
    const navigate=useNavigate();

  return (
    <div className='md:mt-16 mt-8  '>
        <div className="  grid grid-cols-6 md:text-lg text-xs text-center py-2 text-gray-500  border-b-1 border-gray-400">
            <p>Items</p>
            <p>Title</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
            <p>Remove</p>
        </div>
            {foodlist.map((item,idx)=>{
            if(cartItems[item._id]>0)
            {
                return(
                    <div key={idx} className="grid grid-cols-6 text-center items-center py-2  md:text-lg text-sm border-b-1 border-gray-400 ">
                <img className='md:h-12 h-8 mx-auto' src={url+"/images/"+item.image} alt='food-img'/>
                <p>{item.name}</p>
                <p>{item.price}</p>
                <p>{cartItems[item._id]}</p>
                <p>{item.price*cartItems[item._id]}</p>
                <div className="flex items-center justify-center">
                                <img onClick={()=>removeFromCart(item._id)} className='md:h-5 h-4 cursor-pointer' src={assets.cross_icon} alt="cross-icon" />
                            </div>
            </div>
            )
            }
              
})}

{/* ----------------------------------------------------------------------------------------cart bottom section */}

<div className="mt-16 md:px-20 flex md:gap-36 gap-10 md:flex-row flex-col-reverse">
    <div className='md:w-1/2' >
   <div className="flex flex-col gap-3 text-gray-800">
    <h1 className='font-bold text-lg'>Cart Totals</h1>
    <div className="flex justify-between items-center font-medium">
        <p>Subtotal</p>
        <p>₹{getTotalCartAmount()}</p>
    </div>
    <div className="flex justify-between items-center font-medium  border-t-[0.5px] pt-1  border-t-gray-300">
        <p>Delivery fee</p>
        <p>₹{getTotalCartAmount()===0?0:50}</p>
    </div>
    <div className="flex justify-between items-center font-semibold border-t-[0.5px] py-2 text-lg border-t-gray-300">
        <p>Total</p>
        <p>₹{getTotalCartAmount()===0?0:getTotalCartAmount()+50}</p>
    </div>
   </div>
   <button onClick={()=>navigate('/order')} className='bg-[tomato] mt-5 font-semibold text-white text-sm px-4 py-2 rounded-md'>PROCEED TO CHECKOUT</button>
   </div>
   <div className='md:w-1/2 '>
    <p className=' text-gray-800'>if you have a promo code, Enter it here</p>
    <div className="">
        <input className='bg-gray-200 px-3 py-2 md:w-96 w-full mt-1 my-5 md:my-0 rounded-tl-sm rounded-bl-sm outline-none' type="text" placeholder='promo code'/>
        <button className='bg-black text-white px-5 md:py-2 py-1 rounded-sm'>Submit</button>
    </div>
   </div>
</div>


    </div>
  )
}

export default Cart