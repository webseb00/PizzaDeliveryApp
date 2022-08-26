import React from 'react'
import { useParams } from 'react-router-dom'

const Product = () => {

  const { id } = useParams();

  return (
    <div>Pizza ID: {id}</div>
  )
}

export default Product