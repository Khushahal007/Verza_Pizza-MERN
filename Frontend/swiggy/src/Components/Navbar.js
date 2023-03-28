import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import "../index.css"
import { NavLink } from 'react-router-dom';
import pizza from "../images/pizza.jpg"


const Navbar = () => {

    const cartstate= useSelector(state=>state.cartReducer)
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
                    <li className="nav-item active">
                        <NavLink className="nav-link" to="#">Login <span className="sr-only"></span></NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/cart">Cart {cartstate.cartItems.length}</NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar