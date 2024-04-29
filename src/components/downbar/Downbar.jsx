import React from 'react'
import "./down.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBagShopping, faCube, faHome, faPerson, faSearch } from '@fortawesome/free-solid-svg-icons'

function Downbar() {
  return (
    <div className='down'>
    <div className="container">
        <div className="box">
        <FontAwesomeIcon icon={faHome}/>
        <span>Home</span>
        </div>
        <div className="box">
        <FontAwesomeIcon icon={faCube}/>
        <span>Categories</span>
        </div>
        <div className="box">
        <FontAwesomeIcon icon={faSearch}/>
        <span>Search</span>
        </div>
        <div className="box">
        <FontAwesomeIcon icon={faBagShopping}/>
        <span>Bag</span>
        </div>
        <div className="box">
        <FontAwesomeIcon icon={faPerson}/>
        <span>Profile</span>
        </div>
    </div>
    </div>
  )
}

export default Downbar