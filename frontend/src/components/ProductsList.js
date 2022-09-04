import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getAllProducts, deleteProduct } from '../features/products/productsSlice'
import Spinner from './Spinner'

const ProductsList = () => {

  const { products, isLoading } = useSelector((state) => state.products)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllProducts())
  }, [dispatch])

  const handleUpdate = id => {

  }

  const handleDelete = id => {
    dispatch(deleteProduct(id))
  }

  if(isLoading) return <Spinner />

  return (
    <div className="flex flex-col">
      <h2 className="my-4 text-center font-semibold text-2xl">Products List:</h2>
      <div>
        {products?.length ? 
          products.map(product => (
            <div key={product._id} className="flex justify-between items-center mb-6
            border border-gray-300 rounded-md shadow-md p-3">
              <div>
                <img src={product.img} alt={product.title} className="w-[50px] rounded-full" />
                <span className="text-orange-500">{product._id}</span>
                <h3 className="text-slate-800 font-semibold text-lg">{product.title}</h3>
                <span className="font-semibold">{product.price[0].toFixed(2)} $</span>
              </div>
              <div className="flex flex-col">
                <button
                  type="button"
                  onClick={() => handleUpdate(product._id)}
                  className="bg-green-700 text-white font-semibold rounded-md mr-2
                  mb-2 py-2 px-6 transition duration-300 hover:opacity-70 shadow-md"
                >
                  Edit
                </button>
                <button
                  type="button"
                  onClick={() => handleDelete(product._id)}
                  className="bg-red-700 text-white font-semibold rounded-md mr-2
                  py-2 px-6 transition duration-300 hover:opacity-70 shadow-md"
                >
                  Delete
                </button>
              </div>
            </div>
          )) : <p>No products found...</p>
        }
      </div>
    </div>
  )
}

export default ProductsList