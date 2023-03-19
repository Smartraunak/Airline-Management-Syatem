import React from "react"
import { NavLink } from "react-router-dom";
import './login.css';

function LoginForm() {
  return (
    <div className="background1">
      <form method="post">
        
        <h3>Login </h3>
        {csrf_token}
        <label htmlFor="username">Username</label>
        <input type="text" placeholder="Enter Username" id="username" name="username" />
    
        <label htmlFor="password">Password</label>
        <input type="password" placeholder="Password" id="password" name="pass" />
        <button type="submit">Log In</button>
        <NavLink to="/"><div className="ne">New User</div></NavLink>
  
      </form>
    </div>
  )
}

const csrf_token = <input type="hidden" name="csrfmiddlewaretoken" value="{{ csrf_token }}"/>;

export default LoginForm
