import React, { Component } from 'react'
import './header.css'
import logo from './assets/img/Air-India-logo.png'
//import { Link } from 'react-router-dom';

class Header extends Component {
  state = {clicked: false};
  handleclick = () =>{
    this.setState({clicked:!this.state.clicked})
  }
  render(){
  return (
    <>
    <nav>
      <a href="home">
      <img src={logo} alt="Indian airlines logo"  width={180} height={80} />
      </a>
      <div>
        <ul id="navbar" className={this.state.clicked ? "#navbar active":"#navbar"}>
        <li>
            <a href="/home" className='active'>
              Home
            </a>
          </li>
          <li>
            <a href="index">
              Current Bookings
            </a>
          </li>
          <li>
            <a href="index">
              Book Flight
            </a>
          </li>
          <li>
            <a href="/">
              Logout
            </a>
          </li>
        </ul>
      </div>
      <div id="mobile" onClick={this.handleclick}>
        <i id="bar" className={this.state.clicked ? "fas fa-times":"fas fa-bars"}>
        </i>

      </div>
      
    </nav>
    </>
  )
}
}
export default Header

