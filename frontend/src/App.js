import axios from 'axios';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Order from './pages/Order'
import Shoppingcart from './components/Shoppingcart';
import Products from './pages/Products';
import Footer from './components/Footer';
import Carousel from './components/Carousel/Carousel';

const URL = 'http://localhost:3000/backend/'

function App() {
  return (
    <>
      <Header />

      <div className='container'>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/kategoriat/:categoryId" element={<Products url={URL}/>} />
          <Route path="/kategoriat/:categoryId/:subcategoryId" element={<Products url={URL}/>} />
          <Route path="/order" element={<Order />} />
          <Route path="/shoppingcart" element={<Shoppingcart />} />
        </Routes>

      </div>

      <Footer />
    </>
  );
}

export default App;