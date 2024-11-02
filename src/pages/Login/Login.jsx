import React, { useState } from "react";
import Logo from "../../assets/logo.png";
import "./Login.css";

const Login = () => {

  const [signState, SetSignState]= useState("Sign In");
  return (
    <div className="login">
      <img src={Logo} alt="" className="login-logo" />
      <div className="login-form">
        <form>
          <h1 className="login-form-title">{signState}</h1>
          {signState==="Sign Up"? <input type="text" className="name" placeholder="Your name" />:<></>}
         
          <input type="email" className="name" placeholder="Email" />
          <input type="password" className="name" placeholder="Password" />
          <div className="remember">
            <input type="checkbox" />
            <label htmlFor="">Remember Me</label>
          </div>
          <button className="submit">{signState}</button>
        </form>
        <div className="form-switch">
        {signState==="Sign Up"?<p>Already have account? <span onClick={()=>{SetSignState("Sign In")}}>Sign In Now</span></p>
        :<p>New to Netflix? <span onClick={()=>{SetSignState("Sign Up")}}>Sign Up Now</span></p>
        }
        </div>
      </div>
    </div>
  );
};

export default Login;
