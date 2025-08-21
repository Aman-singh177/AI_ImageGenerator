import React from 'react'
import { assets } from '../assets/assets'
import {motion} from 'framer-motion'

const Description = () => {
  return (
    <motion.div className='flex flex-col justify-center items-center my-24 p-6 md:px-28'
      initial={{opacity:0.2, y:100}}
      transition={{duration:1}}
      whileInView={{opacity:1,y:0}}
      viewport={{once:true}}  >
      <h1 className='text-3xl sm:text-5xl font-semibold mb-2'>Create AI Images</h1>
      <p className='text-gray-500 mb-8 text-lg'>Turn your into visuals</p>

      <div className='flex gap-16 ml-8 md:flex-row'>
        <img src={assets.sample_img_1} alt='' className='h-[450px]' />
        <div>
            <h1 className='mt-[30px] text-3xl font-medium max-w-lg'>Introducing the AI-Powered Text to Image Generator</h1> <br></br>
            <p className='text-gray-500'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. At, nihil ipsa. Porro, labore libero repellendus delectus doloribus officiis voluptatibus dolore eius error suscipit cum. Unde, atque enim, nulla rem laudantium consequatur autem quo animi saepe ullam inventore quam sequi sint iste reiciendis minima? Labore cupiditate assumenda animi dolorem <br></br> <br></br> cumque, debitis corporis magni tenetur magnam eaque dolor! Cumque veniam deleniti ea porro eum sunt assumenda, itaque dolorum voluptatum debitis autem velit sint voluptate, reprehenderit esse architecto enim vitae recusandae quisquam expedita error provident. Repellendus, saepe. Repellat, veniam quidem voluptatum quod nam architecto maxime magni? Esse numquam consequuntur expedita impedit reiciendis? Dignissimos?</p>
            <p></p>
        </div>
      </div>
    </motion.div>
  )
}

export default Description
