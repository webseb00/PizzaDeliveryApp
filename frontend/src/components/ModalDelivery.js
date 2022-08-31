import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { FaTimes } from 'react-icons/fa'
import { BiLoaderAlt } from 'react-icons/bi'
import axios from 'axios'

const ModalDelivery = ({ handleModal }) => {

  const navigate = useNavigate('/')
  const { total } = useSelector((state) => state.cart)

  const [form, setForm] = useState({
    fullName: '',
    phoneNumber: '',
    address: ''
  })
  const [error, setError] = useState({ isSet: false, message: '' })
  const [isLoading, setIsLoading] = useState(false)

  const { fullName, phoneNumber, address } = form;

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value })

  const postNewOrder = async (data) => {
    setIsLoading(true);

    try {
      const response = await axios.post('/api/order', data);
      return response.data
    } catch(err) {
      setError({ isSet: true, message: 'An Error occurred. Order can not be created.' })
      console.log(err);
    }

    setIsLoading(false);
  }

  const handleSubmit = async e => {
    e.preventDefault();

    if(!fullName && !phoneNumber || phoneNumber.length !== 9 && !address) {
      setError({ isSet: true, message: 'Please fill all fields!' })
      return
    }

    const obj = {
      firstName: fullName.split(' ')[0],
      lastName: fullName.split(' ')[1],
      status: 0,
      address,
      total,
    }

    const order = await postNewOrder(obj)

    if(order && order._id) {
      setError({ isSet: false, message: '' });
      handleCloseModal();

      navigate(`/order/${order._id}`)
    }
  }

  const handleCloseModal = () => handleModal(false);

  return (
    <>
      <div 
        className="fixed top-0 left-0 right-0 bottom-0 bg-black opacity-60 z-30"
        onClick={handleCloseModal}
      />
      <div className="bg-slate-100 fixed top-1/2 left-1/2 text-slate-800 z-40 
        translate-x-[-50%] translate-y-[-50%] rounded-lg shadow-lg p-[2rem]">
          <button
            type="button"
            className="absolute top-3 right-3 border-none text-2xl text-red-500"
            onClick={handleCloseModal}
          >
            <FaTimes />
          </button>
        <h2 className="mt-4 text-2xl">You will pay <span className="font-semibold">{total.toFixed(2)}</span> after delivery.</h2>
        <form className="mt-6 mb-3">
          <div className="mb-2 flex flex-col">
            <label htmlFor="full_name" className="mb-2">Full Name</label>
            <input
              type="text"
              name="fullName"
              value={fullName}
              onChange={handleChange}
              className="py-1 px-3 border border-slate-400 rounded-sm"
              id="full_name"
              required
            /> 
          </div>
          <div className="mb-2 flex flex-col">
            <label htmlFor="phone_number" className="mb-2">Phone Number</label>
            <input
              type="tel"
              name="phoneNumber"
              value={phoneNumber}
              onChange={handleChange}
              className="py-1 px-3 border border-slate-400 rounded-sm"
              id="phone_number"
              required
            /> 
          </div>
          <div className="flex flex-col">
            <label htmlFor="main_address" className="mb-2">Address</label>
            <textarea
              id="main_address"
              className="mb-6 py-1 px-3 border border-slate-400 rounded-sm"
              onChange={handleChange}
              name="address"
              value={address}
            />
          </div>
          {error.isSet && <p className="mb-4 text-lg text-red-600">{error.message}</p>}
          <button
            type="submit" 
            className="px-4 py-3 rounded-md shadow-md text-white bg-blue-600
            transition duration-300 hover:opacity-70 cursor-pointer flex items-center" 
            onClick={handleSubmit}
          >
            {!isLoading ? 
              'Make an order' 
            : 
            <>
              <BiLoaderAlt className="animate-spin mr-3" />
              <span>Processing...</span>
            </>}
          </button>
        </form>
      </div>
    </>
  )
}

export default ModalDelivery