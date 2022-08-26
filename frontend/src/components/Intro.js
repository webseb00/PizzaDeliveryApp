import React from 'react'
import { GiFullPizza } from 'react-icons/gi'

const Intro = () => {
  return (
    <section className="intro-bg text-white py-[4rem]">
      <div className="container mx-auto flex justify-center">
        <div className="basis-3/4 md:basis-3/6 text-center">
          <GiFullPizza className="text-white text-6xl mx-auto mb-4" />
          <h2 className="text-4xl font-semibold">Are you hungry? Make an order!</h2>
          <p className="text-lg">And enjoy eating your favourite pizza within <span className="text-orange-500 font-semibold">30 minutes</span>!</p>
        </div>
      </div>
    </section>
  )
}

export default Intro