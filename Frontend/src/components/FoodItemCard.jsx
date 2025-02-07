import React, { useContext } from "react";
import { assets } from "../assets/frontend_assets/assets";
import { storeContext } from "../context/StoreContext";

function FoodItemCard({ id, name, price, description, image }) {

  const {cartItems,addToCart, removeFromCart,url}=useContext(storeContext)
  return (
    <div className="rounded-3xl shadow shadow-gray-200">
      <div className="relative">
        <img
          src={url+"/images/"+image}
          alt="food-item-img"
          className="rounded-tr-3xl rounded-tl-3xl"
        />
        {!cartItems?.[id]?(
            <div className="absolute bottom-2 right-3 ">
                <img onClick={()=>addToCart(id)} src={assets.add_icon_white} alt="add-btn" className="h-10"/>
            </div>
        ):(
             <div className="absolute bottom-2 right-2 flex items-center justify-center bg-white rounded-3xl p-1 ">
             <img  onClick={()=>removeFromCart(id)} src={assets.remove_icon_red}  alt="minus-btn" className="h-8"/>
             <div className="w-6 text-center">{cartItems[id]}</div>
             <img  onClick={()=>addToCart(id)} src={assets.add_icon_green} alt="add-btn" className="h-8"/>
           </div>
        )}
       
      </div>
      <div className="p-5">
        <div className="flex justify-between items-center">
          <p className="text-lg font-semibold">{name}</p>
          <img src={assets.rating_starts} alt="ratings-img" />
        </div>
        <p className="text-gray-500 text-sm">{description}</p>
        <p className="text-red-500 text-xl font-semibold py-2">₹ {price}</p>
      </div>
    </div>
  );
}

export default FoodItemCard;
