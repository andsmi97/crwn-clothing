import {
  TOGGLE_CART_HIDDEN,
  ADD_ITEM,
  CLEAR_ITEM_FROM_CART,
  CLEAR_CART,
  REMOVE_ITEM
} from "../constants";

export const toggleCartHidden = () => ({ type: TOGGLE_CART_HIDDEN });

export const addItem = (item: any) => ({
  type: ADD_ITEM,
  payload: item
});

export const clearItem = (item: any) => ({
  type: CLEAR_ITEM_FROM_CART,
  payload: item
});

export const clearCart = () => ({
  type: CLEAR_CART
});

export const removeItem = (item: any) => ({
  type: REMOVE_ITEM,
  payload: item
});
