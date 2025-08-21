import React, { useContext } from 'react'
import { assets } from '../assets/assets'
import { AppContext } from '../context/AppContext'
import { useNavigate } from 'react-router-dom';

const GenerateBtn = () => {
  
  const {user,setShowLogin} = useContext(AppContext);
  const navigate = useNavigate();

  const onchangehandler = () => {
    if(user){
      navigate('/result');
    }else{
      setShowLogin(true);
    }
  }
  return (
    <div className='flex flex-col items-center justify-center'>
      <h1 className='text-2xl sm:text-3xl md:text-4xl  mt-4 font-semibold'>See the magic. Try now</h1>  
      <button onClick={onchangehandler} className='sm:text-lg flex mt-10 bg-black px-12 py-3 
      text-white gap-3 rounded-full items-center w-auto'> Generate Images <img src={assets.star_group} className='h-8' alt='' /></button>
    </div>
  )
}

export default GenerateBtn
