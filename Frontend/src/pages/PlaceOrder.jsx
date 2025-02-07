import React, { useContext, useState } from 'react'
import { storeContext } from '../context/StoreContext'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

function PlaceOrder() {
  const navigate=useNavigate();
  const {getTotalCartAmount,token,foodlist,cartItems,url}=useContext(storeContext);

 const [data, setData] = useState({
  firstName:"",
  lastName:"",
  email:"",
  street:"",
  city:"",
  state:"",
  zipcode:"",
  country:"",
  phone:""
 })

const onChangeHandler=(event)=>{
const{name,value}=event.target
setData((prev)=>({
  ...prev,
  [name]:value
}))
}

const handleSubmit=()=>{

  if(!data.firstName || !data.lastName || !data.email || !data.street || !data.city || !data.state || !data.zipcode || !data.country || !data.phone)
  {
 toast.error("All fields required")
  }
  else{

  navigate('/confirm')
  toast.success('order placed successfully')
  }
}





  return (
    <div className='flex md:mt-14 mt-10 flex-col md:flex-row md:gap-40 gap-16 '>
      <div className="md:w-1/2 ">
        <h1 className='font-bold text-2xl'>Delivery Information</h1>
        <form  className='flex flex-col gap-5 mt-8'>
          <div className="grid grid-cols-2 gap-5">
            <input onChange={onChangeHandler} name="firstName" value={data.firstName} className='border-2 border-gray-200 outline-none rounded-sm px-3 py-1' type="text" placeholder='First name'  required/>
            <input onChange={onChangeHandler} name="lastName" value={data.lastName} className='border-2 border-gray-200 outline-none rounded-sm px-3 py-1' type="text" placeholder='Last name' required />
          </div>
          <div className="grid grid-cols-1 gap-5">
          <input onChange={onChangeHandler} name="email" value={data.email} className='border-2 border-gray-200 outline-none rounded-sm px-3 py-1' type="email" placeholder='Email address' required />
          <input onChange={onChangeHandler} name="street" value={data.street} className='border-2 border-gray-200 outline-none rounded-sm px-3 py-1' type="text" placeholder='Street' required />

          </div>
          <div className="grid grid-cols-2 gap-5">
          <input onChange={onChangeHandler} name="city" value={data.city} className='border-2 border-gray-200 outline-none rounded-sm px-3 py-1' type="text" placeholder='City' required />
          <input onChange={onChangeHandler} name="state" value={data.state} className='border-2 border-gray-200 outline-none rounded-sm px-3 py-1' type="text" placeholder='State' required />

          </div>
          <div className="grid grid-cols-2 gap-5">
          <input onChange={onChangeHandler} name="zipcode" value={data.zipcode} className='border-2 border-gray-200 outline-none rounded-sm px-3 py-1' type="text" placeholder='Zip code'  required/>
          <input onChange={onChangeHandler} name="country" value={data.country} className='border-2 border-gray-200 outline-none rounded-sm px-3 py-1' type="text" placeholder='Country'  required/>

          </div>
          <div className="grid grid-cols-1">
          <input onChange={onChangeHandler} name="phone" value={data.phone} className='border-2 border-gray-200 outline-none rounded-sm px-3 py-1' type="text" placeholder='Phone' required />

          </div>
        </form>
      </div>
      <div className=" md:w-1/2 md:px-16">
   <div className="flex flex-col gap-3 text-gray-800">
    <h1 className='font-bold text-xl'>Cart Totals</h1>
    <div className="flex justify-between items-center font-medium">
        <p>Subtotal</p>
        <p>₹{getTotalCartAmount()}</p>
    </div>
    <div className="flex justify-between items-center border-t-[0.5px] pt-2 border-t-gray-300 font-medium">
        <p>Delivery fee</p>
        <p>₹{getTotalCartAmount()===0?0:50}</p>
    </div>
    <div className="flex justify-between text-lg items-center font-semibold border-t-[0.5px] py-2 border-t-gray-300">
        <p>Total</p>
        <p>₹{getTotalCartAmount()===0?0:getTotalCartAmount()+50}</p>
    </div>
   </div>
   <button type='submit' onClick={handleSubmit} className=' cursor-pointer bg-[tomato] mt-5 font-semibold text-white text-sm px-4 py-2 rounded-md'>CONFIRM ORDER</button>
   </div>
   
</div>

  )
}

export default PlaceOrder