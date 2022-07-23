import React from 'react';
import ReactDOM from 'react-dom/client';
import GlobalStyle from './global/globalStyle';
import ProductsProvider from './providers/ProductsProvider';
import CartProvider from './providers/CartProvider';
import UserTokenProvider from './providers/UserTokenProvider';
import AppRoutes from './routes';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <ProductsProvider>
      <CartProvider>
        <UserTokenProvider>
          <GlobalStyle />
          <AppRoutes />
        </UserTokenProvider>
      </CartProvider>
    </ProductsProvider>
  </React.StrictMode>
);
