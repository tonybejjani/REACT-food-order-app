/** @format */

import { useReducer } from 'react';
import CartContext from './cart-context';

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const ACTIONS = {
  ADD_CART_ITEM: 'add-cart-item',
  REMOVE_CART_ITEM: 'remove-cart-item',
};

const reduce = (state, action) => {
  let updatedItem;
  let updatedItems = [...state.items];
  //retrieve index of the item already available in updated Index

  switch (action.type) {
    case ACTIONS.ADD_CART_ITEM:
      // locate index of item and update amount
      // else just add the item to array of updated items

      const itemIndex = updatedItems.findIndex((item) => {
        return item.id === action.item.id;
      });
      let existingItem = updatedItems[itemIndex];

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
      };

    case ACTIONS.REMOVE_CART_ITEM:
      // get item to decrement index in items array
      const itemToDecrementIndex = updatedItems.findIndex((item) => {
        return item.id === action.id;
      });

      let itemToDecrement = updatedItems[itemToDecrementIndex];

      // on decrement, update total amount
      let remainingTotalAmount = Math.abs(
        state.totalAmount - itemToDecrement.price
      );

      let remainingItems;

      // get  index of item to remove and decrement amount
      const itemToDecrementAmount = itemToDecrement.amount - 1;

      // if amount left is 0, remove item from Cart
      if (itemToDecrementAmount === 0) {
        remainingItems = updatedItems.filter((item) => {
          return item.id !== action.id;
        });

        // if amount left > 0, decrement amount
      } else {
        updatedItems[itemToDecrementIndex].amount =
          updatedItems[itemToDecrementIndex].amount - 1;
        remainingItems = [...updatedItems];

        // another way
        // remainingItems = updatedItems.map((item) => {
        //   if (item.id === action.id) {
        //     item.amount = item.amount - 1;
        //     return item;
        //   }
        //   return item;
      }

      return {
        items: remainingItems,
        totalAmount: remainingTotalAmount,
      };

    default:
      return defaultCartState;
  }
};

const CartProvider = (props) => {
  const addItemToCartHandler = (item) => {
    dispatch({ type: ACTIONS.ADD_CART_ITEM, item });
  };

  const removeItemFromCartHandler = (id) => {
    dispatch({ type: ACTIONS.REMOVE_CART_ITEM, id });
  };

  const [cartState, dispatch] = useReducer(reduce, defaultCartState);

  const cartContext = {
    items: cartState.items,
    totalAmount: 0,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };
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
