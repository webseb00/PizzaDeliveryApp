import React from 'react'
import Button from './Button'
import imgPath from '../assets/pizza2.png'

const AboutUs = () => {
  return (
    <section id="about-us" className="bg-white py-[4rem]">
      <div className="container mx-auto px-6 flex flex-col md:flex-row-reverse justify-around items-center">
        <div className="flex-1 max-w-[480px] mb-8 md:mb-0">
          <h2 className="font-semibold text-3xl">
            About Our <br /><span className="heading-font text-orange-500 text-4xl ml-6">Pizza</span>
          </h2>
          <div className="text-gray-400 text-md leading-6 mt-3 mb-8 text-justify">
            <p>Since Pizza inception, we have had several elements in mind: authenticity, flavor, and a commitment to using farm-fresh, locally sourced ingredients.</p>
            <p className="my-6">These recipes have a storied past marked by generations of tradition which has allowed us to create an experience filled with good vibes and delicious food.</p>
            <p>Taste of unlimited menu fulfilled with incredible culinary pleasures. Taste of true bliss of rhythm and mood, which will banish all prosaic thoughts and will add color to your everyday life! One Love! One Heart! Let's get together and feel all...</p>
          </div>
          <Button text="view full menu" />
        </div>
        <div className="flex-1 max-w-[380px]">
          <img src={imgPath} alt="About Us" />
        </div>
      </div>
    </section>
  )
}

export default AboutUs