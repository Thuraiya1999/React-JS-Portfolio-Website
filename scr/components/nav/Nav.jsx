import React from 'react'
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {AiOutlineFundProjectionScreen} from 'react-icons/ai'
import {FaBlogger} from 'react-icons/fa'
import {BiMessageSquareDetail} from 'react-icons/bi'
import {useState} from 'react'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
        <a href="#" onclick={() => setActiveNav('#')} className={activeNav ==='#' ?'active' : ''} ><AiOutlineHome/></a>
        <a href="#about" onclick={() => setActiveNav('#about')} className={activeNav ==='#about' ?'active' : ''}><AiOutlineUser/></a>
        <a href="#project" onclick={() => setActiveNav('#project')} className={activeNav ==='#project' ?'active' : ''}><AiOutlineFundProjectionScreen/></a>
        <a href="#blog" onclick={() => setActiveNav('#blog')} className={activeNav ==='#blog' ?'active' : ''}><FaBlogger/></a>
        <a href="#contact" onclick={() => setActiveNav('#contact')} className={activeNav ==='#contact' ?'active' : ''}><BiMessageSquareDetail/></a>
    </nav>
  )
}

export default Nav