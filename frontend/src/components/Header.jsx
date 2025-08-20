import React from 'react'
import { assets } from '../assets/assets'

const Header = () => {
  return (
    <div className='flex flex-col items-center justify-center text-center my-20'>
      <div className='text-stone-500 flex gap-2 items-center justify-center border border-neutral-300 bg-white rounded-full py-3 pl-9 pr-6'>
        <p>Best text to Image generator</p>
        <img src={assets.star_icon} alt='' /><br></br>
      </div>
      
      <h1 className='text-4xl max-w-[300px] sm:text-8xl sm:max-w-[790px] mx-auto mt-10 text-center'>Turn text to <span className='block'><span className='text-blue-500'>image</span>, in seconds.</span></h1>
      <p className='mt-10 text-stone-500 text-[18px]'>Unlesh your creativity with AI. Turn your imagination into visual art in<br></br> seconds - just type, and watch the magic happen.</p>
      <button className='sm:text-lg flex mt-10 bg-black px-12 py-3 text-white gap-3 rounded-full items-center w-auto'>Generate Images <img src={assets.star_group} className='h-8' alt='' /></button>
      
      <div className='mt-16 flex flex-wrap justify-center gap-4 '>
        {
            Array(6).fill('').map((item,index) =>(
                <img className='max-sm:w-10 rounded hover:scale-110 transition-all duration-300 cursor-pointer '
                src={index % 2 === 0 ? assets.sample_img_2 : assets.sample_img_1} 
                alt='' key={index} width={80} />
            ))
        }
      </div> 
      <p className='mt-3 text-lg text-neutral-600'>Generated image from imagify</p>
    </div>
  )
}

export default Header
