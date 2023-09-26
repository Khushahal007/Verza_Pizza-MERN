import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom';
import { loginUser } from '../Actions/userAction';
import Error from '../Components/Error';
import { loginUserReducer } from '../Reducers/userReducer';



export default function LoginScreen() {

  const [email, setemail] = useState('')
  const [password, setpassword] = useState('')
  const loginstate=useSelector(state=>state.loginUserReducer)
  const {loading, error} = loginstate
  const dispatch = useDispatch()

  useEffect(() => {
    if (localStorage.getItem('currentUser')) {
      window.location.href = '/'
    }
  }, [])

  function login() {
    const user = { email, password }
    dispatch(loginUser(user))
  }

  return (
    <div>
      <div className="row justify-content-center mt-5 shadow-lg p-3 mb-5 bg-white rounded" style={{width:'30%', margin:'auto', paddingTop:'20px'}}>
        <div className="col-md-5 text-left ">
          <h2 className="text-center m-2" style={{ fontSize: '35px' }}>
            Login
          </h2>

                  {loading && ( <img style={{marginTop:'auto', width:'500px'}} src="https://img.pikbest.com/png-images/20190918/cartoon-snail-loading-loading-gif-animation_2734139.png!bw700" alt="loading GIF" />)}
                  {error && (<Error error='Invalid Credentials'/>)}


        </div>
        <input required type="text" placeholder='Email' className='from-control p-1' value={email} onChange={(e) => { setemail(e.target.value) }} />
        <input required type="text" placeholder='Password' className='from-control p-1' value={password} onChange={(e) => { setpassword(e.target.value) }} />
        <button className="btn mt-3" onClick={login}>Login</button>
        <NavLink style={{padding:'15px', marginLeft:'-16px'}}to="/register">Not yet Register? Click here to Register</NavLink>
      </div>
    </div>
  )
}
