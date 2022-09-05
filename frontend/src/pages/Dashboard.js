import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { reset } from '../features/auth/authSlice';
import { logout } from '../features/auth/authSlice';
import { AiOutlineAppstoreAdd, AiOutlineProfile } from 'react-icons/ai'
import { BiCookie } from 'react-icons/bi'
import { MdLogout } from 'react-icons/md'
import Cookies from 'universal-cookie';

import AddProduct from '../components/AddProduct';
import ProductsList from '../components/ProductsList';
import OrdersList from '../components/OrdersList';

const Dashboard = () => {

  const navigate = useNavigate('/');
  const cookie = new Cookies();
  const dispatch = useDispatch();
  const { isAuth } = useSelector((state) => state.auth);

  const [item, setItem] = useState(1);

  useEffect(() => {
    if(!isAuth) {
      navigate('/admin/login')
    }
    const getCookie = cookie.get('token');
      
    if(getCookie !== process.env.REACT_APP_TOKEN) {
      navigate('/admin/login')
      dispatch(reset())
    } 

  }, [dispatch, navigate, isAuth])

  const handleChange = e => setItem(Number(e.currentTarget.id))

  const displayItems = item => {
    switch(item) {
      case 1: 
        return <OrdersList />
      case 2:
        return <ProductsList />
      case 3: 
        return <AddProduct  />
    }
  }

  const handleLogout = () => {
    navigate('/admin')
    dispatch(logout())
  }
  
  return (
    <div className="container mx-auto px-2 pt-[2rem] pb-[4rem] relative">
      <header className="flex items-center justify-center">
        <button
          className={`flex flex-col justify-center items-center 
          rounded-sm shadow-sm w-[10rem] h-[10rem] border border-gray-300
          transition duration-300 hover:border-orange-500 hover:text-orange-500
          hover:shadow-md ${item === 1 ? 'border-orange-500 text-orange-500' : ''}`}
          onClick={handleChange}
          id="1"
        >
          <AiOutlineProfile
            className="mb-4 text-4xl " 
          />
          <span>Orders</span>
        </button>
        <button
          className={`flex flex-col justify-center items-center 
          rounded-sm shadow-sm w-[10rem] h-[10rem] border border-gray-300
          transition duration-300 hover:border-orange-500 hover:text-orange-500
          hover:shadow-md mx-4 ${item === 2 ? 'border-orange-500 text-orange-500' : ''}`}
          onClick={handleChange}
          id="2"
        >
          <BiCookie
            className="mb-4 text-4xl " 
          />
          <span>Products</span>
        </button>
        <button
          className={`flex flex-col justify-center items-center 
          rounded-sm shadow-sm w-[10rem] h-[10rem] border border-gray-300
          transition duration-300 hover:border-orange-500 hover:text-orange-500
          hover:shadow-md ${item === 3 ? 'border-orange-500 text-orange-500' : ''}`}
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
      <button
        type="button"
        className="bg-slate-800 py-3 px-5 text-white flex items-center
        rounded-md shadow-md border-2 border-slate-800 fixed z-10 bottom-[20px] right-[20px]
        transition duration hover:text-slate-800 hover:bg-white"
        onClick={handleLogout}
      >
        Logout
        <MdLogout className="ml-3 text-2xl" />
      </button>
    </div>
  )
}

export default Dashboard