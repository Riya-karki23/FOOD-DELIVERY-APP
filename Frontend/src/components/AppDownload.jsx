import React from 'react'
import { assets } from '../assets/frontend_assets/assets'

function AppDownload() {
  return (
    <div className=' flex flex-col items-center gap-8 my-20' id='AppDownload' >
        <p className='md:text-4xl text-2xl font-semibold text-center text-[#2b2828]'>For Better Experience Download<br/> Tomato App</p>
        <div className="flex gap-5 cursor-pointer ">
            <img className='hover:scale-110 h-10' src={assets.play_store} alt=''/>
            <img className='hover:scale-110 h-10' src={assets.app_store} alt=''/>
        </div>
    </div>
  )
}

export default AppDownload