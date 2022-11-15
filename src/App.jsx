import imgUrl from './assets/shared/desktop/icon-arrow-right.svg';

function App() {
  console.log(imgUrl);
  return (
    <>
      <h1>Morbi interdum mollis sapien</h1>
      <h2>Donec nec justo eget felis facilisis</h2>
      <p className="overline">Lorem ipsum</p>
      <p className="subtitle">Fusce ut est sed dolor gravida convallis</p>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. In
        perspiciatis eius velit saepe deserunt laborum dolore veniam repellat
        error sit assumenda, modi soluta totam at numquam? Fuga, molestiae ad!
        Repellendus!
      </p>
      <button className="button-1">see product</button>
      <button className="button-2">see product</button>
      <button className="button-3">
        shop <img className="button-3__icon" src={imgUrl} alt="" />
      </button>
      <form className="form">
        <div className="form__controls">
          <label htmlFor="name" className="form__label form__label--text">
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            className="form__input form__input--text"
            placeholder="Insert your name"
          />
        </div>
        <div className="form__controls form__controls--radio" tabIndex="0">
          <input
            type="radio"
            name="money"
            id="radio"
            className="form__input form__input--radio"
          />
          <label htmlFor="radio" className="form__label form__label--radio">
            e-Money
          </label>
        </div>
      </form>
    </>
  );
}

export default App;
