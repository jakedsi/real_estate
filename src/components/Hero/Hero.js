import React from 'react'
import HeroImg from '../../assets/img/hero.jpg'
export default function Hero() {
  return (
    <div className='h-screen bg-[#25492e] text-white'>
        <div className='w-full flex flex-col items-center'>
            <h1 className='w-[600px] text-center mt-[20vh] text-[50px] font-semibold sm:w-[90%] sm:text-[40px]'>Discover A Place You'll Love To Live</h1>
            <h1 className='w-[600px] text-center mt-[5vh] text-[15px] sm:w-[90%] sm:text-[12px]'>Find comfort in the house with us, want to find a home? we are ready to help you wholeheartedly based on what you need</h1>
            <button className='px-5 py-2 mt-[5vh] bg-blue-500 rounded-lg sm:py-[3px] sm:text-[12px]'>Get Started</button>
            <img src={HeroImg} alt="hero" className='w-[900px] h-[400px] mt-[10vh] object-cover rounded-[54px] sm:w-[95%]' />
        </div>
    </div>
  )
}
