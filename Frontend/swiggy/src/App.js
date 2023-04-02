import React from 'react'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Navbar from './Components/Navbar'
import HomeScreen from './Screens/HomeScreen'
import { BrowserRouter, NavLink, Route, Routes, Switch } from 'react-router-dom'
import CardScreen from './Screens/CardScreen'
import RegisterScreen from './Screens/RegisterScreen'
import LoginScreen from './Screens/LoginScreen'
import OrderScreen from './Screens/OrderScreen';

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomeScreen/>} />
        <Route path="/cart"  element={<CardScreen/>} />
        <Route path="/register"  element={<RegisterScreen/>} />
        <Route path="/login"  element={<LoginScreen/>} />
        {/* <Route path="/orders"  element={<OrderScreen/>} /> */}
      </Routes>

    </div>
  )
}

export default App