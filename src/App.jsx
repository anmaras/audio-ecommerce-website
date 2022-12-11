import { BrowserRouter as Router } from 'react-router-dom';
import { NavbarDropMenu, Footer, Header, Cart } from './components';
import AnimateRoutes from './AnimateRoutes';
import ScrollToTop from './utils/ScrollToTop';

function App() {
  return (
    <Router>
      <NavbarDropMenu />
      <Header />
      <Cart />
      <ScrollToTop />
      <AnimateRoutes />
      <Footer />
    </Router>
  );
}

export default App;
