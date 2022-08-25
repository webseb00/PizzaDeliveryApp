import React from 'react'
import { FaFacebookF, FaTwitter, FaInstagram, FaPinterestP } from 'react-icons/fa'
import { BsFillArrowRightCircleFill } from 'react-icons/bs'

const Footer = () => {
  return (
    <footer className="border-t-[2px] border-slate-800">
      <div className="bg-orange-500 ">
        <div className="container mx-auto px-6 pt-10 pb-[6rem] flex flex-col items-center md:items-start md:flex-row justify-center">
          <div className="basis-3/4 md:basis-1/3 mx-4">
            <h4 className="font-semibold text-xl text-slate-800 text-center mb-6">Opening Hours</h4>
            <ul className="divide-y divide-slate-50">
              <li className="text-white flex justify-between py-4">
                <span>Monday - Friday</span>
                <span>8:00 - 22:00</span>
              </li>
              <li className="text-white flex justify-between py-4">
                <span>Saturday</span>
                <span>10:00 - 18:00</span>
              </li>
              <li className="text-white flex justify-between py-4">
                <span>Sunday</span>
                <span>10:00 - 14:00</span>
              </li>
            </ul>
          </div>
          <div className="basis-3/4 md:basis-1/3 mx-4">
            <h4 className="font-semibold text-xl text-slate-800 text-center mb-6">Contact Us</h4>
            <div className="text-white leading-5 text-center">
              <p>65th Avenue Street, Now York 109827</p>
              <p className="font-bold text-2xl">+(12) 999 888 777</p>
              <p className="font-bold text-2xl">+(14) 112 888 333</p>
              <p>pizza@website.com</p>
            </div>
          </div>
          <div className="basis-3/4 md:basis-1/3 mx-4">
            <h4 className="font-semibold text-xl text-slate-800 text-center mb-6">Newsletter</h4>
            <div>
              <p className="text-white mb-4">You can trust us, we are not sending any spam but only our promo offers.</p>
              <div className="relative">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="py-4 pl-6 pr-[4rem] border-none outline-none rounded-full w-full h-[40px]"
                />
                <button 
                  type="button"
                  className="rounded-full border-none outline-none 
                  absolute right-[2px] top-[2px] transition duration-300 text-orange-500 hover:text-slate-800"
                >
                  <BsFillArrowRightCircleFill className="w-[36px] h-[36px]" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-slate-800">
        <div className="container mx-auto px-6 text-white flex flex-col items-center md:flex-row 
        justify-center md:justify-between py-4">
          <p className="mb-4 md:mb-0">Copyright &copy; 2022. All Rights Reserved.</p>
          <ul className="list-none flex">
            <li>
              <a href="/" className="bg-black p-3 block mx-1
              transition duration-300 hover:bg-white hover:text-black">
                <FaFacebookF />
              </a>
            </li>
            <li>
              <a href="/" className="bg-black p-3 block mx-1
              transition duration-300 hover:bg-white hover:text-black">
                <FaTwitter />
              </a>
            </li>
            <li>
              <a href="/" className="bg-black p-3 block mx-1
              transition duration-300 hover:bg-white hover:text-black">
                <FaInstagram />
              </a>
            </li>
            <li>
              <a href="/" className="bg-black p-3 block mx-1
              transition duration-300 hover:bg-white hover:text-black">
                <FaPinterestP />
              </a>
            </li>
          </ul>
        </div>
      </div>
      
    </footer>
  )
}

export default Footer