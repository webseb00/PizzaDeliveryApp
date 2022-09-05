import React, { useState, useRef } from 'react'
import { useDispatch } from 'react-redux'
import { addProduct } from '../features/products/productsSlice';
import axios from 'axios';

const AddProduct = () => {

  const fileRef = useRef(null);
  const dispatch = useDispatch()

  const [form, setForm] = useState({
    title: '',
    description: '',
    price: '',
    ingredients: '',
    img: ''
  })
  
  const { title, description, price, ingredients, img } = form;

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value })

  const handleImage = async () => {
    const data = new FormData();
    const image = fileRef.current.files[0]

    data.append('file', image);
    data.append('upload_preset', 'pizzaApp');
    data.append('cloud_name', 'dlgcq1hg1');

    if(!image) { return; }

    try {
      const { data: { url } } = await axios.post(process.env.REACT_APP_CLOUDINARY_URL, data);
      setForm({ ...form, img: url })
    } catch(err) {
      console.log(err.response.data.error.message)
    }
  }

  const handleSubmit = async e => {
    e.preventDefault();

    if(!title || !description || !price || !fileRef) {
      return;
    }

    const obj = {
      title: title.trim(),
      description: description.trim(),
      price: price.split(',').map(el => Number(el)),
      ingredients: ingredients.split(',').map(el => el.trim()),
      img
    }

    dispatch(addProduct(obj))
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
          shadow-sm hover:shadow-md py-3 px-4 rounded-md active:shadow-sm mt-8"
        >
          Add Product
        </button>
      </div>
    </form>
  )
}

export default AddProduct