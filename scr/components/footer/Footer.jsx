import React from 'react'
import {AiOutlineFacebook} from 'react-icons/ai'
import {AiOutlineInstagram} from 'react-icons/ai'
import {AiFillTwitterSquare} from 'react-icons/at'

const Footer = () => {
  return (
    <footer>
        <a href="#"className='footer__logo'>Thuraiya</a>
        
        <ul className='permalinks'>
            <li><a href="#">Home</a></li>
            <li><a href="# about">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#blog">Blog</a></li>
            <li><a href="#portfolio">Portfolio</a></li>
            <li><a href="#testimonials">Testimonials</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>

        <div className="footer__socials">
            <a href="https://facebook.com"><AiOutlineFacebook/></a>
            <a href="https://instagram.com"><AiOutlineInstagram/></a>
            <a href="https://twitter.com"><AiFillTwitterSquare/></a>
        </div>
        
        <div className="footer__copyright">
            <small>&copy; Thuraiya Ahmed. All rights reserved.</small>
        </div>
    </footer>
  )
}

export default Footer