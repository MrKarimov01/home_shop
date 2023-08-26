import React from 'react'
import './Header.css'
import logo from './../images/logo.png'
import home from './../images/home-icon.png'

const Header = () => {
  return (
    <div className="Header">
        <div className="nav-bar">
            <div className="logo">
                <img src={logo} />
                <h1>Houzing</h1>
            </div>
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">Properties</a></li>
              <li><a href="#">Contacts</a></li>
            </ul>
            <button className='login'>Login</button>
        </div>
        <div className="search-box">
          <div className="input-box">
            <img src={home} />
            <input type="text" placeholder='Enter an address, neighborhood, city, or ZIP code'/>
          </div>
          <button>Search</button>
        </div>
        <h1 className='bran-name'>Properties</h1>
        <p className='bran-about'>Nulla quis curabitur velit volutpat auctor bibendum consectetur sit.</p>
    </div>
  )
}

export default Header