import { ICollectionItemWithQuantity } from "../../types";

export const addItemToCart = (
  cartItems: ICollectionItemWithQuantity[],
  cartItemToAdd: ICollectionItemWithQuantity
): ICollectionItemWithQuantity[] => {
  console.log(cartItems);
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
