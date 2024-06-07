import React from 'react';
import './CSS/LoginSignup.css';

const LoginSignup = () => {
  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1>Sign Up</h1>
        <div className="loginsignup-fields"> 
          <label htmlFor="name">Your Name</label>
          <input type="text" id="name" placeholder='Your Name' />

          <label htmlFor="email">Email Address</label>
          <input type="email" id="email" placeholder='Email Address' />
        
        <label htmlFor="password">Password</label>
        <input type="password" id="password" placeholder='Password' />
        </div>

        <button type="button">Continue</button>
       

        <p className="loginsignup-login">Already have an account? <span>Login here</span></p>

        <div className='loginsignup-agree'>
          <input type='checkbox' name= '' id='' />
          {/* <label htmlFor='terms'></label> */}
          By continuing, I agree to the terms of use & privacy policy.
        </div>
      </div>
    </div>
  );
}

export default LoginSignup;