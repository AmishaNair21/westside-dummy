import React from 'react'
import "./foot.scss";
import Button from '../Buttons/Button';
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

function Footer() {
  return (
    <div className='containers'>
      
        <form>
        <h2>Join Our Newsletter</h2>
        <input type="text" placeholder='Email Id' />
        <br />
       <Button text="Submit"/>
        </form>
      <div className="social">
      <p className='pop'>Follow Us On</p>
        <ul className="icons">
      
            <li className="icon"><FaTwitter className='ic'/></li>
            <li className="icon"><FaFacebook className='ic'/></li>
            <li className="icon"><FaInstagram className='ic'/></li>
            <li className="icon"><FaYoutube className='ic'/></li>
        </ul>
        <div className="download">
            <p>Download Our Mobile App</p>
            <div className="store">
                <a href="#"><img src="../../src/assets/googleplay.png"/></a>
                <a href="#"><img src="../../src/assets/App Store.png"/></a>
               
            </div>
        </div>

      </div>
    </div>
  )
}

export default Footer