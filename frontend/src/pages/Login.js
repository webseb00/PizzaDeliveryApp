import React, { useState } from 'react'

const Login = () => {

  const [form, setForm] = useState({
    login: '',
    password: ''
  })
  const [error, setError] = useState({ isSet: false, message: '' })

  const { login, password } = form

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = e => {
    e.preventDefault();

    if(!login && !password) {
      setError({ isSet: true, message: 'All fields are required!' })
      return
    }

    setError({ isSet: false, message: '' })
  }

  return (
    <div className="container mx-auto px-6 pt-[6rem] pb-[8rem]">
      <form className="flex flex-col items-center">
        <h2 className="mb-6 text-2xl">Admin Dashboard</h2>
        <div>
          <input 
            type="text"
            name="login" 
            value={login}
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
        {error.isSet && <p className="mt-3 text-lg text-red-600 font-semibold">{error.message}</p>}
        <input 
          type="submit"
          value="Login"
          className="px-8 py-2 rounded-md shadow-md text-white bg-blue-600
            transition duration-300 hover:opacity-70 cursor-pointer mt-3"
          onClick={handleSubmit}
        />
      </form>
    </div>
  )
}

export default Login