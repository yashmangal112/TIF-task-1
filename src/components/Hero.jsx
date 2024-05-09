import React from 'react'
import truck from "../assets/foodTruck.png"
import curve from "../assets/curve.png"
import pizza from "../assets/mainPizza.png"

export const Hero = () => {
  return (
    <>
      <img src={pizza} className='lg:absolute top-0 lg:right-0 z-0'></img>
      <img src={curve} className='absolute top-0 lg:right-0 z-10'></img>
      <header className='flex justify-between items-center z-50 lg:mt-5 w-10/12 mx-auto'>
        <img src={truck} className='opacity-0 lg:opacity-100'></img>
        <button className={`absolute top-10 right-5 rounded-3xl w-28 lg:w-40 h-10 lg:h-12 text-white font-bold z-50 border border-white text-sm lg:text-base`}>
          Get in Touch
        </button>
      </header>
      <main className='w-9/12 lg:w-10/12 mx-auto'>
        <section className='lg:w-[30%] lg:h-screen flex flex-col justify-center items-center lg:items-start text-center lg:text-left'>
          <h1 className='font-source font-black text-4xl lg:text-6xl'>
            Discover the <span className='text-pinkish'>Best</span> Food and Drinks
          </h1>
          <p className='my-10 lg:w-11/12 text-sm lg:text-base'>Naturally made Healthcare Products for the better care & support of your body.</p>
          <button className={`bg-pinkish rounded-3xl w-40 h-12 text-white font-bold z-50 border`}>
            Explore Now!
          </button>
        </section>
      </main>
    </>
  )
}
