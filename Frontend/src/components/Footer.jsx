import React from 'react'
import { assets } from '../assets/frontend_assets/assets'

function Footer() {
  return (
    <div className='bg-[#171717] flex-col text-gray-300 flex   md:px-36  pt-16 mt-28 ' id='Contact'>
      <div className="flex md:flex-row justify-between px-10 md:px-0 flex-col gap-10">
        <div className="md:w-[40%] w-full">
         <img src={assets.logo} alt='logo'/>
         <p className='py-5 '>Explore a variety of mouthwatering dishes from top restaurants near you. Order with  ease and enjoy fresh, hot meals delivered straight to your doorstep!  Enjoy fast delivery and the best flavors from your favorite local spots. </p>
         <div className="flex gap-5 h-10">
            <img src={assets.facebook_icon} alt='facebook-icon'/>
            <img src={assets.twitter_icon} alt='facebook-icon'/>
            <img src={assets.linkedin_icon} alt='facebook-icon'/>
         </div>
        </div>
        <div className="">
        <h3 className='font-semibold text-md pb-4 text-white'>COMPANY</h3>
        <ul className='flex flex-col gap-2'>
            <li>Home</li>
            <li>About Us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
        </ul>
        </div>
        <div className="">
          <h3 className='font-semibold text-md pb-4 text-white'>GET IN TOUCH</h3>
          <p className='mb-3'>+91 98765-87353</p>
          <p>contact@tomato.com</p>
        </div>
        </div>

        <div className="border-gray-400 border-t-2 mt-10">
        <p className='text-center py-5 text-sm'>Copyright 2024 @ Tomato.com - All Rights Reserved.</p>
        </div>
    </div>
  )
}

export default Footer