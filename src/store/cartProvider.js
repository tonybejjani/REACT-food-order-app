/** @format */

import { useReducer } from 'react';
import CartContext from './cart-context';

const CartProvider = (props) => {
  const addItemToCartHandler = (item) => {
    dispatch({ type: ACTIONS.ADD_CART_ITEM, item });
  };

  const removeItemFromCartHandler = (id) => {
    dispatch({ type: ACTIONS.REMOVE_CART_ITEM, id });
  };

  const ACTIONS = {
    ADD_CART_ITEM: 'add-cart-item',
    REMOVE_CART_ITEM: 'remove-cart-item',
  };

  const reduce = (state, action) => {
    switch (action.type) {
      case ACTIONS.ADD_CART_ITEM:
        let updatedItem;
        let updatedItems = [...state.items];

        //retrieve index of the item already available in updated Index
        const itemIndex = updatedItems.findIndex(
          (item) => item.id === action.item.id
        );

        const existingItem = updatedItems[itemIndex];
        console.log(existingItem);

        // locate index of item and update amount
        // else just add the item to array of updated items
        if (existingItem) {
          updatedItem = {
            ...existingItem,
            amount: existingItem.amount + action.item.amount,
          };

          updatedItems[itemIndex] = updatedItem;
        } else {
          updatedItems = [...state.items, action.item];
        }

        const updatedTotalAmount =
          state.totalAmount + action.item.price * action.item.amount;

        return {
          items: updatedItems,
          totalAmount: updatedTotalAmount,
          addItem: addItemToCartHandler,
          removeItem: removeItemFromCartHandler,
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
