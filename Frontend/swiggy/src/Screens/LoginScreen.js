import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { loginUser } from '../Actions/userAction'
import Error from '../Components/Error'
import Loading from '../Components/Loading'




export default function LoginScreen() {
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')
    const loginstate = useSelector(state => state.loginUserReducer)
    const { loading, error } = loginstate
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
            <div style={{ width: '40%', margin: 'auto' }} className="row justify-content-center mt-5 shadow-lg p-3 mb-5 bg-white rounded">
                <div className="col-md-3 mt-5 text-left ">
                    <h2 className="text-center m-2" style={{ fontSize: '30px' }}>Login</h2>

                    {loading && (<Loading />)}
                    {error && (<Error errorMessage='Invalid Credentials' />)}



                </div>
                <input required type="text" placeholder='Email' className="form-control" value={email} onChange={(e) => { setemail(e.target.value) }} />
                <input required type="text" placeholder='Password' className="form-control" value={password} onChange={(e) => { setpassword(e.target.value) }} />
                <button className='btn mt-3' onClick={login}>Login</button>
                <NavLink style={{ marginTop: '10px', marginLeft: '-13px' }} to='/register'>Not yet Account? Click here to Register</NavLink>


            </div>
        </div>
    )
}
