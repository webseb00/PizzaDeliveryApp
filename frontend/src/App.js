import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './pages/Main';
import Cart from './pages/Cart';
import Product from './pages/Product';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/pizza/:id" element={<Product />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
