import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom'
import Button from '../components/Button';

const Product = () => {

  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [quantity, setQuantity] = useState(1);

  const { title, description, img, ingredients, price } = useSelector(state => state.products.products.find(product => product._id === id))

  const handleQuantity = e => setQuantity(e.target.value)
  const handleAddToCart = () => { 
    navigate('/cart')
  }

  return (
    <div className="container mx-auto px-6 py-[6rem] flex flex-col-reverse md:flex-row items-center justify-evenly">
      <div className="basis-10/12 md:basis-5/12">
        <div className="text-center md:text-left">
          <h2 className="heading-font font-semibold text-6xl text-slate-800">{title}</h2>
          <p className="my-[2rem] text-2xl font-semibold text-orange-500">$ {price[0].toFixed(2)}</p>
          <p className="text-slate-500 text-justify leading-5">{description}</p>
        </div>
        <hr className="my-[1rem]" />
        <div>
          <h4 className="text-slate-800 font-semibold text-lg">Ingredients:</h4>
          <ul className="list-disc list-inside">
            {ingredients ? 
            ingredients[0].split(',').map((item, idx) => (
              <li key={idx}>{item}</li>
            ))
            : 'No ingredients found'}
          </ul>
        </div>
        <div className="flex my-[2rem]">
          <input 
            type="number"
            name="quantity"
            min="1"
            max="8"
            value={quantity}
            onChange={handleQuantity}
            className="mr-4 w-[60px] pl-[20px] bg-gray-100 border-2 border-slate-800 rounded-md"
          />
          <Button 
            text="Add To Cart" 
            handler={handleAddToCart}
          />
        </div>
      </div>
      <div className="mb-[2rem] basis-10/12 md:basis-5/12 md:mb-[2rem]">
        <img src={img} alt="Pizza" className="mx-auto max-w-[320px] rounded-md shadow-lg" />
      </div>
    </div>
  )
}

export default Product