import React,{useState} from "react"
import axios from "axios";
import { NavLink,useNavigate } from "react-router-dom";
import './login.css';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate=useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      axios.defaults.headers.post['Content-Type'] = 'application/json';
      const response = await axios.post('http://127.0.0.1:8000/login/', { email:email, password:password});
      localStorage.setItem('access_token', JSON.stringify(response.data.access));
      localStorage.setItem('refresh_token', JSON.stringify(response.data.refresh));
      // Redirect to dashboard or other page
      navigate('/home')
    } catch (error) {
      console.log(email,password)
      console.log(error.response.data)
      setErrorMessage(error.response.data.detail);
    }
  };
  

  // const handleSubmit = async (event) => {
  //   event.preventDefault();
  //   try {
  //     const response = await axios.post('http://127.0.0.1:8000/login/', { email, password });
  //     localStorage.setItem('access_token', response.data.access);
  //     localStorage.setItem('refresh_token', response.data.refresh);
  //     // Redirect to dashboard or other page
  //     navigate('/home')
  //   } catch (error) {
  //     console.log(error.data)
  //     setErrorMessage('Invalid login credentials');
  //   }
  // };
  return (
    <div className="background1">
      <form onSubmit={handleSubmit} method="post">
        
        <h3>Login </h3>
        <label htmlFor="email">Email</label>
        <input type="email" placeholder="Enter email" id="email" name="email" value={email} onChange={(event) => setEmail(event.target.value)}/>
    
        <label htmlFor="password">Password</label>
        <input type="password" placeholder="Password" id="password" name="password" value={password} onChange={(event) => setPassword(event.target.value)}/>
        {errorMessage && <div>{errorMessage}</div>}
        <button type="submit">Log In</button>
        <NavLink to="/"><div className="ne">New User</div></NavLink>
  
      </form>
    </div>
  )
}


export default LoginForm
