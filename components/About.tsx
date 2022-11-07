import React, { useEffect, useRef } from 'react'
import {motion} from 'framer-motion'
import Image from 'next/image'
import lottie from '../src/lottie-files/design-isometric-concept.json'
import { Player } from '@lottiefiles/react-lottie-player';

const aboutAnimation={
   initial:{
     opacity:0,
     scale:0.7
    },
    whileInView:{
        opacity:1,
        scale:1
    },
    transition:{
        duration:1.2
   },
   viewport:{
    once:true
   }
}
export default function About() {
    


  return (
    <div className='h-screen max-h-[800px]   text-center  md:text-left  max-w-7xl px-10 mx-auto  '>
        <h3 className='pt-16 pb-12  sm:pt-24 sm:pb-0 uppercase tracking-[20px] text-gray-500 text-2xl text-center'>About</h3>
        <div className=' flex  md:pt-24 flex-col md:flex-row justify-evenly items-center overflow-hidden'>

            <motion.div 
                    initial={ {...aboutAnimation.initial}}
                    transition={aboutAnimation.transition}
                    whileInView={aboutAnimation.whileInView}
                    viewport={aboutAnimation.viewport}
                    className='w-64 h-64 md:h-96 md:w-96 hidden sm:block   relative mb-6'>
                    <Image layout='fill' objectFit='cover' src="/girl-work-on-laptop-1792788-1519329.png"/>

                        
            </motion.div>
            
                <motion.div
                initial={ {...aboutAnimation.initial}}
                transition={aboutAnimation.transition}
                whileInView={aboutAnimation.whileInView}
                viewport={aboutAnimation.viewport}
                className='space-y-10 px-0 md:px-10  flex-1 '>
                    <h4 className='text-2xl md:text-4xl font-semibold '>
                        Here is a <span className='underline decoration-[#F7AB0A]/50 '>little</span>  Background
                    </h4>
                    <p className='text-base lg:text-lg'> 
                    After obtaining my master's degree in applied mathematics, I discovered the world of web development, this is where I made the decision to move towards this field and change career altogether. I signed up for <a className='underline decoration-[#F7AB0A]/50' target="_blank" href="https://openclassrooms.com/">openclassrooms</a>  web development training program. I finished all the associated courses then I deepened my knowledge on other platforms like <a className='underline decoration-[#F7AB0A]/50' target="_blank" href="https://w3schools.com/">W3schools</a>, <a className='underline decoration-[#F7AB0A]/50' target="_blank" href="https://developer.mozilla.org/">developerMozilla</a>, <a className='underline decoration-[#F7AB0A]/50' target="_blank" href="https://capitainewp.io/">capitainewp</a>, <a className='underline decoration-[#F7AB0A]/50' target="_blank" href="https://grafikart.fr/">Grafikart</a> and many other websites as well as youtube channels like <a className='underline decoration-[#F7AB0A]/50' target="_blank" href="https://www.youtube.com/c/TheNetNinja">TheNetNinja</a>, <a className='underline decoration-[#F7AB0A]/50' target="_blank" href="https://www.youtube.com/c/FreeCodeCamp">FreeCodeCamp</a> ...
                    </p>
                </motion.div>
        </div>

    </div>
  )
}
