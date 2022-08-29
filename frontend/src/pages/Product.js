import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom'
import { getProduct } from '../features/products/productsSlice';
import { addToCart, calculateTotals } from '../features/cart/cartSlice';
import { FaHandPointRight } from 'react-icons/fa';
import Button from '../components/Button';
import Spinner from '../components/Spinner';

const Product = () => {

  const params = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate('/');

  const { product, isLoading } = useSelector(state => state.products)

  const [quantity, setQuantity] = useState(1);
  const [price, setPrice] = useState('');
  const [size, setSize] = useState('small')

  const handleQuantity = e => setQuantity((Number(e.target.value)))

  const handleSize = e => {
    const value = e.target.value;

    if(value === 'large') {
      setSize(value)
      setPrice(product.price[2].toFixed(2))
    } else if(value === 'medium') {
      setSize(value)
      setPrice(product.price[1].toFixed(2))
    } else {
      setSize(value)
      setPrice(product.price[0].toFixed(2))
    }
  }

  const handleAddToCart = () => {
    if(size === 'size') return;
    
    const total = (price*quantity).toFixed(2)

    const item = {
      id: product._id,
      price,
      quantity,
      total,
      name: product.title,
      img: product.img
    }

    dispatch(addToCart(item))
    dispatch(calculateTotals())
    
    navigate('/cart')
  }

  useEffect(() => {
    dispatch(getProduct(params.id))
  }, []);

  useEffect(() => {
    if(product.price && product.price[0]) {
      setPrice(product.price[0].toFixed(2))
    }
  }, [product])

  if(isLoading) return (
    <div className="h-[80vh] flex justify-center items-center">
      <Spinner />
    </div>
  )

  return (
    <div className="container mx-auto px-6 py-[8rem] flex flex-col-reverse lg:flex-row items-center justify-evenly">
      <div className="basis-10/12 lg:basis-5/12">
        <div className="text-center lg:text-left">
          <h2 className="heading-font font-semibold text-6xl text-slate-800">{product?.title}</h2>
          <p className="my-[2rem] text-3xl font-semibold text-orange-500">$ {price}</p>
          <p className="text-slate-500 text-justify leading-5">{product?.description}</p>
        </div>
        <hr className="my-[1rem]" />
        <div>
          <h4 className="text-slate-800 font-semibold text-lg">Ingredients:</h4>
          <ul className="list-disc list-inside">
            {product?.ingredients ? 
            product?.ingredients.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))
            : 'No ingredients found'}
          </ul>
        </div>
        <div className="relative mt-6">
          <FaHandPointRight className="absolute left-4 top-[5px] text-3xl text-orange-500" />
          <select 
            className="pl-14 pr-4 py-2 w-[260px] border border-gray-400 rounded-md text-lg"
            onClick={handleSize}
          >
            <option>Size</option>
            <option value="small">Small - 25cm</option>
            <option value="medium">Medium - 35cm</option>
            <option value="large">Large - 45cm</option>
          </select>
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
      <div className="mb-[2rem] basis-10/12 lg:basis-5/12 lg:mb-[2rem]">
        <img src={product?.img} alt="Pizza" className="mx-auto max-w-[320px] rounded-md shadow-lg" />
      </div>
    </div>
  )
}

export default Product