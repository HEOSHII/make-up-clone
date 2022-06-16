import React from "react";

function Header() {
  return (
    <header className="header container">
      <a className="header__logo" href="#">
        <h1>CloneUP</h1>
      </a>

      <div className="search">
        <input
          className="search__input"
          type={"text"}
          placeholder="search product"
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="300"
          width="300"
          fill="#b1afb3"
          viewBox="0 0 100 100"
        >
          <path d="M88.5 89c-2 2-5.2 2-7.1 0L65.9 73.6C60.1 78 52.8 80.5 45 80.5c-19.3 0-35-15.7-35-35s15.7-35 35-35 35 15.7 35 35c0 7.8-2.6 15.1-6.9 20.9l15.4 15.4c2 2 2 5.2 0 7.2zM45 20.5c-13.8 0-25 11.2-25 25s11.2 25 25 25 25-11.2 25-25-11.2-25-25-25z" />
        </svg>
      </div>

      <div className="cart">
        <div className="cart__basket">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 29">
            <path d="M10.72 0H21.1c4.04 1.04 4.14 5.38 3.97 8.76 2.97.07 6.04 1.12 6.93 4.27v7.52c-.35 5.1-5.17 8.2-9.91 8.45H10.03C5.23 28.82.42 25.66 0 20.57v-7.2C.64 10 3.87 8.81 6.93 8.77 6.78 5.41 6.88 1.25 10.72 0m.35 3.14C9.21 4.46 10.3 7.09 9.96 9h12.08c-.38-1.9.84-4.68-1.17-5.86a59.39 59.39 0 0 0-9.8 0m-6.9 9c-2.13 1.99-.97 5.45-1.08 8.06.07 4.43 5.09 6.07 8.81 5.79 4.65-.22 9.63.79 14.04-1.1 3.74-1.82 3.14-6.54 3.06-9.98.13-1.22-.43-3.03-1.98-2.84-7.61-.09-15.24-.22-22.85.07z" />
          </svg>
          <div className="cart__basket-count">0</div>
        </div>
        Cart
      </div>
    </header>
  );
}

export default Header;
