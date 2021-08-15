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
            <Route path='/' element={<Products />} />
            <Route path='/details' element={<Details />} />
            <Route path='/cart' element={<Cart />} />
          </Routes>
        </main>
      </div>
      <Footer />
    </>
  );
}
