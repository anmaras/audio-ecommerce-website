import React, { Suspense, lazy } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { Spinner } from './components';
import { CheckOutPage } from './pages';

const Home = lazy(() => import('./pages/HomePage'));
const Categories = lazy(() => import('./pages/ProductsPage'));
const Product = lazy(() => import('./pages/SingleProductPage'));
// const CheckOut = lazy(() => import('./pages/CheckOutPage'));
const Error = lazy(() => import('./pages/ErrorPage'));

const AnimateRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Suspense fallback={<Spinner />}>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/products/:category" element={<Categories />} />
          <Route path="/products/:category/:id" element={<Product />} />
          <Route path="/checkout" element={<CheckOutPage />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Suspense>
    </AnimatePresence>
  );
};

export default AnimateRoutes;
