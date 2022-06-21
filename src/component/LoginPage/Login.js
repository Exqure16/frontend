import React from 'react'
import './Login.css';
import hands from '../images/Hands.png';
import logo from '../images/logo.png';
import { IoMailOutline } from "react-icons/io5";
import { VscLock } from "react-icons/vsc";

const Login = () => {
  return (
    <div className='login-page'>

      <section className='left-box'>
        <div className='logo-div'><img src= {logo} /></div>
        <img src= {hands} className="hands" alt='shaking hands'/>
      </section>
      <section className='right-box'>
           <div className='login-box'>
              <h2>Login </h2>
              <p>Welcome back! please enter your login details</p>
              <form>
                <label>Email</label>
               <div className="box"> <IoMailOutline className='icon'/><input type='email' name='email' placeholder='Enter Email' className='login-input'></input></div>
                <label>Password</label>
                <div className="box"> <VscLock className='icon'/> <input type='password' name='password' placeholder='Enter Password' className='login-input'></input></div>
                 
                 <div className='settings'>
                    <div className='check'>
                      <input type="checkbox" id='check'></input> 
                      <label>Remember Me</label>
                      </div>

                    <p id='blue'>Forgot Password?</p>  
                  
                 </div>
                 

                 <button className='login-btn'>Login</button>
                 <p className='end'>Not registered? <span id='blue'>Sign Up</span></p>

              </form>
           </div>
      </section>
    </div>
  )
}

export default Login