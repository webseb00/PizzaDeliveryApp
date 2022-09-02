import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { logout } from '../features/auth/authSlice';
import Cookies from 'universal-cookie';

const Dashboard = () => {

  const navigate = useNavigate('/');
  const cookie = new Cookies();
  const dispatch = useDispatch();
  const { isAuth } = useSelector((state) => state.auth);

  useEffect(() => {
    if(isAuth) {
      const getCookie = cookie.get('token');

      if(!getCookie === process.env.REACT_APP_TOKEN) {
        navigate('/admin/login')
        return;
      } 
    } 

    if(!isAuth) {
      navigate('/admin/login')
    }

  }, [isAuth, dispatch])

  const handleLogout = () => dispatch(logout())
  

  return (
    <>
      <div>admin dashboard</div>
      <button
        type="button"
        onClick={handleLogout}
      >
        logout
      </button>
    </>
  )
}

export default Dashboard