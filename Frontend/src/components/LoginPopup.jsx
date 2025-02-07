import React, { useContext, useEffect, useState } from "react";
import { assets } from "../assets/frontend_assets/assets";
import {storeContext} from '../context/StoreContext'
import axios from 'axios';


function LoginPopup({setShowLogin}) {
const {url, setToken}=useContext(storeContext)

  const [currentState, setCurrentState] = useState("Sign Up");

  const [data, setData] = useState({
    name:"",
    email:"",
    password:""

  })

  const onChangeHandler=(event)=>{
     const {name,value}=event.target;
     setData((prev)=>({
      ...prev,
      [name]:value
     })
     )
  }

  


  const onSubmitHandler=async(e)=>{
    e.preventDefault();
    let newUrl=url;
   
    if(currentState==="Login"){
      newUrl+="/api/user/login"

    }
    else{
      newUrl+="/api/user/register"
    }

    const response=await axios.post(newUrl,data);

    if(response.data.success){
      const token=response.data.token;
      setToken(token);
      localStorage.setItem('token',token)
      setShowLogin(false);
    }
    else{
      alert(response.data.message)
    }



  }


  return (
    <div className="bg-white shadow-md shadow-gray-400  fixed z-50 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-7 rounded-xl max-w-96">
      <form onSubmit={onSubmitHandler}>
        <div className="flex justify-between items-center">
          <h2 className="font-bold text-2xl">{currentState}</h2>
          <img className="cursor-pointer h-5" onClick={()=>setShowLogin(false)} src={assets.cross_icon} alt="cross-icon" />
        </div>
        <div className="flex flex-col gap-4 py-5">
          {currentState==="Sign Up"?
          <input onChange={onChangeHandler} name="name" value={data.name} className=" border-2 border-gray-300 rounded-md px-2 py-2 outline-gray-400" type="text" placeholder="Your name" required />:<></>}
          <input onChange={onChangeHandler} name="email" value={data.email} className=" border-2 border-gray-300 rounded-md px-2 py-2 outline-gray-400" type="email" placeholder="Your email" required />
          <input onChange={onChangeHandler} name="password" value={data.password} className=" border-2 border-gray-300 rounded-md px-2 py-2 outline-gray-400" type="password" placeholder="Your password" required />
        </div>
        <button className="bg-[tomato] cursor-pointer w-full text-white font-semibold rounded-md py-2">
          {currentState === "Sign Up" ? "Create an account" : "Login"}
        </button>
        <div className="flex items-start my-3 text-gray-500 text-sm gap-1">
          <input className="mt-1" type="checkbox" required />
          <p>By continuing, i agree to ther terms of use & privacy policy.</p>
        </div>
        <div className="px-4 text-gray-500">
        {currentState === "Sign Up" ? (
          <p>
            Already have an account?<span className="text-[tomato] underline cursor-pointer" onClick={()=>setCurrentState("Login")}> Login here</span>
          </p>
        ) : (
          <p>
            Create an account?<span className="text-[tomato] underline cursor-pointer" onClick={()=>setCurrentState("Sign Up")}> Click here</span>
          </p>
        )}
        </div>
      </form>
    </div>
  );
}

export default LoginPopup;
