import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import GlobalStyle from './global/globalStyle';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CartCheckout from './pages/CartCheckout';
import ProductsProvider from './providers/ProductsProvider';
import CartProvider from './providers/CartProvider';
import Login from './pages/Login';
import Admin from './pages/Admin';
import UserTokenProvider from './providers/UserTokenProvider';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <ProductsProvider>
      <CartProvider>
        <UserTokenProvider>
          <GlobalStyle />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<App />} />
              <Route path="/cart" element={<CartCheckout />} />
              <Route path="/admin" element={<Login />} />
              <Route path="/admin/dashboard" element={<Admin />} />
            </Routes>
          </BrowserRouter>
        </UserTokenProvider>
      </CartProvider>
    </ProductsProvider>
  </React.StrictMode>
);
