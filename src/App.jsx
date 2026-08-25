import React from 'react'
import Home from './components/Home'
import {Routes, Route} from "react-router-dom"
const App = () => {
  return (
    <div className='bg-light h-screen'>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/favorites" element={<Favorites/>}/>
      </Routes>
      <Home/>   
    </div>
  )
}

export default App