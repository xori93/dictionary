import React from 'react'
import './Footer.css'
import { FaInstagram } from "react-icons/fa"
import { FaXTwitter } from "react-icons/fa6"
import { FaFacebook } from "react-icons/fa"



function Footer() {
  return (
    <div className='footer-container'>
        <FaInstagram />
        <FaXTwitter />
        <FaFacebook />
    </div>
  )
}

export default Footer