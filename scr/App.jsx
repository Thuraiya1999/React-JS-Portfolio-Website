import React from 'react'
import Header from './components/header/Header'
import Nav from '/components/nav/Nav'
import About from '/components/about/About'
import Skills from '/components/skills/Skills'
import Project from '/components/project/Project'
import Blog from '/components/blog/Blog'
import Contact from '/components/contact/Contact'
import Footer from '/components/footer/Footer'

const App = () =>{
return(
   <>
     <Header />
     <Nav />
      <About />
      <Skills/>
      <Project />
      <Blog />
      <Contact />
      <Footer />
   </>
)
}