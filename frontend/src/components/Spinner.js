import React from 'react'
import { ImSpinner8 } from 'react-icons/im'

const Spinner = () => {
  return (
    <div className="text-center">
      <ImSpinner8 
        className="text-slate-800 text-4xl animate-spin"
      />
    </div>
  )
}

export default Spinner