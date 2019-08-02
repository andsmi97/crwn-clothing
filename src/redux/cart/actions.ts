import { TOGGLE_CART_HIDDEN, ADD_ITEM } from "../constants";

export const toggleCartHidden = () => ({ type: TOGGLE_CART_HIDDEN });

export const addItem = (item: any) => ({
  type: ADD_ITEM,
  payload: item
});
