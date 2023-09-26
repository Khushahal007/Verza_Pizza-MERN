import React from 'react'
import 'bootstrap'
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Navbar from './Components/Navbar'
import HomeScreen from './Screens/HomeScreen'
import { BrowserRouter, NavLink, Route, Routes, Switch } from 'react-router-dom'
import CardScreen from './Screens/CardScreen'
import RegisterScreen from './Screens/RegisterScreen'
import LoginScreen from './Screens/LoginScreen'

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomeScreen/>} />
        <Route path="/cart"  element={<CardScreen/>} />
        <Route path="/register" element={<RegisterScreen/>} />
        <Route path="/login" element={<LoginScreen/>} />
      </Routes>

    </div>
  )
}

export default App