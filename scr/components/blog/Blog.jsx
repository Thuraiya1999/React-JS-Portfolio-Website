import React from 'react'
import './blog.css'
import {BiCheck} from 'react-icons/bi'

const Blog = () => {
  return (
    <section id='blog'>
        <h5>What I offer</h5>
        <h2>Services</h2>

        <div className="container blog__container">
            <article className="blog">
                <div className="blog__head">
                  <h3>UI/UX Design</h3>  
                </div>

                <ul className='blog__list'>
                    <li>
                    <BiCheck className='blog__list-icon' />
                    <p> Lorem ipsum dolor sit amet consectetur elit.</p>
                    </li>
                    <li>
                    <BiCheck className='blog__list-icon' />
                    <p> Lorem ipsum dolor sit amet consectetur elit.</p>
                    </li>
                    <li>
                    <BiCheck className='blog__list-icon' />
                    <p> Lorem ipsum dolor sit amet consectetur elit.</p>
                    </li>
                    <li>
                    <BiCheck className='blog__list-icon' />
                    <p> Lorem ipsum dolor sit amet consectetur elit.</p>
                    </li>
                    <li>
                    <BiCheck className='blog__list-icon' />
                    <p> Lorem ipsum dolor sit amet consectetur elit.</p>
                    </li>
                    <li>
                    <BiCheck className='blog__list-icon' />
                    <p> Lorem ipsum dolor sit amet consectetur elit.</p>
                    </li>
                </ul>
            </article>
            END OF UI/UX
            <article className="blog">
                <div className="blog__head">
                  <h3>Web Development</h3>  
                </div>

                <ul className='blog__list'>
                    <li>
                    <BiCheck className='blog__list-icon' />
                    <p> Lorem ipsum dolor sit amet consectetur elit.</p>
                    </li>
                    <li>
                    <BiCheck className='blog__list-icon' />
                    <p> Lorem ipsum dolor sit amet consectetur elit.</p>
                    </li>
                    <li>
                    <BiCheck className='blog__list-icon' />
                    <p> Lorem ipsum dolor sit amet consectetur elit.</p>
                    </li>
                    <li>
                    <BiCheck className='blog__list-icon' />
                    <p> Lorem ipsum dolor sit amet consectetur elit.</p>
                    </li>
                    <li>
                    <BiCheck className='blog__list-icon' />
                    <p> Lorem ipsum dolor sit amet consectetur elit.</p>
                    </li>
                    <li>
                    <BiCheck className='blog__list-icon' />
                    <p> Lorem ipsum dolor sit amet consectetur elit.</p>
                    </li>
                    <li>
                    <BiCheck className='blog__list-icon' />
                    <p> Lorem ipsum dolor sit amet consectetur elit.</p>
                    </li>
                </ul>
            </article>
            {/*WEB DEVELOPMENT*/}
            <article className="blog">
                <div className="blog__head">
                  <h3>Content Creation</h3>  
                </div>

                <ul className='blog__list'>
                    <li>
                    <BiCheck className='blog__list-icon' />
                    <p> Lorem ipsum dolor sit amet consectetur elit.</p>
                    </li>
                    <li>
                    <BiCheck className='blog__list-icon' />
                    <p> Lorem ipsum dolor sit amet consectetur elit.</p>
                    </li>
                    <li>
                    <BiCheck className='blog__list-icon' />
                    <p> Lorem ipsum dolor sit amet consectetur elit.</p>
                    </li>
                    <li>
                    <BiCheck className='blog__list-icon' />
                    <p> Lorem ipsum dolor sit amet consectetur elit.</p>
                    </li>
                    <li>
                    <BiCheck className='blog__list-icon' />
                    <p> Lorem ipsum dolor sit amet consectetur elit.</p>
                    </li>
                    <li>
                    <BiCheck className='blog__list-icon' />
                    <p> Lorem ipsum dolor sit amet consectetur elit.</p>
                    </li>
                </ul>
            </article>
            {/*END OF CONTENT CREATION*/}
        </div>
    </section>
  )
}

export default Blog