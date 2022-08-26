import React from 'react'
import PizzaItem from './PizzaItem'
import data from '../data.json';

const PizzaList = () => {
  return (
    <section id="products" className="pt-[3rem] pb-[6rem]">
      <div className="container mx-auto px-6">
        <h2 className="heading-font text-orange-500 text-6xl text-center font-semibold">
          Our Pizzas
        </h2>
        <div className="mt-[3rem] flex flex-wrap justify-center">
          {data.map(item => (
            <PizzaItem key={item.id} {...item} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default PizzaList