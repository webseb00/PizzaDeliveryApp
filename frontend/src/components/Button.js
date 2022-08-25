import React from 'react'

const Button = ({ text }) => {
  return (
    <button
      type="button"
      className="py-3 px-6 bg-orange-500 text-white border-none
      outline-none uppercase font-semibold transition duration-300 hover:bg-orange-400
      hover:shadow-lg active:shadow-sm"
    >
      {text}
    </button>
  )
}

export default Button