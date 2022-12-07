import {
  ADD_TO_CART,
  CLEAR_CART,
  TOGGLE_CART_ITEM_AMOUNT,
  COUNT_CART_TOTALS,
} from '../actions/actions';

const cart_reducer = (state, action) => {
  if (action.type === ADD_TO_CART) {
    const { amount, product, id } = action.payload;
    const { price, id: productId, name, slug, category } = product;
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
        price,
        productId,
        name,
        image: `/src/assets/cart/image-${slug}.jpg`,
        slug,
        category,
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

  if (action.type === COUNT_CART_TOTALS) {
    const { total_items, total_amount, total_vat } = state.cart.reduce(
      (total, cartItem) => {
        const { amount, price } = cartItem;
        /* add the amount of items to total items */
        total.total_items += amount;
        /* get the total price */
        total.total_amount += amount * price;
        /* calculate the vat based the amount  */
        total.total_vat = total.total_amount * state.vat;
        /* return the total obj */
        return total;
      },
      /* initial obj */
      { total_items: 0, total_amount: 0, total_vat: 0 }
    );
    /* return the state from the deconstruction of the reducer */
    return { ...state, total_items, total_amount, total_vat };
  }

  if (action.type === CLEAR_CART) {
    return { ...state, cart: [] };
  }

  throw new Error(`No Matching "${action.type}" - action type`);
};

export default cart_reducer;
