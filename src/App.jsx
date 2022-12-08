import { BrowserRouter as Router } from 'react-router-dom';
import { NavbarDropMenu, Footer, Header, Cart } from './components';
import { useProductsContext } from './context/products_context';
import AnimateRoutes from './AnimateRoutes';
import Spinner from './components/Spinner';
import ScrollToTop from './utils/ScrollToTop';

function App() {
  const { products_loading: loading } = useProductsContext();

  if (loading) {
    return <Spinner />;
  }

  return (
    <Router>
      <ScrollToTop />
      <NavbarDropMenu />
      <Header />
      <Cart />
      {/* {loading ? <Spinner /> : <AnimateRoutes />} */}
      <AnimateRoutes />
      <Footer />
    </Router>
  );
}

export default App;
