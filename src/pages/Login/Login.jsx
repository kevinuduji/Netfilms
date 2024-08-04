import React, { useState } from 'react'
import logo from '../../assets/netfilms_logo.png'
import './Login.css'

const Login = () => {

  const [signState, setSignState] = useState("Sign In")

  return (
    <div className='login'>
        <img src={logo} alt="" className='login-logo' />
        <div className="login-form">
            <h1>{signState}</h1>
            <form>
                {signState === "Sign Up"?<input type="text" placeholder='Full Name' />:<></>}
                {/* <input type="text" placeholder='Username' /> */}
                <input type="email" placeholder='Email' />
                <input type="password" placeholder='Password' />
                <button>{signState}</button>
                <div className='form-help'>
                  <div className='remember'>
                    <input type="checkbox" />
                    <label htmlFor="">Remember Me</label>
                  </div>
                  <p>Forgot Password?</p>
                </div>
            </form>
            <div className="form-switch">
              {signState === "Sign In"?
                <p>New to Netfilms? <span onClick={() => {setSignState("Sign Up")}}>Sign Up Now</span></p>
                : <p>Already have an account? <span onClick={() => {setSignState("Sign In")}}>Sign In Now</span></p>
              }
            </div>
        </div>
    </div>
  )
}

export default Login