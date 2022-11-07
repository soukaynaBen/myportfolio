import React from 'react'
import {motion} from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'

export default function Projects() {
    const Projects=[
      {
        src:"amazon",
        title:"Amazon clone",
        body:"A Responsive web application created with NextJs, nextAuth for authentification, TailwindCss, paypal for payment, redux for state management and fakeStoreApi to test the app with fake data .",
        href:"https://amazon-clone101.netlify.app/"
      },{
        
        src:"hulu",
        title:"Hulu clone",
        body:"A Responsive web application created with NextJs, TailwindCss. The informations about movies provided by tmdb api .The app is Hosted in Netlify. ",
        href:"https://hulu101.netlify.app/"
      },{
        src:"slimestone",
        title:"Slimestone clone",
        body:"A project created with ReactJs, TailwindCss and react hook form for form validation.The App is Hosted with firebase hosting.",
        href:"https://slimstone-b9c7c.firebaseapp.com/"

      }]
  return (
    <div
    className=' py-14  flex overflow-hidden flex-col text-left 
    max-w-full justify-evenly mx-auto z-0 text-white'>
    <h3 className='py-14 relative    uppercase tracking-[20px] text-gray-500 text-2xl text-center '>Projects</h3>
        <div className=' relative w-full flex  overflow-scroll overflow-y-hidden snap-x min-h-[500px] snap-mandatory z-20 scrollbar-thin scrollbar-thumb-[#F7AB0A]/80 scrollbar-track-gray-400/20 '>  
          {Projects.map((project,i)=>(
            
              <a  target="_blank" href={`${project.href}`} rel="noreferrer">
            <div key={i} className=' w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-8 max-h-[800px] '>
              <motion.img 
              initial={ {y:-100,opacity:0}}
              transition={{duration:1.2}}
              whileInView={{opacity:1,y:0}}
              viewport={{once:true}}
              src={`${project.src}.png`} className='h-44 w-64 object-contain cursor-pointer' alt="" />
                 <div className='space-y-4 md:space-y-10 px-0 md:px-10 max-w-6xl '>
                  <h4 className='underline decoration-[#F7AB0A]/50 text-center'> Case Study {i+1} of {Projects.length} : {`${project.title}`} </h4>
                  <p className='text-lg text-center'>
                  {`${project.body}`}
                  </p>
                </div>
            </div>
              </a>
          ))}
        </div>
   <div className='w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12  '>
   </div>
    </div>
  )
}
