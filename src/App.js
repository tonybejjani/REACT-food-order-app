/** @format */
import { React, useState } from 'react';

import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import Cart from './components/Cart/Cart';
import CartProvider from './store/cartProvider';

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };
  return (
    <CartProvider>
      {cartIsShown && <Cart onHideCart={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
// import React, { useState } from 'react';

// import FunctionContextComponent from './FunctionContextComponent';

// export const ThemeContext = React.createContext();

// function App() {
//   const [darkTheme, setDarkTheme] = useState(true);

//   function toggleTheme() {
//     setDarkTheme((prevDarkTheme) => !prevDarkTheme);
//   }

//   return (
//     <>
//       <ThemeContext.Provider value={darkTheme}>
//         <button onClick={toggleTheme}>Toggle Theme</button>
//         <FunctionContextComponent />
//       </ThemeContext.Provider>
//     </>
//   );
// }
//
