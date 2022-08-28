import axios from 'axios'

const API_URL = '/api/pizza'

const getAllProducts = async () => {
  const response = await axios.get(API_URL);

  return response.data;
}

const getProduct = async (id) => {
  const response = await axios.get(`${API_URL}/${id}`);
  console.log(response.data);
  return response.data; 
}

const productsService = {
  getAllProducts,
  getProduct
}

export default productsService