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

const productsService = {
  getAllProducts,
  getProduct,
  addProduct
}

export default productsService