import axios from "axios"

const login = async data => {
  const response = await axios.post('/api/admin/login', data)
  
  if(response.data) {
    return response.data
  }
}

const logout = async () => await axios.get('/api/admin/logout')

const authService = {
  login,
  logout
}

export default authService