import React from 'react'
import './skills.css'
import {BsFillPatchCheckFill} from 'react-icons/bs'

const experience = () => {
  return (
    <section id='skills'>
      <h5>What skills I have</h5>
      <h2>My skills</h2>

      <div className="container skills__container">
        <div className="skills_frontend">
          <h3>Fronted Development</h3>
          <div className="skills__content">
            <article className='skills_details'>
              <BsFillPatchCheckFill className='skills__details-icon' />
             <div>
             <h4>HTML</h4>
              <small className='text-light'>Experienced</small>
             </div>
            </article>
            <article className='experience_details'>
              <BsFillPatchCheckFill className='skills__details-icon' />
              <div>
              <h4>CSS</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience_details'>
              <BsFillPatchCheckFill className='skills__details-icon' />
              <div>
              <h4>JavaScript</h4>
              <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience_details'>
              <BsFillPatchCheckFill className='skills__details-icon' />
              <div>
              <h4>Bootstrap</h4>
              <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience_details'>
              <BsFillPatchCheckFill className='skills__details-icon' />
              <div>
              <h4>Tailwind</h4>
              <small className='text-light'>Basic</small>
              </div>
            </article>
            <article className='experience_details'>
              <BsFillPatchCheckFill className='skills__details-icon' />
              <div>
              <h4>React</h4>
              <small className='text-light'>Basic</small>
              </div>
            </article>
          </div>
        </div>
        {/*END OF FRONTEND*/}

        <div className="skills__backend">
        <h3>Backend Development</h3>
          <div className="experience__content">
            <article className='experience_details'>
              <BsFillPatchCheckFill className='skills__details-icon' />
              <div>
              <h4>Node Js</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience_details'>
              <BsFillPatchCheckFill className='skills__details-icon' />
              <div>
              <h4>MangoDB</h4>
              <small className='text-light'>Basic</small>
              </div>
            </article>
            <article className='experience_details'>
              <BsFillPatchCheckFill className='skills__details-icon' />
              <div>
              <h4>PHP</h4>
              <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience_details'>
              <BsFillPatchCheckFill className='skills__details-icon' />
              <div>
              <h4>MYSQL</h4>
              <small className='text-light'>Basic</small>
              </div>
            </article>
            <article className='experience_details'>
              <BsFillPatchCheckFill className='skills__details-icon' />
              <div>
              <h4>Python</h4>
              <small className='text-light'>Basic</small>
              </div>
              </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills