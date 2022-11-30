import {
  ADD_TO_CART,
  CLEAR_CART,
  TOGGLE_CART_ITEM_AMOUNT,
  COUNT_CART_TOTALS,
} from '../actions/actions';

const cart_reducer = (state, action) => {
  if (action.type === ADD_TO_CART) {
    const { amount, product, id } = action.payload;
    /* find the item  */
    const tempItem = state.cart.find((item) => item.id === id);
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

  if (action.type === TOGGLE_CART_ITEM_AMOUNT) {
    const { id, value } = action.payload;
    /* make a temp array and depend the value add or remove from the 
    cart item amount  */
    const tempCart = state.cart
      .map((item) => {
        if (item.id === id) {
          if (value === 'inc') {
            let newAmount = item.amount + 1;

            return { ...item, amount: newAmount };
          }
          if (value === 'dec') {
            let newAmount = item.amount - 1;

            return { ...item, amount: newAmount };
          }
        }
        return item;
      }) // if amount is lower than 1 remove it from the cart
      .filter((cartItem) => cartItem.amount !== 0);
    return { ...state, cart: tempCart };
  }

  if (action.type === CLEAR_CART) {
    return { ...state, cart: [] };
  }

  throw new Error(`No Matching "${action.type}" - action type`);
};

export default cart_reducer;
