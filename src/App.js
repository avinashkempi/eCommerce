// import './App.scss';

import { Route, Routes } from 'react-router-dom';
import React, { lazy, Suspense } from 'react';

//Pages name
const Home = lazy(() => import('./components/Home'));
const Cart = lazy(() => import('./components/cart'));
const ThankYou = lazy(() => import('./components/ThankYou'));
const ProductDetail = lazy(() => import('./components/productDetail'));
const Layout = lazy(() => import('./components/Layout'));

function App() {
  return (
    <Layout>
      <Suspense fallback={<div className='text-center'>Loading.....</div>}>
        <Routes>
          <Route path='*' element={<Home />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/thank-you' element={<ThankYou />} />
          <Route path='/product/:id' element={<ProductDetail />} />
        </Routes>
      </Suspense>
    </Layout>
  );
}

export default App;
