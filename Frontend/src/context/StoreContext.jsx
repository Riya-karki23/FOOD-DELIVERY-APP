import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const storeContext = createContext(null);

const StoreContextProvider = (props) => {
  const url = "https://food-delivery-backend-hmn1.onrender.com";

  const [cartItems, setCartItems] = useState({});
  const [token, setToken] = useState("");
  const [foodlist, setFoodlist] = useState([]);

    // -----------------------------------------------------------------------------------------Add to cart

  const addToCart = async (itemId) => {
    if (!cartItems[itemId]) {
      setCartItems((prev) => ({ ...prev, [itemId]: 1 }));
    } else {
      setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    }
    if (token) {
      const response = await axios.post(
        url + "/api/cart/add",
        { itemId },
        { headers: { token } }
      );
    }
  };

// -----------------------------------------------------------------------------------------Remove from cart


  const removeFromCart = async(itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));

    if(token){
      await axios.post(url+"/api/cart/remove",{itemId},{headers:{token}})
    }
  };

// -----------------------------------------------------------------------------------------get Total Cart Amount
 
  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = foodlist.find((product) => product._id === item);
        totalAmount += itemInfo.price * cartItems[item];
      }
    }
    return totalAmount;
  };

  const fetchFoodlist = async () => {
    const response = await axios.get(url + "/api/food/foodlist");
    setFoodlist(response.data.data);
  };

  const loadCartData=async(token)=>{
    const response=await axios.post(url+"/api/cart/get",{},{headers:{token}})
    setCartItems(response.data.cartData)
  }

  useEffect(() => {
    console.log(cartItems);
  }, [cartItems]);

  useEffect(() => {
    async function loadData() {
      await fetchFoodlist();
      if (localStorage.getItem("token")) {
        setToken(localStorage.getItem("token"));
        await loadCartData(localStorage.getItem("token"));
      }
    }
    loadData();
  }, []);

  const contextValue = {
    foodlist,
    cartItems,
    setCartItems,
    addToCart,
    removeFromCart,
    getTotalCartAmount,
    url,
    token,
    setToken,
  };

  return (
    <storeContext.Provider value={contextValue}>
      {props.children}
    </storeContext.Provider>
  );
};

export default StoreContextProvider;
