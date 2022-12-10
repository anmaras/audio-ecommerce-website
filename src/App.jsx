import { BrowserRouter as Router } from 'react-router-dom';
import { NavbarDropMenu, Footer, Header, Cart } from './components';
import AnimateRoutes from './AnimateRoutes';

function App() {
  return (
    <Router>
      <NavbarDropMenu />
      <Header />
      <Cart />
      <AnimateRoutes />
      <Footer />
    </Router>
  );
}

export default App;
