import React from "react";
import "./App.css";
import Footer from "./Footer";
import Header from "./Header";
import Products from './Products';
import { Routes, Route } from 'react-router-dom';
import Details from './Details';
import Cart from './Cart'


export default function App() {

  return (
    <>
      <div className='content'>
        <Header />
        <main>
          <Routes>
            <Route path='/' element={<h1> Welcome to shoe store </h1>} />
            <Route path='/:category' element={<Products />} />
            <Route path='/:category/:id' element={<Details />} />
            <Route path='/cart' element={<Cart />} />
          </Routes>
        </main>
      </div>
      <Footer />
    </>
  );
}
