import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Spinner from './Spinner'

const OrdersList = () => {

  const [orders, setOrders] = useState(null)
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState(0)

  useEffect(() => {
    fetchOrders();
  }, [])

  const fetchOrders = async () => {
    setIsLoading(true);

    try {
      const response = await axios.get('api/order')
      setOrders(response.data)
    } catch(err) {
      console.log(err)
    }
    
    setIsLoading(false)
  }

  const handleDelete = async (orderID) => {
    try {
      await axios.delete(`api/order/${orderID}`)
      fetchOrders();
    } catch(err) {
      console.log(err)
    }
  }

  const handleOrderStatus = async (e, orderID) => {
    const value = e.target.value;
    
    try {
      await axios.put(`api/order/${orderID}`, { status: value })
      fetchOrders();
    } catch(err) {
      console.log(err)
    }
  }

  if(isLoading) return <Spinner />;

  return (
    <div className="flex flex-col">
      <h2 className="my-4 text-center font-semibold text-2xl">Orders List:</h2>
      <div>
        {orders?.length ? 
          orders.map(order => {
            let createdAtDate = new Date(order.createdAt).toLocaleDateString()
            let createdAtTime = new Date(order.createdAt).toLocaleTimeString()

            return (
              <div key={order._id} className={`flex justify-between mb-6
            border border-gray-300 rounded-md shadow-md p-3 ${order.status === 3 ? 'bg-green-600' : ''}`}>
                <div>
                  <span className="text-orange-500">{order._id}</span>
                  <h3 className="text-slate-800 font-semibold text-lg">{order.firstName} {order.lastName}</h3>
                  <p>{order.address}</p>
                  <div className="flex flex-col border-t border-cyan-800 mt-4 pt-2">
                    <span><strong>Total:</strong> {order.total.toFixed(2)}</span>
                    <span><strong>Payment:</strong> {`${order.method}` ? 'Cash' : 'Paid'}</span>
                    <span><strong>Created At:</strong> {createdAtDate} / {createdAtTime}</span>
                  </div>
                  <div className="border-t border-cyan-800 mt-4 pt-2">
                    <select 
                      className="p-2 border rounded-md"
                      onChange={(e) => handleOrderStatus(e, order._id)}
                    >
                      <option value="" disabled>--- Change order status ---</option>
                      <option value="0" selected={order.status == 0 && true}>Payment</option>
                      <option value="1" selected={order.status == 1 && true}>Preparing</option>
                      <option value="2" selected={order.status == 2 && true}>On the way</option>
                      <option value="3" selected={order.status == 3 && true}>Delivered</option>
                    </select>
                  </div>
                </div>
                <div className="flex flex-col">
                  <button
                    type="button"
                    onClick={() => handleDelete(order._id)}
                    className="bg-red-700 text-white font-semibold rounded-md mr-2
                    py-2 px-6 transition duration-300 hover:opacity-70 shadow-md"
                  >
                    Delete
                  </button>
                </div>
              </div>
            )
          }) : <p>No orders found...</p>
        }
      </div>
    </div>
  )
}

export default OrdersList