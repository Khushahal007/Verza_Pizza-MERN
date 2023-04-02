import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import "../index.css"
import { Link, NavLink } from 'react-router-dom';
import pizza from "../images/pizza.jpg"
// import { loginUserReducer } from '../Reducers/userReducer';
import { logoutUser } from '../Actions/userAction';





const Navbar = () => {

    const cartstate = useSelector(state => state.cartReducer)
    const userstate = useSelector(state => state.loginUserReducer.loginUserReducer)
    // const currentUser = userstate
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('currentUser')) || null)



    const dispatch = useDispatch()


    function handleLogout() {
        dispatch(logoutUser());
    }



    return (
        <nav className="navbar navbar-expand-lg shadow-lg p-1 mb-5 bg-body rounded fixed-to">
            <NavLink to="/">
                <img className="pizza" src={pizza} alt="Image description" />
            </NavLink>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    {user ? (

                        <>

                            <NavLink style={{ marginRight: '30px', marginTop: '8px', text: 'bold', fontSize: '19px', color: 'red', textDecoration: 'none' }} to="">{user.name}</NavLink>

                            {/* <NavLink style={{ marginRight: '30px', marginTop: '8px', fontSize: '19px', color: 'black', textDecoration: 'none' }} to="/orders">Orders</NavLink> */}
                            <h5 className='m-auto btn cursor-pointer' to='/login' onClick={handleLogout}>Logout</h5>

                        </>

                    ) : (
                        <li className="nav-item active">
                            <NavLink className="nav-link btn cursor-pointer" to="/login">Login</NavLink>
                        </li>
                    )}
                    <li className="nav-item">
                        <NavLink style={{ marginRight: '10px', paddingLeft: '20px', fontSize: '19px' }} className="nav-link" to='/cart'>Cart {cartstate.cartItems.length}</NavLink>
                    </li>
                </ul>
            </div>


        </nav>
    )
}

export default Navbar