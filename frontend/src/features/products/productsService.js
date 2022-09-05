import axios from 'axios'

const API_URL = '/api/pizza'

const getAllProducts = async () => {
  const response = await axios.get(API_URL);

  return response.data;
}

const getProduct = async (id) => {
  const response = await axios.get(`${API_URL}/${id}`);
  
  return response.data; 
}

const addProduct = async (product) => {
  const response = await axios.post(`${API_URL}`, product)

  return response.data;
}

const updateProduct = async (data) => {
  const response = await axios.put(`${API_URL}`, data)
  
  return response.data;
}

const deleteProduct = async (productID) => {
  const response = await axios.delete(`${API_URL}/${productID}`)

  return response.data;
}

const productsService = {
  getAllProducts,
  getProduct,
  addProduct,
  updateProduct,
  deleteProduct
}

export default productsService