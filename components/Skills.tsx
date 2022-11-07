import React from 'react'
import {motion} from 'framer-motion'
import Skill from './Skill'

const images=[
    {level:80,image:"css"},
    {level:50,image:"typescript"},
    {level:60,image:"sass"},
    {level:65,image:"wordpress"},
    {level:45,image:"nodejs"},
    {level:45,image:"redux"},
    {level:60,image:"nextjs"},
    {level:75,image:"mysql"},
    {level:80,image:"js"},
    {level:90,image:"html"},
    {level:80,image:"reactjs"},
    {level:75,image:"tailwind"},
    {level:55,image:"jquery"},
    {level:45,image:"mongodb"},
    {level:50,image:"firebase"},
    {level:60,image:"php"},
    {level:85,image:"word"},
    {level:85,image:"excel"},
    {level:60,image:"photoshop"},
]
export default function Skills() {
  const line=Math.ceil((images.length/2))
  return (
    <div
   
       
     className='flex relative max-h-[800px] flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen  justify-center xl:space-y-0 mx-auto items-center  '>
   <h3 className="absolute top-16 md:top-20 uppercase tracking-[20px] text-gray-500 text-2xl ">Skills</h3>
     <motion.div 
      viewport={{once:true}}
  
     whileInView={{transition:{staggerChildren:0.35}}}
     className='grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-5 pt-28  justify-items-center '>
     {images.map(({image,level},index)=>(
                 
         <Skill key={image} image={image} directionLeft={  line >= (index+1)   } level={level}/>
     ))}
        
     </motion.div>
    </div>
  )
}
