import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Navbar from './component/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Shop from './pages/Shop';
import Category from './pages/Category';
import Cart from './pages/Cart';
import LoginSingup from './pages/LoginSignup';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  <BrowserRouter>
  <Navbar/>
  <Routes>
    <Route path='/' element={<Shop/>} />
    <Route path='/men' element={<Category category="men" />}/>
    <Route path='/women' element={<Category category="women" />} />
    <Route path='/kid' element={<Category category="kid" />} />
    <Route path='/cart' element={<Cart/>} />
    <Route path='/LoginSignup' element={<LoginSingup/>}/>
  </Routes>
  </BrowserRouter>
  </>
);