import React from 'react';
import Home from './pages/Home';
import ProductsProvider from './providers/ProductsProvider';
import CartProvider from './providers/CartProvider';

const App = () => {
  return (
    <ProductsProvider>
      <CartProvider>
        <Home />
      </CartProvider>
    </ProductsProvider>
  );
}

export default App;
