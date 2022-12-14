import React, { useState, useRef } from 'react'
import { useDispatch } from 'react-redux'
import { addProduct } from '../features/products/productsSlice';
import { handleImage } from '../utils';
import { ImSpinner8 } from 'react-icons/im'

import { toast } from 'react-toastify';

const AddProduct = () => {

  const fileRef = useRef(null);
  const dispatch = useDispatch()

  const [imgLoading, setImgLoading] = useState(false)
  const [form, setForm] = useState({
    title: '',
    description: '',
    price: '',
    ingredients: '',
    img: ''
  })
  
  const { title, description, price, ingredients, img } = form;

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value })

  const handleAddImage = async () => {
    setImgLoading(true);

    const image = fileRef.current.files[0]
    const { data: { url } } = await handleImage(image)

    setForm({ ...form, img: url })
    setImgLoading(false);
  }

  const handleSubmit = async e => {
    e.preventDefault();

    if(!title || !description || !price || !img) {
      return;
    }

    const obj = {
      title: title.trim(),
      description: description.trim(),
      price: price.split(',').map(el => Number(el)),
      ingredients: ingredients.length && ingredients.split(',').map(el => el.trim()),
      img
    }

    dispatch(addProduct(obj))

    toast.success('Product added!');

    setForm({
      title: '',
      description: '',
      price: '',
      ingredients: '',
      img: ''
    })
  }

  return (
    <form>
      <div className="mb-2 flex flex-col">
        <label className="mb-2 font-semibold">Title</label>
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
        <label className="mb-2 font-semibold">Description</label>
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
        <label className="mb-2 font-semibold">Add pizza image</label>
        <input
          type="file"
          name="img"
          onChange={handleAddImage}
          accept=".jpg, .jpeg, .png"
          ref={fileRef}
          className="py-1 px-3 border border-slate-400 rounded-md"
          required
        />
        <div className="w-[80px] h-[80px] shadow-md rounded-md
        mt-2 flex justify-center items-center">
          {imgLoading && <ImSpinner8 className="animate-spin text-center text-2xl" />}
          {img && <img src={img} alt="pizza" className="w-full" />}
        </div>
      </div>
      <div>
        <button
          type="submit"
          onClick={handleSubmit}
          className="bg-blue-600 text-white border border-blue-600
          transition duration-300 hover:bg-white hover:text-blue-600
          shadow-sm hover:shadow-md py-3 px-4 rounded-md active:shadow-sm mt-8"
        >
          Add Product
        </button>
      </div>
    </form>
  )
}

export default AddProduct