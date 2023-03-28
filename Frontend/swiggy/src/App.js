import React from 'react'
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Navbar from './Components/Navbar'
import HomeScreen from './Screens/HomeScreen'
import { BrowserRouter, NavLink, Route, Routes, Switch } from 'react-router-dom'
import CardScreen from './Screens/CardScreen'

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomeScreen/>} />
        <Route path="/cart"  element={<CardScreen/>} />
      </Routes>

    </div>
  )
}

export default App