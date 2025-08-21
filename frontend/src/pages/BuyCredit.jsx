import React, { useContext } from 'react'
import { assets, plans } from '../assets/assets'
import { AppContext } from '../context/AppContext'
import {motion} from 'framer-motion'

const BuyCredit = () => {

  const {user} = useContext(AppContext);

  return (
    <motion.div className='flex flex-col items-center justify-center mt-20'
      initial={{opacity:0.2, y:100}}
      transition={{duration:1}}
      whileInView={{opacity:1,y:0}}
      viewport={{once:true}}  >
      <button className='py-2 px-8 border border-gray-400 rounded-full bg-white/20'>OUR PLANS</button>
      <h1 className='mt-10 text-3xl md:text-4xl font-semibold'>Choose the plan</h1>
      <div className='flex flex-wrap gap-10 '>
        {
        plans.map((item,index)=>(
          <div key={index}  className='flex flex-col mt-16 shadow-md border pl-10 pr-16 
          pt-20 pb-10 rounded-lg bg-white hover:scale-105 transition-all duration-500'>
            <img src={assets.logo_icon} alt='' width={40} className='mb-5'/>
            <p className='font-medium text-2xl mb-3'>{item.id}</p>
            <p className='text-gray-500 mb-8'>{item.desc}</p>
            <div className='flex items-baseline mb-10'>
              <h2 className='font-semibold text-3xl mr-2'>${item.price}</h2>
              <p className=''>/{item.credits}</p>
            </div>
            
            <button className='bg-black px-20 py-3 rounded text-white text-sm'> 
              {user ? 'Purchase' : 'Get Started' } </button>
          </div>
        )) 
      }
      </div>
      <br/> <br/> <br/>  
    </motion.div>
  )
}

export default BuyCredit
