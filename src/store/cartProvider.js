/** @format */

import { useReducer } from 'react';
import CartContext from './cart-context';

const CartProvider = (props) => {
  const addItemToCartHandler = (item) => {
    dispatch({ type: ACTIONS.ADD_CART_ITEM, payload: item });
  };

  const removeItemFromCartHandler = (id) => {
    dispatch({ type: ACTIONS.REMOVE_CART_ITEM, payload: id });
  };

  const ACTIONS = {
    ADD_CART_ITEM: 'add-cart-item',
    REMOVE_CART_ITEM: 'remove-cart-item',
  };

  const reduce = (state, action) => {
    switch (action.type) {
      case ACTIONS.ADD_CART_ITEM:
        const updatedItems = state.items.concat(action.payload);
        const updatedTotalAmount =
          state.totalAmount + action.payload.price * action.payload.amount;
        return {
          items: updatedItems,
          totalAmount: updatedTotalAmount,
        };
      default:
        return state;
    }
  };

  const [cartContext, dispatch] = useReducer(reduce, {
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

/** @format */

// /** @format */
// import { useState } from 'react';
// import CartContext from './cart-context';

// const CartProvider = (props) => {
//   const addItemToCartHandler = (item) => {
//     cartContext.items.push(item);

//     setCartContext((prevCartContext) => {
//       return {
//         items: prevCartContext.items,
//         totalAmount: prevCartContext.totalAmount,
//         addItem: addItemToCartHandler,
//         removeItem: removeItemFromCartHandler,
//       };
//     });
//   };

//   const removeItemFromCartHandler = (id) => {};

//   const [cartContext, setCartContext] = useState({
//     items: [],
//     totalAmount: 0,
//     addItem: addItemToCartHandler,
//     removeItem: removeItemFromCartHandler,
//   });

//   console.log(cartContext);

//   return (
//     <CartContext.Provider value={cartContext}>
//       {props.children}
//     </CartContext.Provider>
//   );
// };

// export default CartProvider;
