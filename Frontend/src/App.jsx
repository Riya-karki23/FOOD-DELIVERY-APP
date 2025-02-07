import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPopup from "./components/LoginPopup";
import Cart from "./pages/Cart";
import PlaceOrder from "./pages/PlaceOrder";
import OrderConfirmed from "./pages/OrderConfirmed";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  const [showLogin, setShowLogin] = useState(false);
  return (
    <BrowserRouter>
    <ToastContainer/>
      <div className=" px-8 md:px-32">
        {showLogin ? <LoginPopup setShowLogin={setShowLogin} /> : <></>}
        <Navbar setShowLogin={setShowLogin} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart/>} />
          <Route path="/order" element={<PlaceOrder/>} />
          <Route path="/confirm" element={<OrderConfirmed/>} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
