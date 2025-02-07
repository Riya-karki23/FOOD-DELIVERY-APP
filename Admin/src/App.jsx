import React from 'react'
import 'react-toastify/dist/ReactToastify.css';

import {Routes,Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Add from './pages/Add';
import List from './pages/List';
import Order from './pages/Order';
import { ToastContainer } from 'react-toastify';

const App = () => {

  const url='http://localhost:4000';
  return (
    <div className=''>
      <ToastContainer/>
      <Navbar/>
      <hr/>
      <div className=" flex">
      <Sidebar/>
      <Routes>
        <Route path="/add" element={<Add url={url}/>}/>
        <Route path="/list" element={<List url={url}/>}/>
        <Route path="/order" element={<Order url={url}/>}/>
      </Routes>
    </div>
    </div>
  )
}

export default App