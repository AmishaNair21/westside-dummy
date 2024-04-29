import React from 'react'
import "./nav.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faHome, faUser, faCog, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

function Navbar() {
  return (
    <div>
        <nav className='nav-bar'>
   <div className='flex'>  <div className='logo'>
                <img src="https://asset.brandfetch.io/ideEOG_IyC/idH6tQGSwy.png" alt="logo"/>

            </div>
            <span className='sidebar'>
            <FontAwesomeIcon className='sp' icon={faBars} />
            </span></div>     
        </nav>


    </div>
  )
}

export default Navbar