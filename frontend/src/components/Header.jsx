import React, { useContext } from 'react'
import { assets } from '../assets/assets'
import {motion} from "framer-motion"
import { AppContext } from '../context/AppContext'
import { useNavigate } from 'react-router-dom'

const Header = () => {

  const {user,setShowLogin} = useContext(AppContext);
  const navigate = useNavigate();

  const onclickhandler = () => {
    if(user){
      navigate('/result');
    }else{
      setShowLogin(true);
    } 
  }

  return (
    <motion.div className='flex flex-col items-center justify-center text-center my-20'
      initial={{opacity:0.2, y:100}}
      transition={{duration:1}}
      whileInView={{opacity:1,y:0}}
      viewport={{once:true}}>
      <motion.div className='text-stone-500 flex gap-2 items-center justify-center border border-neutral-300 bg-white rounded-full py-3 pl-9 pr-6'
       initial={{opacity:0.2, y:100}}
       animate={{opacity:1,y:0}}
       transition={{delay:0.2,duration:0.8}} >
        <p>Best text to Image generator</p>
        <img src={assets.star_icon} alt='' /><br></br>
      </motion.div>
       
      <motion.h1 className='text-4xl max-w-[300px] sm:text-8xl sm:max-w-[790px] mx-auto mt-10 text-center'>
        Turn text to <span className='block'><span className='text-blue-500' 
        initial={{opacity:0.2, y:100}}
        animate={{opacity:1}}
        transition={{delay:0.4,duration:2}} >image</span>, in seconds.</span></motion.h1>
      <motion.p className='mt-10 text-stone-500 text-[18px]'
      initial={{opacity:0, y:20}}
      animate={{opacity:1,y:0}}
      transition={{delay:0.6,duration:0.8}}
      >Unlesh your creativity with AI. Turn your imagination into visual art in<br></br> seconds - just type, and watch the magic happen.</motion.p>
      <motion.button className='sm:text-lg flex mt-10 bg-black px-12 py-3 text-white gap-3 rounded-full items-center w-auto'
      whileHover={{scale:1.05}}
      whileTap={{scale:0.95}}
      initial={{opacity:0}}
      animate={{opacity:1}}
      transition={{default:{duration:0.5},opacity:{delay:0.8, duration:1}}}
      onClick={onclickhandler}
      >Generate Images <img src={assets.star_group} className='h-8' alt='' /></motion.button>
      
      <motion.div className='mt-16 flex flex-wrap justify-center gap-4 '
      initial={{opacity:0}}
      animate={{opacity:1}}
      transition={{delay:1,duration:1}}
      >
        {
            Array(6).fill('').map((item,index) =>(
                <img className='max-sm:w-10 rounded hover:scale-110 transition-all duration-300 cursor-pointer '
                src={index % 2 === 0 ? assets.sample_img_2 : assets.sample_img_1} 
                alt='' key={index} width={80} />
            ))
        }
      </motion.div> 
      <p className='mt-3 text-lg text-neutral-600'>Generated image from imagify</p>
    </motion.div>
  )
}

export default Header
