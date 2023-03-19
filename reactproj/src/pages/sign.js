import React, { useState } from 'react';
import axios from 'axios';
import { NavLink } from "react-router-dom";
import'./sign.css';

function SignupForm() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password1: '',
    password2: ''
  });
//   const headers = {
//     'Content-Type': 'application/json'
// };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('http://127.0.0.1:8000/basic/',{
        username:formData["username"],
        email:formData["email"],
        password:formData["password1"],
    })
      .then((response) => {
        console.log(response.data);
        // Update state with response data
      })
      .catch((error) => {
        console.log(error);
      });
  }

  const handleInputChange = (event) => {
    const target = event.target;
    const name = target.name;
    const value = target.value;

    setFormData({
      ...formData,
      [name]: value
    });
  }

  return (
    <>
    <div className="background">
      <div className="shape"></div>
      <div className="shape"></div>
    </div>
    <form onSubmit={handleSubmit}>
      <h3>Signup</h3>

      <label htmlFor="username">Username</label>
      <input type="text" placeholder="Username" name="username" id="username" value={formData.username} onChange={handleInputChange} />

      <label htmlFor="email">Email</label>
      <input type="email" placeholder="Email or Phone" name="email" id="email" value={formData.email} onChange={handleInputChange} />

      <label htmlFor="password1">Password</label>
      <input type="password" placeholder="Password" id="password1" name="password1" value={formData.password1} onChange={handleInputChange} />

      <label htmlFor="password2">Confirm Password</label>
      <input type="password" placeholder="Confirm Password" id="password2" name="password2" value={formData.password2} onChange={handleInputChange} />
      <button type="submit">Signup</button>

      <NavLink to="/login"><div className='ne'>Already have account</div></NavLink>
    </form>
    </>
  );
}

export default SignupForm;
