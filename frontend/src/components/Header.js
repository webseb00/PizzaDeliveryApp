import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { FaShoppingCart, FaBars, FaTimes, FaPizzaSlice } from 'react-icons/fa'
import { useSelector } from 'react-redux'

const Header = () => {

  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState(false);
  const navigate = useNavigate('/');
  const { items } = useSelector(state => state.cart);

  const handleMobileMenu = () => setIsOpen((prev) => !prev);

  const handleScroll = () => {
    const offsetY = window.scrollY;
    offsetY >= 150 ? setActive(true) : setActive(false)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if(isOpen) setIsOpen(false)
  }, [navigate])

  return (
    <>
    <header className={`fixed w-full bg-slate-800 border-b border-dashed border-slate-100 z-20 shadow-md
    transition-all duration-300 ${active ? 'py-3' : 'py-6'}`}>
      <div className="flex justify-around sm:justify-center items-center text-white max-w-[1200px] w-full mx-auto px-4">
        <div className="sm:flex-[1] text-center">
          <Link 
            to="/" 
            className="text-orange-500 text-4xl lg:text-5xl heading-font flex items-center"
          >
            PizzaDelivery
            <FaPizzaSlice className="text-2xl lg:text-4xl ml-4" />
          </Link>
        </div>
        <nav className="flex-[3] hidden md:block">
          <ul className="flex justify-center">
            <li className="mx-4">
              <Link className="hover:text-orange-500 transition duration-300 uppercase" to="/">Home</Link>
            </li>
            <li className="mx-4">
              <a className="hover:text-orange-500 transition duration-300 uppercase" href="#about-us">About Us</a>
            </li>
            <li className="mx-4">
              <a className="hover:text-orange-500 transition duration-300 uppercase" href="#products">Products</a>
            </li>
            <li className="mx-4">
              <a className="hover:text-orange-500 transition duration-300 uppercase" href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
        <div className="sm:flex-[1] text-center hidden md:block">
          <Link to="/cart" className="hover:opacity-70">
            <span className="inline-block relative">
              <FaShoppingCart className="text-2xl" />
              <div className="absolute top-[-10px] right-[-10px] bg-white text-slate-800 rounded-full w-[20px] h-[20px] 
              font-semibold text-lg align-middle flex items-center justify-center">{items}</div>
            </span>
          </Link>
        </div>
        <button
          type="button"
          className="border-none outline-none bg-transparent text-3xl text-orange-500 
          hover:opacity-70 block md:hidden"
          onClick={handleMobileMenu}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
    </header>
    {/* MOBILE NAVBAR */}
    <nav className={`block md:hidden text-white bg-slate-800 transition-all duration-300
    fixed left-0 top-0 bottom-0 w-[340px] ${!isOpen ? 'translate-x-[-100%]' : 'translate-x-0'} z-10
    flex items-center justify-center shadow-md border-r border-dashed border-slate-100`}>
      <ul className="flex flex-col justify-center items-center">
        <li className="w-full text-center">
          <Link className="hover:text-orange-500 transition duration-300 block py-3 text-xl" to="/">Home</Link>
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
              font-semibold text-lg align-middle flex items-center justify-center">{items}</div>
            </span>
          </Link>
        </li>
      </ul>
    </nav>
  </>
  )
}

export default Header