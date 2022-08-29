import React from 'react'
import { FaTimes } from 'react-icons/fa'
import { useDispatch } from 'react-redux'
import { deleteFromCart, calculateTotals } from '../features/cart/cartSlice'

const CartItem = ({ id, name, img, total, quantity, price }) => {

  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteFromCart(id))
    dispatch(calculateTotals())
  } 

  return (
    <tr id={id}>
      <td className="px-2 py-4">
        <img src={img} alt={name} className="w-[50px] md:w-[80px] rounded-full" />
      </td>
      <td className="px-2 py-4">{name}</td>
      <td className="px-2 py-4">{price}</td>
      <td className="px-2 py-4">{quantity}</td>
      <td className="px-2 py-4">{total}</td>
      <td className="px-2 py-4">
        <button
          type="button"
          className="border-none outline-none rounded-md text-2xl text-red-600"
          onClick={handleDelete}
        > 
          <FaTimes />
        </button>
      </td>
    </tr>
  )
}

export default CartItem