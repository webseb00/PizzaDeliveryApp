import React from 'react'
import pizzaImg from '../assets/pizza1.png'
import Button from './Button'
import { FaChevronCircleDown } from 'react-icons/fa'

const Hero = () => {
  return (
    <div className="hero-bg h-auto relative overflow-hidden pt-[97px]">
      <div className="container mx-auto px-6 py-[6rem] flex flex-col md:flex-row items-center justify-around">
        <div className="text-white max-w-[480px] md:mr-6 flex-1 text-center md:text-left">
          <h1 className="font-bold text-6xl">Only Fresh <br />Ingredients</h1>
          <p className="text-xl my-8">We maintain our commitment to quality and authenticity through daily preparation and our ingredients coming from locally grown purveyors.!</p>
          <Button text="check our menu" />
        </div>
        <div className="max-w-[380px] flex-1 mt-[3rem] md:mt-0">
          <img src={pizzaImg} alt="Pizza" className="animate-spin-slow" />
        </div>
      </div>
      <a 
        href="#about-us"
        className="absolute left-[50%] bottom-[30px] text-white 
        animate-bounce text-3xl opacity-60 hover:opacity-100 transition duration-300" 
      >
        <FaChevronCircleDown />
      </a>
    </div>
  )
}

export default Hero