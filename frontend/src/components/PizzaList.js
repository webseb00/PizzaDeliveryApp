import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllProducts } from '../features/products/productsSlice'
import PizzaItem from './PizzaItem'
import Spinner from './Spinner'
import { TbPizzaOff } from 'react-icons/tb'

const PizzaList = () => {

  const dispatch = useDispatch();
  const { products, isLoading } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(getAllProducts());
  }, [])

  return (
    <section id="products" className="pt-[3rem] pb-[6rem]">
      <div className="container mx-auto px-6">
        <h2 className="heading-font text-orange-500 text-6xl text-center font-semibold">
          Our Pizzas
        </h2>
        <div className="mt-[3rem] flex flex-wrap justify-center lg:justify-start">
          {isLoading ? 
            <Spinner /> 
            :
            products?.length ? 
            products.map(product => (
              <PizzaItem key={product._id} { ...product } />
            )) : 
            <div className="text-gray-300 font-bold">
              <h4 className="text-xl mb-6">No pizzas found!</h4>
              <TbPizzaOff className="text-8xl mx-auto rotate-[230deg]" />
            </div>
          }
        </div>
      </div>
    </section>
  )
}

export default PizzaList