import React from 'react'
import './about.css'
import ABOUT from '../../assest/about.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fa'
import {HiOutlineFolderOpen} from 'react-icons/hi'

const About = () => {
    return(
        <section id='about'>
            <h5>Get To Know</h5>
            <h2>About me</h2>
            <div className="container about__container">
                <div className="about__me">
                <div className='me'>
                <img scr={ABOUT} alt="about" />
                </div> 

                </div>

               <div className="about__content">
                <div className="about__cards">
                    <article className="about__card">
                        <FaAward className="about__icon" />
                        <h5>Experience</h5>
                        <small>1+ Year working</small>
                    </article>

                    <article className="about__card">
                        <FiUsers className="about__icon" />
                        <h5>Clients</h5>
                        <small>100+ worldwide</small>
                    </article>

                    <article className="about__card">
                        <HiOutlineFolderOpen className="about__icon" />
                        <h5>projects</h5>
                        <small>20+ completed</small>
                    </article>
                </div>

                <p>
                As a Full Stack Web Developer, I have a wide range of technical skills and experience in both front-end and back-end web development. 
                I am proficient in programming languages such as HTML, CSS, JavaScript, Python, and Ruby, and 
                I have knowledge of various front-end frameworks like React and Angular, as well as server-side frameworks like Node.js and Ruby on Rails.
                </p>

                <a href="#contact" className='btn btn-primary'>Let's Talk</a>


             </div>
            </div>
        </section>
    )
}

export default About 