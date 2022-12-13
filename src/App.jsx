import { BrowserRouter as Router } from 'react-router-dom';
import { NavbarDropMenu, Footer, Header, Cart } from './components';
import AnimateRoutes from './AnimateRoutes';
import { QueryClientProvider, QueryClient } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <NavbarDropMenu />
        <Header />
        <Cart />
        <AnimateRoutes />
        <Footer />
      </Router>
      <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
    </QueryClientProvider>
  );
}

export default App;
