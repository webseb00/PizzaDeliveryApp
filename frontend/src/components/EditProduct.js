import React, { useState, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { FaTimes } from 'react-icons/fa'
import { updateProduct } from '../features/products/productsSlice'
import axios from 'axios';

const EditProduct = ({ id, setModal }) => {

  const dispatch = useDispatch()
  const product = useSelector((state) => state.products.products.find(product => product._id === id))
  const fileRef = useRef(null)

  const [form, setForm] = useState({
    title: product.title,
    description: product.description,
    price: product.price.join(','),
    ingredients: product.ingredients.join(','),
    img: product.img
  })

  const { title, description, price, ingredients } = form

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value })

  const handleCloseModal = () => setModal(false)

  const handleImage = async () => {
    const data = new FormData()
    const image = fileRef.current.files[0]

    data.append('file', image)
    data.append('upload_preset', 'pizzaApp')
    data.append('cloud_name', 'dlgcq1hg1')

    if(!image) return;

    try {
      const { data: { url } } = await axios.post(process.env.REACT_APP_CLOUDINARY_URL, data);
      setForm({ ...form, img: url })
    } catch(err) {
      console.log(err.response.data.error.message)
    }
  }

  const handleSubmit = e => {
    e.preventDefault()

    if(!title || !description || !price || !fileRef) {
      return;
    }

    const obj = {
      id: product._id,
      title: title.trim(),
      description: description.trim(),
      price: price.split(',').map(el => Number(el)),
      ingredients: ingredients.split(',').map(el => el.trim()),
      img: form.img
    }

    dispatch(updateProduct(obj))
    handleCloseModal()
  }

  return (
    <>
      <div 
        className="fixed top-0 left-0 right-0 bottom-0 bg-black opacity-60 z-30"
        onClick={handleCloseModal}
      />
      <div className="bg-slate-100 fixed top-1/2 left-1/2 text-slate-800 z-40 
        translate-x-[-50%] translate-y-[-50%] rounded-lg shadow-lg p-[1.2rem]
        w-full max-w-[640px]">
        <button
          type="button"
          className="absolute top-3 right-3 border-none text-2xl text-red-500"
          onClick={handleCloseModal}
        >
          <FaTimes />
        </button>
        <form className="mt-5">
          <div className="mb-2 flex flex-col">
            <input
              type="text"
              name="title"
              value={title}
              onChange={handleChange}
              className="py-1 px-3 border border-slate-400 rounded-md"
              required
            /> 
          </div>
          <div className="mb-2 flex flex-col">
            <textarea
              name="description"
              value={description}
              onChange={handleChange}
              className="py-1 px-3 border border-slate-400 rounded-md h-[8rem]"
            />
          </div>
          <div className="mb-2 flex flex-col">
            <label className="mb-2 font-semibold">Price (multiple prices must be separated with comma)</label>
            <input
              type="text"
              name="price"
              value={price}
              onChange={handleChange}
              className="py-1 px-3 border border-slate-400 rounded-md"
              required
            /> 
          </div>
          <div className="mb-2 flex flex-col">
            <label className="mb-2 font-semibold">Ingredients (multiple ingredients must be separated with comma)</label>
            <input
              type="text"
              name="ingredients"
              value={ingredients}
              onChange={handleChange}
              className="py-1 px-3 border border-slate-400 rounded-md"
              required
            /> 
          </div>
          <div className="mb-2 flex flex-col">
            <label className="mb-2 font-semibold">Leave empty if you want to preserve old image</label>
            <input
              type="file"
              name="img"
              onChange={handleImage}
              accept=".jpg, .jpeg, .png"
              ref={fileRef}
              className="py-1 px-3 border border-slate-400 rounded-md"
              required
            />
          </div>
          <div>
            <button
              type="submit"
              onClick={handleSubmit}
              className="bg-blue-600 text-white border border-blue-600
              transition duration-300 hover:bg-white hover:text-blue-600
              shadow-sm hover:shadow-md py-2 px-4 rounded-md active:shadow-sm"
            >
              Update
            </button>
          </div>
        </form>
      </div>
    </>
  )
}

export default EditProduct