import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './pages/Main';
import Cart from './pages/Cart';
import Product from './pages/Product';
import Login from './pages/Login';
import OrderStatus from './pages/OrderStatus';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
          <Routes>
            <Route path="/" element={<Main />} />
          </Routes>
          <div className="pt-[97px]">
            <Routes>
              <Route path="/cart" element={<Cart />} />
              <Route path="/pizza/:id" element={<Product />} />
              <Route path="/admin/login" element={<Login />} />
              <Route path="/admin" element={<Dashboard />} />
              <Route path="/order/:id" element={<OrderStatus />} />
            </Routes>
          </div>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
