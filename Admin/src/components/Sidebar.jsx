import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { assets } from '../assets/admin_assets/assets'

const Sidebar = () => {
   const [active, setActive] = useState('add')
  return (
    <div className='w-[15%] md:w-[20%] md:pl-16 pt-14 flex flex-col gap-7 border-r border-r-[#a9a9a9] h-[calc(100vh-80px)] border-b border-b-[#a9a9a9]'>
     <Link to="/add"> <div  onClick={()=>setActive('add')} className={`${active==='add'?"bg-red-300":""} flex md:gap-5 gap-2 items-center md:px-2 px-1 py-2 border border-[#a9a9a9] border-r-0`}>
         <img src={assets.add_icon} alt="add-icon" />
         <p className='hidden md:block'>Add items</p>
      </div></Link>
      <Link to="/list"><div onClick={()=>setActive('list')} className={`${active==='list'?"bg-red-300":""} flex gap-5 items-center px-2 py-2 border border-[#a9a9a9] border-r-0`}>
         <img src={assets.order_icon} alt="list-icon" />
         <p className='hidden md:block'>List items</p>
      </div></Link>
      {/* <Link to="/order"><div onClick={()=>setActive('order')}  className={`${active==='order'?"bg-red-300":""} flex gap-5 items-center px-2 py-2 border border-[#a9a9a9] border-r-0`}>
         <img src={assets.order_icon} alt="order-icon" />
         <p className='hidden md:block'>Orders</p>
      </div></Link> */}
     </div>
  )
}

export default Sidebar