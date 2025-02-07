import React from 'react';
import { assets } from '../assets/frontend_assets/assets';

function Header() {
  return (
    <div className="flex justify-center mt-5">
    <div
      className="h-[25vh] md:h-[70vh] w-full bg-cover bg-center md:rounded-3xl flex flex-col justify-center gap-5"
      style={{ backgroundImage: `url(${assets.header_img})` }}
    >
        <div className=" md:w-[60%] md:pl-28 pl-5 md:md:pt-20">
        <p className='text-white font-semibold text-2xl md:text-6xl'>Order your<br/> favourite food here</p>
        <p className='text-white md:flex hidden py-6'>Satisfy your cravings with just a few taps! Explore a variety of cuisines, order your favorite dishes, and get them delivered hot and fresh to your doorstep in no time, we bring the best restaurants to your doorstep with quick and reliable delivery</p>
        <button className='bg-white text-gray-500 px-6 md:py-2 py-1 mt-2 rounded-3xl md:text-md text-sm font-semibold'>View Menu</button>
        </div>
    </div>
    </div>
  );
}

export default Header;
