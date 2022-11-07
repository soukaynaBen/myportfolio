import React from 'react'
import {motion} from 'framer-motion'
import Image from 'next/image'
type Props = {}

export default function ExperienceCard({}: Props) {
  return (
    <div className=''>

    <article className='  flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[400px] md:w-[600px]  snap-center bg-[#292929] p-10 select-none cursor-pointer opacity-40 hover:opacity-100 transition-opacity duration-200 overflow-hidden'>


        <div className='px-0 md:px-10'>
          <h4 className='text-4xl font-light'>CEO of PAPAFAM</h4>
          <p className='font-bold text-2xl m-1'>PAPAFAM
          </p>
            <div>
                 <Image className='h-6 w-6 ' src="/js.png" alt="" />
            </div>
            <p className='uppercase py-5 text-gray-300'>Started work... _ Ended...</p>
            <ul className='list-disc space-y-4 ml-5 text-lg'>
              <li>point</li>
              <li>point</li>
              <li>point</li>
              <li>point</li>
              <li>point</li>
            </ul>
        </div>
    </article>
    </div>
  )
}