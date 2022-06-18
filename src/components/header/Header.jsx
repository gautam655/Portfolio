import React from 'react';
import './header.css';
import CTA from './CTA'
import HeaderSocials from './HeaderSocials';
import ME1 from '../../assets/new.JPG'
const Header = () => {
  return (
    <header>
      <div className="container header_container">
        <h5>Hello I'm</h5>
        <h1>Gautam</h1>
        <h5 className="text-light">Fullstack Development</h5>
        <CTA />
        <HeaderSocials/>
        { <div className='me'>
          <img src={ME1} alt="me" className='image' />
        </div> }
        <a href="#contact" className='scroll-down'>Scroll Down</a>

      </div>
    </header>
  )
}

export default Header