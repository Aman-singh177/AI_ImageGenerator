import React from 'react'
import { assets, testimonialsData } from '../assets/assets'
import {motion} from 'framer-motion'

const Testimonials = () => {
  return (
    <motion.div className='my-24 py-12 flex flex-col items-center justify-center'
    initial={{opacity:0.2, y:100}}
    transition={{duration:1}}
    whileInView={{opacity:1,y:0}}
    viewport={{once:true}}     >
      <h1 className='text-4xl font-semibold mb-2'>Customer testimonials</h1>
      <p className='text-lg text-gray-500 mb-12'>What Our Users Are Saying</p>
      
      <div className='flex flex-wrap gap-6'>
        {
            testimonialsData.map((testimonial,index) => (
                <div key={index} className='w-80 m-auto cursor-pointer hover:scale-[1.05] shadow-md rounded-lg
                                          p-12 bg-white/20 border transition-all'>
                    <div className='flex flex-col items-center'>
                        <img src={testimonial.image} alt='' className='rounded-full w-14'/>
                        <h2 className='text-xl font-semibold'>{testimonial.name}</h2>
                        <p className='text-gray-500 mb-4'>{testimonial.role}</p>
                        <div className='flex mb-4'>
                            {
                                Array(testimonial.stars).fill().map((item,index) => (
                                    <img key={index} src={assets.rating_star} alt='' />
                                ))
                            }
                        </div>
                        <p className='text-center text-gray-500'>{testimonial.text}</p>
                    </div>
                </div>
            ))
        }
      </div>
    </motion.div>
  )
}

export default Testimonials
