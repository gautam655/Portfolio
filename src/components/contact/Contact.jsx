import React from 'react'
import './contact.css'
import {MdOutlineMail} from 'react-icons/md'
import {SiLinkedin} from 'react-icons/si'
import {BsWhatsapp} from 'react-icons/bs'

const Contact = () => {
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact_container">
        <div className="contact_options">
          <article className="contact_option">
            <MdOutlineMail className='contact_option-icon'/>
            <h4>Email</h4>
            <h5>gautam2920@gmail.com</h5>
            <a href='mailto:gautam2920@gmail.com'>Send a mail</a>
          </article>
          <article className="contact_option">
            <SiLinkedin className='contact_option-icon'/>
            <h4>Linkedlin</h4>
            <h5>Gautam Prashar</h5>
            <a href='https://www.linkedin.com/in/gautam-prashar-733882191/' target='_blank'>Profile</a>
          </article>
          <article className="contact_option">
            <BsWhatsapp className='contact_option-icon'/>
            <h4>Whatsapp</h4>
            <h5>70XXXXXXXX</h5>
            <a href='https://web.whatsapp.com/' target='_blank'>Send a message</a>
          </article>
        </div>
        <form action=''>
          <input type="text" name="name" placeholder='Your Full Name' required />
          <input type="email" name="email" placeholder='Your Email' required/>
          <textarea name="message" rows="7" placeholder='Your message' required></textarea>
          <button type="submit" className='btn btn-primary'>Send Message</button>
        </form>
      </div>

    </section>
  )
}

export default Contact