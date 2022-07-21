import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import GlobalStyle from './global/globalStyle';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CartCheckout from './pages/CartCheckout';
import ProductsProvider from './providers/ProductsProvider';
import CartProvider from './providers/CartProvider';
import Login from './components/login';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <ProductsProvider>
      <CartProvider>
        <GlobalStyle />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="/cart" element={<CartCheckout />} />
            <Route path="/login" element={<Login/>}/>
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </ProductsProvider>
  </React.StrictMode>
);
