import React from 'react'
import About from './About/About'
import Project from './Project/Project'
import Contact from './Contact/Contact'
import Hero from './Hero/Hero'
import Footer from '../Footer/Footer'
import Blog from './Blog/Blog'

function Home() {
  return (  
    <main className="font-nunito snap-y snap-mandatory h-screen overflow-y-scroll overflow-x-hidden">
      <Hero />
      <About/>
      <Project/>
      <Blog/>
      <Contact/>
      <Footer/>
    </main>
  )
}

export default Home