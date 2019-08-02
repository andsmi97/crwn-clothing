import { TOGGLE_CART_HIDDEN, ADD_ITEM } from "../constants";
import { addItemToCart } from "./utils";
const initialState = {
  hidden: true,
  cartItems: []
};

//TODO: change types
export const cart = (state = initialState, action: any): any => {
  switch (action.type) {
    case TOGGLE_CART_HIDDEN:
      return { ...state, hidden: !state.hidden };
    case ADD_ITEM:
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload)
      };
    default:
      return state;
  }
};
