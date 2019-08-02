import { ICollectionItemWithQuantity } from "../../types";

export const addItemToCart = (
  cartItems: ICollectionItemWithQuantity[],
  cartItemToAdd: ICollectionItemWithQuantity
): ICollectionItemWithQuantity[] => {
  const existingCartItem = cartItems.find(
    cartItem => cartItem.id === cartItemToAdd.id
  );
  if (existingCartItem) {
    return cartItems.map(cartItem =>
      cartItem.id === cartItemToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }
  return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};

export const clearItemFromCart = (
  cartItems: ICollectionItemWithQuantity[],
  cartItemToClear: ICollectionItemWithQuantity
): ICollectionItemWithQuantity[] => {
  return cartItems.filter(item => item.id !== cartItemToClear.id);
};

export const removeItemFromCart = (
  cartItems: ICollectionItemWithQuantity[],
  cartItemToRemove: ICollectionItemWithQuantity
): ICollectionItemWithQuantity[] => {
  if (cartItemToRemove.quantity === 0) {
    return cartItems;
  }
  return cartItems.map(item => {
    if (item.id === cartItemToRemove.id) {
      return { ...item, quantity: item.quantity - 1 };
    }
    return item;
  });
};
