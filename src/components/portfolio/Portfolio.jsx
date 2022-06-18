import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/IMG1.webp'
import IMG2 from '../../assets/IMG2.webp'
import IMG3 from '../../assets/IMG3.webp'



const Portfolio = () => {
  return (
    <section id="portfolio">
        <h5>My React Work</h5>
        <h2>Portfolio</h2>
        <div className="container portfolio_container">
          <article className='portflio_iteam'>
            <div className="portfolio_iteam-image">
                <img src={IMG1} alt=""/>
            </div>
            <h3>Weather API</h3>
            <div className="portfolio_iteam-cta">
              <a href="https://github.com" className='btn'>Github</a>
              <a href="https://dribbble.com/Alien_pixels" className='btn btn-primary' target="_blank">Live Demo</a>
            </div>
          </article>
          <article className='portflio_iteam'>
            <div className="portfolio_iteam-image">
                <img src={IMG2} alt=""/>
            </div>
            <h3>Portfolio Website</h3>
            <div className="portfolio_iteam-cta">
              <a href="https://github.com" className='btn'>Github</a>
              <a href="https://dribbble.com/Alien_pixels" className='btn btn-primary' target="_blank">Live Demo</a>
            </div>
          </article>
          <article className='portflio_iteam'>
            <div className="portfolio_iteam-image">
                <img src={IMG3} alt=""/>
            </div>
            <h3>Static Hotel Website</h3>
            <div className="portfolio_iteam-cta">
              <a href="https://github.com" className='btn'>Github</a>
              <a href="https://dribbble.com/Alien_pixels" className='btn btn-primary' target="_blank">Live Demo</a>
            </div>
          </article>
         
        </div>
    </section>
  )
}

export default Portfolio