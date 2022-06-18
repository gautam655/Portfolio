import React from 'react'
import './footer.css'
import {BsLinkedin,BsInstagram,BsGithub} from 'react-icons/bs'
const Footer = () => {
  return (
    <footer>
     
      <ul className='links'>
        <li><a href='#'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#experience'>Expeirience</a></li>
        <li><a href='#portfolio'>Portfolio</a></li>
        <li><a href='#contact'>Contact</a></li>
      </ul>

      <div className="footer_socials">
        <a href="https://www.linkedin.com/in/gautam-prashar-733882191/"><BsLinkedin/></a>
        <a href="https://www.instagram.com/gautam_chd/"><BsInstagram/></a>
        <a href="https://github.com"><BsGithub/></a>
      </div>
      <div className="footer_copyright">
        <small>&copy;All right reserved</small>
      </div>
    </footer>
  )
}

export default Footer