import React from 'react'
import {motion} from "framer-motion"
import { type } from 'os';
import Image from 'next/image';

type Props={
    directionLeft?:boolean;
    image:string,
    level:number
}
export default function Skill({directionLeft,image,level}:Props) {

         let mobileViewport=true
           if ((typeof window !== "undefined") && window.innerWidth > 500 ) {
            mobileViewport=false
           }
      
  return (
    <motion.div  className='group relative flex cursor-pointer h-20 w-20 md:w-24 md:h-24  xl:w-28 xl:h-28  transition   rounded-full border border-gray-500 overflow-hidden justify-center items-center'
      initial={{
         x: directionLeft ? (mobileViewport? -100:-200) : (mobileViewport? 100:200) , 
         opacity:0
      }}
      viewport={{once:true}}
      transition={{duration:1.2,type:'spring',damping:45,velocity:100,stiffness:50,mass:14}}

      whileInView={{opacity:1,x:0}}
    >
        <Image
         src={`/${image}.png`}
         alt={`${image}`} width={"75%"} height={"75%"}
         className=' object-contain filter group-hover:grayscale'
        />
        <div className='absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white left-0 top-0 h-full w-full rounded-full z-0'>
            <div className='flex items-center justify-center h-full '>
                <p className='text-3xl font-bold text-black opacity-100 '>{level}%</p>
            </div>
        </div>

    </motion.div>
  )
}
