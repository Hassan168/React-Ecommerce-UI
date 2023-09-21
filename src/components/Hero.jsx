import React from 'react'

const Hero = () => {
  return (
    <div className='mt-5'>
      <div className='w-11/12 m-auto h-[300px] relative'>
        <img className='w-full h-full object-cover' src='images/logo192.png' alt="" />
        <div className='absolute top-10'>
          <div className='lg:w-1/2 w-4/5 m-auto p-5 space-y-5'>
            <h1 className='lg:text-5xl text-4xl text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit?</h1>
            
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
