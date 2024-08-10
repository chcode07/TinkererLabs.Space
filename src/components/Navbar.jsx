import React from 'react'
import './Navbar.css'
import globe from '../images/globe.jpg'
import { Link } from 'react-router-dom'
function Navbar() {
  return (
    <div className='nav-icons'>
           <Link to='/'>
           <img className='globe' src={globe} alt="" />
           </Link>
           <h1>ThinkerLabs.Space</h1>
            <ul className='nav-links'>
            <li> 
                <Link to='/register'>Register</Link>
            </li>
            <li>
              <Link to='/resource'>Resource</Link>
            </li>
            </ul>
    </div>
  )
}

export default Navbar