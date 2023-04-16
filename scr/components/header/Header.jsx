import React from 'react'
import './header.css'
import CTA from './CTA'
import ABOUT from '../../assest/about.jpg'
import HeaderSocial from './HeaderSocials'

const Header = () => {
  return (
    <header>
        <div className="container header__container">
            <h5>Hello I'm</h5>
            <h1>Thuraiya Ahmed</h1>
            <h5 className="text__light">fullstack Developer</h5>
            <CTA />
            <HeaderSocial />

        <div className='me'>
         <img scr={ABOUT} alt="about" />
        </div>

        <a href="#contact" className='scroll__down'>Scroll Down</a>
        </div>
    </header>
  )
}

export default Header