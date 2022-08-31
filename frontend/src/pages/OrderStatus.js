import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Spinner from '../components/Spinner'
import axios from 'axios'
import { FaCashRegister, FaCheckCircle, FaTruck, FaTimesCircle } from 'react-icons/fa'
import { GiHotMeal } from 'react-icons/gi'
import { BsBagCheck } from 'react-icons/bs'

const OrderStatus = () => {

  const { id } = useParams();
  const [order, setOrder] = useState(null);
  const [orderStatus, setOrderStatus] = useState(0);
  const [isLoading, setIsLoading] = useState(false)
   
  const fetchOrderData = async () => {
    try {
      const response = await axios.get(`/api/order/${id}`)

      setOrder(response.data)
    } catch(err) {
      console.log(err);
    }

    setIsLoading(false);
  }

  useEffect(() => {
    if(!id) return;

    setIsLoading(true);
    fetchOrderData(id);
  }, [])

  if(isLoading) return (
    <div className="h-[80vh] flex justify-center items-center">
      <Spinner />
    </div>
  )

  if(!order && !order?._id) return (
    <div className="h-[80vh] flex justify-center items-center">
      <h2 className="text-center text-2xl text-slate-700 my-8">Sorry, your order ID was not found.</h2>
    </div>
  )

  return (
    <div className="container mx-auto px-6 py-[6rem]">
      <div className="flex flex-col lg:flex-row min-w-[430px] lg:items-start">
        <div className="flex-1 lg:flex-[3] mb-[3rem] lg:mr-[3rem]">
          <table className="table-auto w-full text-sm text-center text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th className="px-2 py-4 text-md">Order ID</th>
                <th className="px-2 py-4 text-md">Customer</th>
                <th className="px-2 py-4 text-md">Address</th>
                <th className="px-2 py-4 text-md">Total</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-2 py-4 text-black font-semibold">{order?._id}</td>
                <td className="px-2 py-4 text-black font-semibold">{order?.firstName} {order?.lastName}</td>
                <td className="px-2 py-4 text-black font-semibold">{order?.address}</td>
                <td className="px-2 py-4 text-black font-semibold">{order?.total}</td>
              </tr>
            </tbody>
          </table>
          <ul className="flex justify-center items-baseline mt-[4rem]">
            <li className={`flex flex-col justify-center items-center m-3 text-lg my-6 
            ${orderStatus === 0 ? 'animate-pulse' : ''}`}>
              <FaCashRegister className="" />
              <p className="my-2">Payment</p>
              {order.method === 1 ? <FaCheckCircle  className="text-green-700" /> : <FaTimesCircle className="text-red-700" />}
            </li>
            <li className={`flex flex-col justify-center items-center m-3 text-lg opacity-40 
            ${orderStatus === 1 ? 'animate-pulse opacity-100' : ''} ${orderStatus > 1 && 'opacity-100'}`}>
              <GiHotMeal className="" />
              <p className="my-2">Preparing</p>
              {orderStatus > 1 && <FaCheckCircle  className="text-green-700" />}
            </li>
            <li className={`flex flex-col justify-center items-center m-3 text-lg opacity-40 
            ${orderStatus === 2 ? 'animate-pulse opacity-100' : ''} ${orderStatus > 2 && 'opacity-100'}`}>
              <FaTruck className="" />
              <p className="my-2">On the way</p>
              {orderStatus > 2 && <FaCheckCircle  className="text-green-700" />}
            </li>
            <li className={`flex flex-col justify-center items-center m-3 text-lg opacity-40 
            ${orderStatus === 3 ? 'animate-pulse opacity-100' : ''} ${orderStatus > 3 && 'opacity-100'}`}>
              <BsBagCheck className="" />
              <p className="my-2">Delivered!</p>
              {orderStatus > 3 && <FaCheckCircle  className="text-green-700" />}
            </li>
          </ul>
        </div>
        <div className="flex-1 bg-slate-600 shadow-md text-white p-[2rem]">
          <h4 className="uppercase font-semibold text-2xl">cart total</h4>
          <ul className="list-none my-4">
            <li>
              <span className="font-semibold">Subtotal:</span> $
            </li>
            <li>
              <span className="font-semibold">Discount:</span> 0.00$</li>
            <li>
              <span className="font-semibold">Total:</span> $
            </li>
          </ul> 
          <div className="block bg-orange-500 uppercase font-semibold border-none
          outline-none w-full py-2 text-center">
            {order.method ? 'PayPal' : 'Cash On Delivery'}
          </div>
        </div>    
      </div>
    </div>
  )
}

export default OrderStatus