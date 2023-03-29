import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import "../index.css"
import { NavLink } from 'react-router-dom';
import pizza from "../images/pizza.jpg"
// import { loginUserReducer } from '../Reducers/userReducer';
import { logoutUser } from '../Actions/userAction';



const Navbar = () => {

    const cartstate= useSelector(state=>state.cartReducer)
    const userstate=useSelector(state=>state.loginUserReducer)
    const currentUser=userstate

    const dispatch=useDispatch()
    return (
        <nav className="navbar navbar-expand-lg shadow-lg p-3 mb-5 bg-body rounded">
            <NavLink to="/">
                <img className="pizza" src={pizza} alt="Image description" />
            </NavLink>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">

              {currentUser ? (
                <div className="dropdown">
                <a className="dropdown-toggle" style={{color:'black'}} id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                 {currentUser.name}
                </a>
                <div className="dropdown-menu mt-2" aria-labelledby="dropdownMenuButton">
                  <a className="dropdown-item" to="#">Orders</a>
                  <a className="dropdown-item" to="#" onClick={()=>{dispatch(logoutUser())}}>Logout</a>
                  
                </div>
              </div>
              ) :(
                  <li className="nav-item active">
                  <NavLink className="nav-link" to="/login">Login</NavLink>
              </li>
              )}                                                                                                                                                                                                                    
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/cart">Cart {cartstate.cartItems.length}</NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar