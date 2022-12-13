import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { CartProvider } from './context/cart_context';
import { MenuCartProvider } from './context/menu_cart_context';
import './styles/index.scss';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CartProvider>
      <MenuCartProvider>
        <App />
      </MenuCartProvider>
    </CartProvider>
  </React.StrictMode>
);
