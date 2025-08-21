import React, { useState } from 'react'
import { assets } from '../assets/assets'
import {motion} from 'framer-motion'

const Result = () => {
  const [image , setImage] = useState(assets.sample_img_1);
  const [isImageLoaded,setImageLoaded] = useState(false);
  const [loading, setLoading] = useState(false);
  const [input, setInput] = useState('');

  const submithandler = async (e) => {

  }
  
  return (
    <motion.form onSubmit={submithandler} 
      initial={{opacity:0.2, y:100}}
      transition={{duration:1}}
      whileInView={{opacity:1,y:0}}
      viewport={{once:true}}  >
      <div className='flex flex-col items-center justify-center mt-44'>
        <div className='relative'>
          <img src={image } alt='' className='h-[350px]' />
          <span className={`absolute bottom-0 left-0 h-1 bg-blue-500 ${loading ? 'w-full transition-all duration-[10s]' : 'w-0'} `} />
        </div>
        <p className={!loading ? 'hidden' : ''}>Loading......</p>

        {
          !isImageLoaded && 
        <div className='flex w-full max-w-xl gap-5 items-center justify-center bg-neutral-500 rounded-full text-white mt-10 '>
          <input onChange={e => setInput(e.target.value)} value={input} type='text' placeholder='Describe what you want to generate' className='flex-1 bg-transparent outline-none ml-8 max-sm:w-20'></input>
          <button type='submit' className='bg-zinc-900 text-white rounded-full px-14 py-3'>Generate</button>
        </div>
        }
      </div>
      {
        isImageLoaded && 
      <div onClick={() => {setImageLoaded(false)}} className='flex gap-3 flex-wrap justify-center text-white p-1 mt-10 rounded-full  '>
        <p className='border border-zinc-900 text-black px-8 py-3 rounded-full cursor-pointer'>Generate Another</p>
        <a href={image} download className='px-12 py-3 rounded-full cursor-pointer bg-zinc-900'>Download</a>
      </div>
      }
      <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> 
    </motion.form>
    
  )
}

export default Result
