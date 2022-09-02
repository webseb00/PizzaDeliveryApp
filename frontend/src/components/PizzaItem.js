import React from 'react'
import Button from './Button'
import { Link } from 'react-router-dom'

const PizzaItem = ({ _id, title, img, price }) => {

  return (
    <div className="basis-10/12 md:basis-8/12 lg:basis-4/12 xl:basis-3/12 p-2">
      <div className="mx-auto text-center border rounded-md bg-slate-100 p-4 
      w-full min-w-[240px] max-w-[320px] transition duration-300 opacity-80 
      hover:opacity-100 shadow hover:shadow-md border-b-slate-200">
        <header>
          <img 
            src={img} 
            alt={title} 
            className="w-[12rem] rounded-full mx-auto" 
          />
          <h4 className="font-semibold mt-3">{title}</h4>
        </header>
        <div className="my-3">
          <span className="text-orange-500 text-2xl">$ {price[0].toFixed(2)}</span>
        </div>
        <footer>
          <Link to={`/pizza/${_id}`}>
            <Button 
              text="Details" 
            />
          </Link>
        </footer>
      </div>
    </div>
  )
}

export default PizzaItem