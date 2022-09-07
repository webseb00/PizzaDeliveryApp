import React, { useState } from 'react'
import { TbPizzaOff } from 'react-icons/tb'
import { useSelector } from 'react-redux'
import ModalDelivery from '../components/ModalDelivery'
import CartItem from '../components/CartItem'
import PayPalComponent from '../components/PayPalComponent'

const Cart = () => {

  const [checkout, setCheckout] = useState(false);
  const [modalDelivery, setModalDelivery] = useState(false);
  const { cart, total } = useSelector((state) => state.cart);

  const handleCheckout = () => setCheckout(true);

  return (
    <div className="container mx-auto px-6 py-[6rem]">
      {cart && cart.length ?
      <div className="flex flex-col lg:flex-row min-w-[430px] lg:items-start">
        <div className="flex-1 lg:flex-[3] mb-[3rem] lg:mr-[3rem]">
          <table className="table-fixed w-full text-sm text-center text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th className="py-3 px-6 text-md">#</th>
                <th className="py-3 px-6 text-md">Name</th>
                <th className="py-3 px-6 text-md">Price</th>
                <th className="py-3 px-6 text-md">Quantity</th>
                <th className="py-3 px-6 text-md">Total</th>
                <th className="py-3 px-6 text-md"></th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item, idx) => (
                <CartItem key={idx} { ...item } />
              ))}
            </tbody>
          </table>
        </div>
        <div className="flex-1 bg-slate-600 shadow-md text-white p-[2rem]">
          <h4 className="uppercase font-semibold text-2xl">cart total</h4>
          <ul className="list-none my-4">
            <li>
              <span className="font-semibold">Subtotal:</span> {total.toFixed(2)}$
            </li>
            <li>
              <span className="font-semibold">Discount:</span> 0.00$</li>
            <li>
              <span className="font-semibold">Total:</span> {total.toFixed(2)}$
            </li>
          </ul>     
          {!checkout ? 
            <button 
              type="button"
              className="block bg-orange-500 uppercase font-semibold border-none
              outline-none w-full py-2 transition duration-300 hover:opacity-70"
              onClick={handleCheckout}
            >
              Checkout Now!  
            </button>  
            :
            <>
              <button 
                type="button"
                className="block bg-slate-200 text-green-600 uppercase font-semibold border-none
                outline-none w-full py-2 transition duration-300 hover:opacity-70"
                onClick={() => setModalDelivery(true)}
              >
                Cash On Delivery 
              </button>  
              {/* <PayPalComponent /> */}
              {/* <button 
                type="button"
                className="block bg-yellow-400 text-white uppercase font-semibold border-none
                outline-none w-full py-2 transition duration-300 hover:opacity-70"
              >
                PayPal 
              </button>   */}
            </>
          }
        </div>
      </div>
      :
      <div className="text-gray-300 font-bold">
        <h4 className="text-center text-xl mb-6">Your cart is empty...</h4>
        <TbPizzaOff className="text-8xl mx-auto rotate-[230deg]" />
      </div>
      }
      {modalDelivery && <ModalDelivery handleModal={setModalDelivery} />}
    </div>
  )
}

export default Cart