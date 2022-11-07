import React from 'react'
import {motion} from 'framer-motion'

export default function BackgoundCircle() {
    const backgroundAnimation={
        initial:{
            opacity:1,

        },
        animate:{
            scale:[1,2,2,3,1],
            opacity:[0.1,0.2,0.4,0.8,0.1,1.0],
            borderRadius:["20%","20%","50%","80%","20%"]
        },
        transition:{
            duration:2.5
        }
    }
  return (
    <motion.div 
    initial={backgroundAnimation.initial}
    animate={backgroundAnimation.animate} 
    transition={backgroundAnimation.transition}
    className='relative flex justify-center items-center '>
        <div className='absolute border-[#383838] border rounded-full h-[200px] w-[200px] mt-52 animate-ping'/>
        <div className='absolute border-[#383838] border rounded-full h-[300px] w-[300px] mt-52 animate-ping'/>
        <div className='absolute border-[#383838] border rounded-full h-[500px] w-[500px] mt-52 animate-ping'/>
        <div className='absolute rounded-full border border-[#F7AB0A] opacity-20 h-[650px] w-[650px] mt-52 animate-pulse'/>
        <div className=''/>
    </motion.div>
  )
}
