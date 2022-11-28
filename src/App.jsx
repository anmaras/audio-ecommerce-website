import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {
  HomePage,
  CheckOutPage,
  ErrorPage,
  ProductsPage,
  SingleProductPage,
} from './pages';

import { NavbarDropMenu, Footer, Header, Cart } from './components';
import FadeLoader from 'react-spinners/FadeLoader';
import { useProductsContext } from './context/products_context';

function App() {
  const { products_loading: loading } = useProductsContext();

  if (loading) {
    return <FadeLoader />;
  }
  return (
    <Router>
      <NavbarDropMenu />
      <Header />
      <Cart />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products/:category" element={<ProductsPage />} />
        <Route path="/products/:category/:id" element={<SingleProductPage />} />
        <Route path="/checkout" element={<CheckOutPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
