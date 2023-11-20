import React from 'react';
import Typed from 'react-typed';

const Hero = () => {
  return (
    <div className='text-white'>
      <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
        {/* <p className='text-[#00df9a] font-bold p-2'>
          GROWING WITH DATA ANALYTICS
        </p> */}
        <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>
          Hi, I'm Habibatul Jalilah
        </h1>
        <div className='flex justify-center items-center'>
          <p className='md:text-5xl sm:text-4xl text-xl font-bold py-4'>
            as a 
          </p>
          <Typed
            className='md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2 text-[#fcba03]'
            strings={['Frontend Web Developer', 'Photographer']}
            typeSpeed={80}
            backSpeed={100}
            loop
          />
        </div>
        <p className='md:text-2xl test-xl font-bold text-gray-500'>I'm a passionate Frontend Web Developer with a creative eye for photography. Specializing in crafting captivating digital experiences, I blend my technical expertise in frontend development with a keen visual sense honed through my photography journey. Through code and visuals, I bring websites to life, creating immersive digital spaces that engage and inspire users. Explore my portfolio to witness my fusion of technical prowess and artistic vision, showcasing the best of web development and photography.</p>
        <button className='bg-[#fcba03] w-[300px] rounded-md font-medium my-6 mx-auto py-3 text-black'>Let's get to know me more!</button>
        {/* <p className='md:text-2xl text-xl font-bold text-gray-500'>Monitor your data analytics to increase revenue for BTB, BTC, & SASS platforms.</p>
        <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black'>Get Started</button> */}
      </div>
    </div>
  );
};

export default Hero;