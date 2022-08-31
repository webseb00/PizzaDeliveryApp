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
      const response = await axios.get(`api/order/${id}`)

      setOrder(response.data)
    } catch(err) {
      console.log(err);
    }

    setIsLoading(false);
  }

  useEffect(() => {
    if(!id) return;

    // setIsLoading(true);
    // fetchOrderData(id);
  }, [])

  if(isLoading) return (
    <div className="h-[80vh] flex justify-center items-center">
      <Spinner />
    </div>
  )

  return (
    <div className="container mx-auto px-6 py-[6rem]">
      <div className="flex flex-col lg:flex-row min-w-[430px] lg:items-start">
        <div className="flex-1 lg:flex-[3] mb-[3rem] lg:mr-[3rem]">
          <table className="table-fixed w-full text-sm text-center text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th className="py-3 px-6 text-md">Order ID</th>
                <th className="py-3 px-6 text-md">Customer</th>
                <th className="py-3 px-6 text-md">Address</th>
                <th className="py-3 px-6 text-md">Total</th>
              </tr>
            </thead>
            <tbody>
              
            </tbody>
          </table>
          <ul className="flex">
            <li className="flex flex-col justify-center items-center m-3 text-lg my-6 animate-pulse">
              <FaCashRegister className="" />
              <p className="my-2">Payment</p>
              <FaCheckCircle  className="text-green-700" />
              {/* <FaTimesCircle className="text-red-700" /> */}
            </li>
            <li className="flex flex-col justify-center items-center m-3 text-lg opacity-40">
              <GiHotMeal className="" />
              <p className="my-2">Preparing</p>
              <FaCheckCircle  className="text-green-700" />
            </li>
            <li className="flex flex-col justify-center items-center m-3 text-lg opacity-40">
              <FaTruck className="" />
              <p className="my-2">On the way</p>
              <FaCheckCircle  className="text-green-700" />
            </li>
            <li className="flex flex-col justify-center items-center m-3 text-lg opacity-40">
              <BsBagCheck className="" />
              <p className="my-2">Delivered!</p>
              <FaCheckCircle  className="text-green-700" />
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
          outline-none w-full py-2">
            cash on delivery
          </div>
        </div>    
      </div>
    </div>
  )
}

export default OrderStatus