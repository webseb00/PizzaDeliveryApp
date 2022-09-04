import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { login } from '../features/auth/authSlice'
import { ImSpinner8 } from 'react-icons/im'
import Cookies from 'universal-cookie';

const Login = () => {

  const navigate = useNavigate('/')
  const dispatch = useDispatch()
  const { isLoading, isSuccess, isError, message, isAuth } = useSelector(state  => state.auth)
  const cookie = new Cookies();
  
  const handleAuth = () => {
    const getCookie = cookie.get('token');
      
    if(getCookie === process.env.REACT_APP_TOKEN) {
      navigate('/admin')
    } 
  }

  useEffect(() => {
    handleAuth();
  }, [dispatch, isAuth])

  const [form, setForm] = useState({
    name: '',
    password: ''
  })
  const { name, password } = form

  const [error, setError] = useState({ isSet: false, msg: '' })

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = e => {
    e.preventDefault();

    if(!login || !password) {
      setError({ isSet: true, msg: 'All fields are required!' })
      return;
    } 

    dispatch(login(form)) 
  }

  return (
    <div className="container mx-auto px-6 pt-[6rem] pb-[8rem]">
      <form className="flex flex-col items-center">
        <h2 className="mb-6 text-2xl">Admin Dashboard</h2>
        <div>
          <input 
            type="text"
            name="name" 
            value={name}
            onChange={handleChange}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-md py-2 px-4 mb-3" 
            placeholder="Login" 
            required 
          />
        </div>
        <div>
          <input 
            type="password"
            name="password"
            value={password}
            onChange={handleChange} 
            className="bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-md py-2 px-4" 
            placeholder="Password" 
            required 
          />
        </div>
        {error.isSet && <p className="mt-3 text-lg text-red-600 font-semibold">{error.msg}</p>}
        <button 
          type="submit"
          className="px-8 py-2 rounded-md shadow-md text-white bg-blue-600
            transition duration-300 hover:opacity-70 cursor-pointer mt-3"
          onClick={handleSubmit}
        >
          {isLoading ? <ImSpinner8 className="animate-spin text-2xl" /> : 'Login'}
        </button>
      </form>
    </div>
  )
}

export default Login