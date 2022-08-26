import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaShoppingCart, FaBars, FaTimes, FaPizzaSlice } from 'react-icons/fa'

const Header = () => {

  const [isOpen, setIsOpen] = useState(false);

  const handleMobileMenu = () => {
    setIsOpen((prev) => !prev);
  }

  return (
    <>
    <header className="bg-slate-800 py-6 relative border-b border-gray-300 z-20">
      <div className="flex justify-around sm:justify-center items-center text-white max-w-[1200px] w-full mx-auto px-4">
        <div className="sm:flex-[1] text-center">
          <Link 
            to="/" 
            className="text-orange-500 text-5xl heading-font flex items-center"
          >
            PizzaDelivery
            <FaPizzaSlice className="text-4xl ml-4" />
          </Link>
        </div>
        <nav className="flex-[3] hidden sm:block">
          <ul className="flex justify-center">
            <li className="mx-4">
              <a className="hover:text-orange-500 transition duration-300" href="/">Home</a>
            </li>
            <li className="mx-4">
              <a className="hover:text-orange-500 transition duration-300" href="#about-us">About Us</a>
            </li>
            <li className="mx-4">
              <a className="hover:text-orange-500 transition duration-300" href="#products">Products</a>
            </li>
            <li className="mx-4">
              <a className="hover:text-orange-500 transition duration-300" href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
        <div className="sm:flex-[1] text-center hidden sm:block">
          <Link to="/cart" className="hover:opacity-70">
            <span className="inline-block relative">
              <FaShoppingCart className="text-2xl" />
              <div className="absolute top-[-10px] right-[-10px] bg-white text-slate-800 rounded-full w-[20px] h-[20px] 
              font-semibold text-lg align-middle flex items-center justify-center">0</div>
            </span>
          </Link>
        </div>
        <button
          type="button"
          className="border-none outline-none bg-transparent text-3xl text-orange-500 
          hover:opacity-70 block sm:hidden"
          onClick={handleMobileMenu}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
    </header>
    {/* MOBILE NAVBAR */}
    <nav className={`block sm:hidden text-white bg-slate-800 transition-all duration-300
    absolute left-0 ${!isOpen ? 'translate-y-[-100%]' : 'translate-y-0'} right-0 z-10`}>
      <ul className="flex flex-col justify-center items-center">
        <li className="w-full text-center">
          <a className="hover:text-orange-500 transition duration-300 block py-3 text-xl" href="/">Home</a>
        </li>
        <li className="w-full text-center">
          <a className="hover:text-orange-500 transition duration-300 block py-3 text-xl" href="#about-us">About Us</a>
        </li>
        <li className="w-full text-center">
          <a className="hover:text-orange-500 transition duration-300 block py-3 text-xl" href="#products">Products</a>
        </li>
        <li className="w-full text-center">
          <a className="hover:text-orange-500 transition duration-300 block py-3 text-xl" href="#contact">Contact</a>
        </li>
        <li className="w-full text-center">
          <Link to="/cart" className="hover:opacity-70 block py-3">
            <span className="inline-block relative">
              <FaShoppingCart className="text-2xl" />
              <div className="absolute top-[-10px] right-[-10px] bg-white text-slate-800 rounded-full w-[20px] h-[20px] 
              font-semibold text-lg align-middle flex items-center justify-center">0</div>
            </span>
          </Link>
        </li>
      </ul>
    </nav>
  </>
  )
}

export default Header