import Link from 'next/link'
import React from 'react'
import {Cursor,useTypewriter} from 'react-simple-typewriter'
import { Player } from '@lottiefiles/react-lottie-player';
import lottie from '../src/lottie-files/motion.json'


const css={
  
    backgroundPosition:"center" ,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundImage: " url('/heroImage.png') " ,

}
export default function Hero() {
    const [text,count]=useTypewriter({
    words: ['My name is Ben Lahbib Soukayna', 'I\'m a developer', 'I love web developement', 'And this is my Portfolio!'],
    loop: true,
    onLoopDone: () => console.log(`loop completed after 3 runs.`),
    typeSpeed:70,
    deleteSpeed:50,
    delaySpeed:1000,
    })
  return (
    <div className='relative h-screen max-h-[800px] flex flex-col space-y-8 items-center justify-start text-center overflow-hidden before:absolute before:left-0 before:top-0 before:h-full before:w-full  before:bg-black before:opacity-5' style={css}>

        <div className=' h-48 w-48 mx-auto ' >
            <Player
            src={lottie}
            className="player"
            loop
            autoplay
          />
        </div>
        <div className='z-20 '>
          <h2 className='text-center text-lg drop-shadow-lg shadow-white uppercase text-white/80 pb-2 tracking-[12px]'>
            Web developer
          </h2>
          <h1 className='text-5xl lg:text-6xl font-semibold px-10 '>
            <span className='mr-3'>{text}</span>
            <Cursor cursorColor='#F7AB0A' />    
          </h1>
          <div className='pt-5'>
            <Link href="#about" >
            <button className='heroButton mb-5'>About</button>
            </Link>
             <Link href="#skills">
              <button className='heroButton mb-5'>Skills</button>
             </Link>
             <Link href="#projects">
               <button className='heroButton mb-5'>Projects</button>
             </Link>
            <Link href="#contact">
              <button className='heroButton mb-5'>Contact</button>
            </Link>
          </div>
        </div>
    </div>
  )
}
