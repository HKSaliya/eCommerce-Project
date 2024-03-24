import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Navbar from './component/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Shop from './pages/Shop';
import Category from './pages/Category';
import Cart from './pages/Cart';
import LoginSingup from './pages/LoginSignup';
import Footer from './component/Footer';
import Shopcontextprovider from './Context/Shopcontext';
import men_banner from "../src/assets/banner_mens.png";
import women_banner from "../src/assets/banner_women.png";
import kids_banner from "../src/assets/banner_kids.png";
import Product from './pages/Product';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <Shopcontextprovider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Shop />} />
          <Route path='/men' element={<Category banner={men_banner} category="men" />} />
          <Route path='/women' element={<Category banner={women_banner} category="women" />} />
          <Route path='/kid' element={<Category banner={kids_banner} category="kid" />} />
          <Route path='/product' element={<Product/>} >
            <Route path=':productId' element={<Product/>} />
          </Route>
          <Route path='/cart' element={<Cart />} />
          <Route path='/LoginSignup' element={<LoginSingup />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </Shopcontextprovider>
  </>
);