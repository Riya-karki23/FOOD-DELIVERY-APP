import React from 'react'
import { Link } from 'react-router-dom'

function OrderConfirmed() {
  return (
    
    <div className="flex justify-center">
        <div className="bg-black py-10 mt-10 text-white flex flex-col justify-center items-center gap-5 px-4 max-w-96 rounded-xl">
            <div className="text-6xl">✅</div>
            <p className='font-medium text-xl'>Your order is confirmed</p>
            <p className='text-center text-gray-300'>Your order will be processed soon. We will notify you once order is been shipped</p>
            <Link to="/"><p className='bg-[tomato] rounded-sm px-5 py-1 '>Back to Shop</p></Link>
        </div>
</div>
   
  )
}

export default OrderConfirmed