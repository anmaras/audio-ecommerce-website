import imgUrl from './assets/shared/desktop/icon-arrow-right.svg';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {
  HomePage,
  CheckOutPage,
  ErrorPage,
  ProductsPage,
  SingleProductPage,
} from './pages';

import { Navbar, Menu } from './components';

function App() {
  // return (
  //   <>
  //     <h1>Morbi interdum mollis sapien</h1>
  //     <h2>Donec nec justo eget felis facilisis</h2>
  //     <p className="overline">Lorem ipsum</p>
  //     <p className="subtitle">Fusce ut est sed dolor gravida convallis</p>
  //     <p>
  //       Lorem ipsum dolor sit, amet consectetur adipisicing elit. In
  //       perspiciatis eius velit saepe deserunt laborum dolore veniam repellat
  //       error sit assumenda, modi soluta totam at numquam? Fuga, molestiae ad!
  //       Repellendus!
  //     </p>
  //     <button className="button-1">see product</button>
  //     <button className="button-2">see product</button>
  //     <button className="button-3">
  //       shop <img className="button-3__icon" src={imgUrl} alt="" />
  //     </button>
  //     <form className="form">
  //       <div className="form__controls">
  //         <label htmlFor="name" className="form__label form__label--text ">
  //           Name
  //         </label>
  //         <p className="form__warning">Wrong format</p>
  //         <input
  //           type="text"
  //           name="name"
  //           id="name"
  //           className="form__input form__input--text "
  //           placeholder="Insert your name"
  //         />
  //       </div>
  //       <div className="form__controls form__controls--radio" tabIndex="0">
  //         <input
  //           type="radio"
  //           name="money"
  //           id="radio"
  //           className="form__input form__input--radio"
  //         />
  //         <label htmlFor="radio" className="form__label form__label--radio">
  //           e-Money
  //         </label>
  //       </div>
  //     </form>
  //     <div className="amount">
  //       <button type="button" className="amount__decrease">
  //         -
  //       </button>
  //       <p className="amount__number">1</p>
  //       <button type="button" className="amount__increase">
  //         +
  //       </button>
  //     </div>
  //   </>
  // );

  return (
    <Router>
      <Navbar />
      <Menu />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="products/:category" element={<ProductsPage />} />
        <Route path="products/:category/:id" element={<SingleProductPage />} />
        <Route path="checkout" element={<CheckOutPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
}

export default App;
