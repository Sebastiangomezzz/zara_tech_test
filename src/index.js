import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { ProductListPage, ProductDetailPage } from './pages';
import { GlobalLayout } from './layout/GlobalLayout';
import { ApiProvider } from '@reduxjs/toolkit/query/react';
import { productsApiSlice } from './store/api/productsApi';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ApiProvider api={productsApiSlice}>
      <BrowserRouter>
        <GlobalLayout>
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
        </GlobalLayout>
      </BrowserRouter>
    </ApiProvider>
  </React.StrictMode>
);
