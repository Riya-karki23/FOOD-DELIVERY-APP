import React, { useState } from 'react'
import Header from '../components/Header'
import ExploreMore from '../components/ExploreMore'
import FoodDisplay from '../components/FoodDisplay'
import AppDownload from '../components/AppDownload'

function Home() {
  const [category,setCategory] = useState("All")
  return (
    <div>
      <Header/>
      <ExploreMore category={category} setCategory={setCategory}/>
      <FoodDisplay category={category} />
      <AppDownload/>
      
    </div>
  )
}

export default  Home
