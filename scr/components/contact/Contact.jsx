import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {FaWhatsapp} from 'react-icons/fa'

const Contact = () => {
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container content__container">
        <div className="contact__options">
          <article className="contact__options">
           <MdOutlineEmail className='contact__option' />
            <h4>Email</h4>
            <h5>athuraiya999@gmail.com</h5>
            <a href="mailto:athuraiya999@gmail.com" target="__blank">Send a message</a>
          </article>
          <article className="contact__options">
           <RiMessengerLine className='contact__option'  />
            <h4>Messenger</h4>
            <h5>Thuraiya Ahmed</h5>
            <a href="https://n.me/Thuraiya.Ahmed"  target="__blank">Send a message</a>
          </article>
          <article className="contact__options">
           <FaWhatsapp className='contact__option' />
            <h4>WhatsApp</h4>
            <h5>+986 71738800</h5>
            <a href="https://api.whatsapp.com.send?phone=+98671738800"  target="__blank">Send a message</a>
          </article>
        </div>
        {/*END OF CONTACT OPTIONS*/}
        <form action="">
          <input type="text" name='name' placeholder='Your Full Name' required/>
          <input type="email" placeholder='Your Email' required/>
          <input type="message" placeholder='Your Message' required></textarea>
          <button type="submit" className='btn btn-primary'>Send Message</button>

        </form>
      </div>
    </section>
  )
}

export default Contact