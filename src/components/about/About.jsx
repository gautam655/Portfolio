import React from "react";

import './about.css';
import ME from '../../assets/1910991431-GAUTAM PRASHAR.jpg'

import {BsBookmarkDash} from 'react-icons/bs'
import {MdOutlineSchool} from 'react-icons/md'
import {RiAwardLine} from 'react-icons/ri'

export const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about_container">
          <div className="about_me">
              <div className="about_me-image">
                  <img src={ME} alt="me" />
              </div>
          </div>
          <div className="about_content">
              <div className="about_cards">
                <article className="about_card">
                    <BsBookmarkDash className="about_icon"/>
                    <h5>Experence</h5>
                    <small>Fresher</small>
                </article>
                <article className="about_card">
                    <MdOutlineSchool className="about_icon"/>
                    <h5>Institution</h5>
                    <small>Chitkara University</small>
                </article>
                <article className="about_card">
                    <RiAwardLine className="about_icon"/>
                    <h5>CGPA</h5>
                    <small>9.98</small>
                </article>
              </div>
              <p>
              I am a fast learner and a team player with excellent analytical skills, who is willing to relocate anywhere. My objective is to obtain a position where
              I can explore myself and result into a resourceful, innovative, and flexible employee for the organization. Learning new skills using those in
              achieving the organizational goals.
              </p>
              <a href="#contact" className="btn btn-primary">Let's Talk</a>
          </div>
      </div>
    </section>
  )
}
export default About;