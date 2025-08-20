import React from 'react'
import { assets } from '../assets/assets'

const GenerateBtn = () => {
  return (
    <div className='flex flex-col items-center justify-center'>
      <h1 className='text-2xl sm:text-3xl md:text-4xl  mt-4 font-semibold'>See the magic. Try now</h1>  
      <button className='sm:text-lg flex mt-10 bg-black px-12 py-3 text-white gap-3 rounded-full items-center w-auto'>Generate Images <img src={assets.star_group} className='h-8' alt='' /></button>
    </div>
  )
}

export default GenerateBtn
