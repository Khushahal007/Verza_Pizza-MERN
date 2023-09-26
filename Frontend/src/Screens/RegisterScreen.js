import React from 'react'
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { registerUser } from '../Actions/userAction'
import Success from '../Components/Success'
import Error from '../Components/Error'



export default function RegisterScreen() {

    const [name, setname] = useState('')
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')
    const [cpassword, setcpassword] = useState('')
    const registerstate = useSelector(state => state.registerUserReducer)
    const { error, loading, success } = registerstate

    const dispatch = useDispatch();
    function register() {
        if (password !== cpassword) {
            alert('Password does not match')
        } else {
            const user = {
                name, email, password
            }
            console.log(user)
            dispatch(registerUser(user))
        }
    }
    return (
        <div>
            <div className="row justify-content-center mt-5">
                <div className="col-md-5 mt-5 text-left shadow-lg p-3 mb-5 bg-white rounded">

                    {loading && (<img style={{ marginTop: 'auto', width: '500px' }} src="https://img.pikbest.com/png-images/20190918/cartoon-snail-loading-loading-gif-animation_2734139.png!bw700" alt="loading GIF" />)}
                    {success && (<Success success="User Register Successfully" />)}
                    {error && (<Error error='Email already registered' />)}
                    <h2 className='text-center m-2' style={{ fontSize: '35px' }}>Create Your Account</h2>

                    <div>
                        <input required type="text" placeholder="Name" className="form-control" value={name} onChange={(e) => { setname(e.target.value) }} />
                        <input required type="text" placeholder="Email" className="form-control" value={email} onChange={(e) => { setemail(e.target.value) }} />
                        <input required type="text" placeholder="Password" className="form-control" value={password} onChange={(e) => { setpassword(e.target.value) }} />
                        <input required type="text" placeholder="Confirm Password" className="form-control" value={cpassword} onChange={(e) => { setcpassword(e.target.value) }} />
                        <button className="btn mt-3 col-12" onClick={register}>Register</button>
                        <NavLink  to="/login">Have an Account? Click here to login</NavLink>
                    </div>
                </div>
            </div>
        </div>
    )
}
