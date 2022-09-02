import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { logout } from '../features/auth/authSlice';
import { AiOutlineAppstoreAdd, AiOutlineProfile } from 'react-icons/ai'
import { BiCookie } from 'react-icons/bi'
import Cookies from 'universal-cookie';

import AddProduct from '../components/AddProduct';

const Dashboard = () => {

  const navigate = useNavigate('/');
  const cookie = new Cookies();
  const dispatch = useDispatch();
  const { isAuth } = useSelector((state) => state.auth);

  const [item, setItem] = useState(1);

  useEffect(() => {
    if(isAuth) {
      const getCookie = cookie.get('token');

      if(!getCookie === process.env.REACT_APP_TOKEN) {
        navigate('/admin/login')
        return;
      } 
    } 

    if(!isAuth) {
      navigate('/admin/login')
    }

  }, [isAuth, dispatch])

  const handleChange = e => setItem(Number(e.currentTarget.id))

  const displayItems = item => {
    switch(item) {
      case 1: 
        return (
          <h2>orders list</h2>
        )
      case 2:
        return (
          <h2>products list</h2>
        )
      case 3: 
        return <AddProduct  />
    }
  }

  const handleLogout = () => dispatch(logout())
  
  return (
    <div className="container mx-auto px-2 pt-[2rem] pb-[4rem]">
      <header className="flex items-center justify-center">
        <button
          className="flex flex-col justify-center items-center 
          rounded-sm shadow-sm w-[10rem] h-[10rem] border border-gray-300
          transition duration-300 hover:border-orange-500 hover:text-orange-500
          hover:shadow-md"
          onClick={handleChange}
          id="1"
        >
          <AiOutlineProfile
            className="mb-4 text-4xl " 
          />
          <span>Orders</span>
        </button>
        <button
          className="flex flex-col justify-center items-center 
          rounded-sm shadow-sm w-[10rem] h-[10rem] border border-gray-300
          mx-4 transition duration-300 hover:border-orange-500 hover:text-orange-500
          hover:shadow-md"
          onClick={handleChange}
          id="2"
        >
          <BiCookie
            className="mb-4 text-4xl " 
          />
          <span>Products</span>
        </button>
        <button
          className="flex flex-col justify-center items-center 
          rounded-sm shadow-sm w-[10rem] h-[10rem] border border-gray-300
          transition duration-300 hover:border-orange-500 hover:text-orange-500
          hover:shadow-md"
          onClick={handleChange}
          id="3"
        >
          <AiOutlineAppstoreAdd
            className="mb-4 text-4xl "
          />
          <span>Add product</span>
        </button>
      </header>
      <hr className="mt-8" />
      <div className="mt-6 max-w-[700px] mx-auto">
        {displayItems(item)}
      </div>
    </div>
  )
}

export default Dashboard