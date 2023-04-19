/** @format */
import { useState } from 'react';
import CartContext from './cart-context';

const CartProvider = (props) => {
  const addItemToCartHandler = (item) => {
    cartContext.items.push(item);

    setCartContext((prevCartContext) => {
      return {
        items: prevCartContext.items,
        totalAmount: prevCartContext.totalAmount,
        addItem: addItemToCartHandler,
        removeItem: removeItemFromCartHandler,
      };
    });
  };

  const removeItemFromCartHandler = (id) => {};

  const [cartContext, setCartContext] = useState({
    items: [],
    totalAmount: 0,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  });

  console.log(cartContext);

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
