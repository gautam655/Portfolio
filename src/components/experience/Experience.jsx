import React from 'react'
import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'
const Experience = () => {
  return (
    <section id="experience">
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>
      <div className='container experience_container'>
          <div className="experience_frontend">
              <h3>Techinical Skills</h3>
              <div className='experience_content'>
                <article className='experience_details'>
                      <BsPatchCheckFill className='experience_details-icon'/>
                      <div><h4>React</h4></div>
                    
                </article>
                <article className='experience_details'>
                      <BsPatchCheckFill className='experience_details-icon'/>
                      <div><h4>JavaScript</h4></div>
                      
                </article>
                 <article className='experience_details'>
                      <BsPatchCheckFill className='experience_details-icon'/>
                      <div><h4>CSS</h4></div>
                      
                </article>
                 <article className='experience_details'>
                      <BsPatchCheckFill className='experience_details-icon'/>
                      <div><h4>HTML</h4></div>
                   
                </article>
                 <article className='experience_details'>
                      <BsPatchCheckFill className='experience_details-icon'/>
                      <div><h4>Java</h4></div>
                    
                </article>
                <article className='experience_details'>
                      <BsPatchCheckFill className='experience_details-icon'/>
                      <div><h4>Python</h4></div>
                    
                </article>
                <article className='experience_details'>
                      <BsPatchCheckFill className='experience_details-icon'/>
                      <div><h4>CPP</h4></div>
                    
                </article>
                <article className='experience_details'>
                      <BsPatchCheckFill className='experience_details-icon'/>
                       <div><h4>MS Exel</h4></div>
                    
                </article>
                <article className='experience_details'>
                      <BsPatchCheckFill className='experience_details-icon'/>
                      <div><h4>MS PowerPoint</h4></div>
                    
                </article>
              </div>
          </div>
          <div className="experience_backend">
          <h3>Soft Skills</h3>
              <div className='experience_content'>
                <article className='experience_details'>
                      <BsPatchCheckFill className='experience_details-icon'/>
                      <div><h4>Leadership skills</h4> </div>     
                </article>
                <article className='experience_details'>
                      <BsPatchCheckFill className='experience_details-icon' />
                      <div><h4>Communication</h4></div>
                      
                </article>
                 <article className='experience_details'>
                      <BsPatchCheckFill className='experience_details-icon'/>
                      <div> <h4>Active Learning</h4></div>
                      
                </article>
                 <article className='experience_details'>
                      <BsPatchCheckFill className='experience_details-icon'/>
                      <div><h4>Confident</h4></div>
                   
                </article>
                 <article className='experience_details'>
                      <BsPatchCheckFill className='experience_details-icon'/>
                      <div><h4>Multitasker</h4></div>
                    
                </article>
                <article className='experience_details'>
                      <BsPatchCheckFill className='experience_details-icon'/>
                      <div><h4>Problem solving</h4></div>
                    
                </article>
                <article className='experience_details'>
                      <BsPatchCheckFill className='experience_details-icon'/>
                      <div><h4>Creative</h4></div>
                    
                </article>
                <article className='experience_details'>
                      <BsPatchCheckFill className='experience_details-icon'/>
                      <div><h4>Self Motivated</h4></div>
                    
                </article>
                <article className='experience_details'>
                      <BsPatchCheckFill className='experience_details-icon'/>
                      <div><h4>Panctual</h4></div>
                    
                </article>
              </div>
          </div>
      </div>
    </section>
  )
}

export default Experience