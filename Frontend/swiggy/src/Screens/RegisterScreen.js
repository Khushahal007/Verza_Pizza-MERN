import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { registerUser } from '../Actions/userAction'
import Success from '../Components/Success'
import Loading from '../Components/Loading'
import Error from '../Components/Error'
import axios from 'axios'
// import { registerUserReducer } from '../Reducers/userReducer'



export default function RegisterScreen() {

    const [name, setname] = useState('')
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')
    const [cpassword, setcpassword] = useState('')
    const registeruser = useSelector(state => state.registerUserReducer)
    const { error, loading, success } = registeruser

    function resetFormFields() {
        setname('')
        setemail('')
        setpassword('')
        setcpassword('')
    }



    const dispatch = useDispatch()


    async function register() {
        if (password !== cpassword) {
            alert('password does not match')
        } else {
            const user = {
                name, email, password
            }
            console.log(user)
            dispatch(registerUser(user))
            resetFormFields()
        }
    }

    
    return (
        <div>

            <div className="row justify-content-center">
                <div className="col-md-4 mt-5 text-left shadow-lg p-3 mb-5 bg-white rounded">

                    {loading && (<Loading />)}
                    {success && <Success successMessage="User Registered Successfully" />}

                    {error && <Error errorMessage='Email already register' />}

                    <h2 className='text-center m-2' style={{ fontSize: '30px' }}>Create an Account</h2>
                    <div>
                        <input required type="text" placeholder='Name' className='form-control' value={name} onChange={(e) => { setname(e.target.value) }} />
                        <input required type="text" placeholder='Email' className='form-control' value={email} onChange={(e) => { setemail(e.target.value) }} />
                        <input required type="text" placeholder='Password' className='form-control' value={password} onChange={(e) => { setpassword(e.target.value) }} />
                        <input required type="text" placeholder='Confirm Password' className='form-control' value={cpassword} onChange={(e) => { setcpassword(e.target.value) }} />
                        <button className="btn mt-3 col-12" onClick={register}>Register</button>
                        <NavLink className="p-1" to="/login">Have an Account? Click here to login</NavLink>


                    </div>
                </div>
            </div>

        </div>
    )
}
