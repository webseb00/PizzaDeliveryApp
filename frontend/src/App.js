import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './pages/Main';
import Cart from './pages/Cart';
import Product from './pages/Product';
import Login from './pages/Login';
import OrderStatus from './pages/OrderStatus';
import Dashboard from './pages/Dashboard';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <Header />
          <div className="pt-[60px]">
            <Routes>
              <Route path="/" element={<Main />} />
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
