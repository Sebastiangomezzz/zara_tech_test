import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { ProductListPage, ProductDetailPage } from './pages';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route
          path='/'
          element={<Navigate to='/products' />}
        />
        <Route
          index
          path='products'
          element={<ProductListPage />}
        />
        <Route
          path='products/:productId'
          element={<ProductDetailPage />}
        />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
