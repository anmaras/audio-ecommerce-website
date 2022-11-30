import {
  ADD_TO_CART,
  CLEAR_CART,
  TOGGLE_CART_ITEM_AMOUNT,
  REMOVE_CART_ITEM,
  COUNT_CART_TOTALS,
} from '../actions/actions';

const cart_reducer = (state, action) => {
  if (action.type === ADD_TO_CART) {
    const { amount, product, id } = action.payload;
    /* find the item  */
    const tempItem = state.cart.find((item) => item.id === id);
    console.log(tempItem);

    /* if item exist in cart */

    if (tempItem) {
      /* return a new array if item exist and update the amount */
      const tempCart = state.cart.map((item) => {
        if (item.id === id) {
          let newAmount = item.amount + amount;

          return { ...item, amount: newAmount };
        } else {
          return item;
        }
      });
      return { ...state, cart: tempCart };
    } else {
      /* if the product does not exist create a new obj with
      specific properties and added to the cart */
      const newItem = {
        amount,
        price: product.price,
        id: id,
        name: product.name,
        image: `/src/assets/cart/image-${product.slug}.jpg`,
      };

      return { ...state, cart: [...state.cart, newItem] };
    }
  }

  throw new Error(`No Matching "${action.type}" - action type`);
};

export default cart_reducer;
