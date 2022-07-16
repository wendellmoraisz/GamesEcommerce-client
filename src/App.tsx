import React from 'react';
import Home from './pages/Home';
import ProductsProvider from './providers/ProductsProvider';

const App = () => {
  return (
    <ProductsProvider>
      <Home/>
    </ProductsProvider>
  );
}

export default App;
