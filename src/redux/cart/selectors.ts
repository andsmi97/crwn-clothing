import { createSelector } from "reselect";
import { ICollectionItemWithQuantity } from "../../types";

const selectCart = (state: any) => state.cart;

export const selectCartItems = createSelector(
  [selectCart],
  cart => cart.cartItems
);

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  cartItems =>
    cartItems.reduce(
      (acc: number, item: ICollectionItemWithQuantity) => acc + item.quantity,
      0
    )
);
