import React, { useContext, useState } from "react";
import { assets } from "../assets/frontend_assets/assets";
import {Link, useNavigate} from 'react-router-dom'
import { storeContext } from "../context/StoreContext";

function Navbar({setShowLogin}) {
  const [menu, setMenu] = useState("home");
  const [profileDropdown, setProfileDropdown] = useState(false)
const{getTotalCartAmount,token,setToken}=useContext(storeContext)
const navigate=useNavigate();

const logout=()=>{
  localStorage.removeItem("token");
  setToken("");
  navigate('/');
}

  return (
    <div className=" flex justify-between py-5  md:py-7 items-center">
        {/* --------------------------------------------------------------------------------------------top-div */}
      <div className="">
        <Link to="/"><img className="h-5" src={assets.logo} alt="logo" /></Link>
      </div>
      {/* ---------------------------------------------------------------------------------------------center div */}
      <div className="">
        <ul className=" hidden md:flex gap-12 text-gray-600  text-lg items-center">
          <Link to="/"
            onClick={() => setMenu("home")}
            className={`cursor-pointer pb-1 ${
              menu === "home"
                ? "border-b-2 border-black font-semibold text-black"
                : ""
            }`}
          >
            home
          </Link>
          <a href="#ExploreMore"
            onClick={() => setMenu("menu")}
            className={`cursor-pointer pb-1 ${
              menu === "menu"
                ? "border-b-2 border-black font-semibold text-black"
                : ""
            }`}
          >
            menu
          </a>
          <a href="#AppDownload"
            onClick={() => setMenu("mobile-app")}
            className={`cursor-pointer pb-1 ${
              menu === "mobile-app"
                ? "border-b-2 border-black font-semibold text-black"
                : ""
            }`}
          >
            mobile-app
          </a>
          <a href="#Contact"
            onClick={() => setMenu("contact-us")}
            className={`cursor-pointer pb-1 ${
              menu === "contact-us"
                ? "border-b-2 border-black font-semibold text-black"
                : ""
            }`}
          >
            contact-us
          </a>
        </ul>
      </div>

      {/* ----------------------------------------------------------------------------------------------right div */}
      <div className="flex  gap-4 md:gap-6 items-center">
        <img className="md:h-6 h-5" src={assets.search_icon} alt="search-icon" />
       <div className="relative "> 
        <Link to="/cart"><img className="md:h-6 h-5 " src={assets.basket_icon} alt="bag-icon" /></Link>

        <div className={`${getTotalCartAmount()===0?"hidden":"block"} bg-red absolute -top-2 -right-[6px] text-[10px] bg-red-600 rounded-full h-[10px] w-[10px] flex justify-center items-center`}></div>
        </div>

        {!token?        <button onClick={()=>setShowLogin(true)} className="border-2 bg-[tomato] text-white rounded-2xl px-4 md:px-7 py-1">Sign in</button>: 
       <div className="relative">
        <img onClick={()=>setProfileDropdown(!profileDropdown)} className="h-6" src={assets.profile_icon} alt="profile-icon"/>
        <div className={`absolute bg-white z-50 right-0 w-36 mt-5 rounded-sm shadow shadow-gray-600 px-4 py-2 ${profileDropdown ? "flex flex-col" : "hidden"}`}>
        <div className="flex gap-2 items-center py-2 border-b border-b-gray-600">
            <img  className="h-6" src={assets.bag_icon} alt="order-icon" />
            <p className="text-gray-700 font-medium">Orders</p>
          </div>
          <div onClick={logout} className="flex gap-2 items-center py-2">
            <img className="h-6" src={assets.logout_icon} alt="logout-icon" />
            <p className="text-gray-700 font-medium">Logout</p>
          </div>
        </div>
       </div>
}
      </div>
    </div>
  );
}

export default Navbar;
