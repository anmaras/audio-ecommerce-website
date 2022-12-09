import { BrowserRouter as Router } from 'react-router-dom';
import { NavbarDropMenu, Footer, Header, Cart } from './components';
import AnimateRoutes from './AnimateRoutes';
import ScrollToTop from './utils/ScrollToTop';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <NavbarDropMenu />
      <Header />
      <Cart />
      <AnimateRoutes />
      <Footer />
    </Router>
  );
}

export default App;
