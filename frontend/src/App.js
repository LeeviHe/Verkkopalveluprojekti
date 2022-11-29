import axios from 'axios';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Login from './pages/Login/Login';
import Home from './pages/Home/Home';
import Order from './pages/Order/Order'
import Products from './pages/Products/Products';
import Footer from './components/Footer/Footer';
import { useState, useEffect } from 'react';


const URL = 'http://localhost:3000/backend/'

function App() {

  const [cart, setCart] = useState([]);

  useEffect(() => {
    if ('cart' in localStorage) {
      setCart(JSON.parse(localStorage.getItem('cart')));
    }
  }, [])

  function addToCart(product) {
    const newCart = [...cart, product];
    setCart(newCart);
    localStorage.setItem('cart', JSON.stringify(newCart));
  }

  function removeFromCart(product) {
    const itemsWithoutRemoved = cart.filter(item => item.productnumber !== product.productnumber);
    setCart(itemsWithoutRemoved);
    localStorage.setItem('cart', JSON.stringify(itemsWithoutRemoved));
  }

  return (
    <>
      <Header url={URL} cart={cart} removeFromCart={removeFromCart} />

      <div className='container'>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/kategoriat/:categoryId" element={<Products url={URL} addToCart={addToCart} />} />
          <Route path="/kategoriat/:categoryId/:subcategoryId" element={<Products url={URL} addToCart={addToCart} />} />
          <Route path="/order" element={<Order cart={cart} removeFromCart={removeFromCart} />} />
        </Routes>
      </div>

      <Footer />
    </>
  );
}

export default App;