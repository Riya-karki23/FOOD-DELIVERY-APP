import React from 'react'
import {assets} from '../assets/admin_assets/assets'

const Navbar = () => {
  return (
    <div className=' flex justify-between items-center px-8 py-2'>
      <div >
        <img className='h-16' src={assets.logo} alt="logo" />
      </div>
      <div >
        <img className='h-10' src={assets.profile_image} alt="" />
      </div>

    </div>
  )
}

export default Navbar