import React from 'react';
import {SocialIcon} from 'react-social-icons';
import { motion } from "framer-motion"
import Link from 'next/link';

type Props = {}
const headerAnimation={
   initial:{
    x:-500,
    opacity:0,
    scale:0.5
   },
   animate:{
    x:0,
    opacity:1,
    scale:1,
},
    transition:{
     duration:1.5
   }
}

export default function Header({}: Props) {
  return (
    <header  className='bg-black/80 sm:bg-black/0 top-0 p-5 sticky flex items-start justify-between max-w-7xl mx-auto z-20
    xl:items-center overflow-hidden '>
        <motion.div 
        initial={headerAnimation.initial}
        animate={headerAnimation.animate}
        transition={headerAnimation.transition}
        className='flex flex-row items-center'>
            <SocialIcon 
            target="_blank"
            url='https://github.com/soukaynaBen' 
            fgColor='gray' 
            bgColor='transparent'/>

            <SocialIcon 
            target="_blank" 
            url='https://www.linkedin.com/in/souka-ben-843262123' 
            fgColor='gray' 
            bgColor='transparent'/>
        </motion.div>
          <Link href="#contact">
        <motion.div 
        initial={{...headerAnimation.initial,x:500}}
        animate={headerAnimation.animate}
        transition={headerAnimation.transition}
        className='flex flex-row items-center cursor-pointer'>

            <SocialIcon 
            className='cursor-pointer'
            network='email'
            fgColor='gray' 
            bgColor='transparent'/>
            <p className='uppercase hidden md:inline-flex text-sm text-gray-400'>Get In Touch</p>

        </motion.div>
            </Link>
    </header>
  )
}