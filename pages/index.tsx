import { NextPage } from 'next'
import Head from 'next/head'
import React from 'react'
import About from '../components/About'
import ContactMe from '../components/ContactMe'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Projects from '../components/Projects'
import Skills from '../components/Skills'

 const Home:NextPage= ()=> {
  return (
    <div className="max-w-[2000px] mx-auto font-nunito bg-[rgba(36,36,36)] text-white  snap-proximity snap-y  overflow-x-hidden z-0  scroll-smooth">
      <Head>
        <title>Soukayna&apos;s Portfolio</title>
      </Head>
      <Header/> 
      {/* Hero */}
      <section id="hero" >
        <Hero/>
      </section>
      {/* About */}
      <section id="about" >
        <About/>
      </section>

      {/* Skills */}
      <section id="skills" >
         <Skills/>
      </section>
      {/* Projects */}
      <section id="projects"  >
        <Projects/>
      </section>
      {/* Contact Me */}

      <section id="contact"  >
        <ContactMe/>
      </section>
     
    </div>
  )
} 

export default Home;