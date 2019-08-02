import { createSelector } from "reselect";
import { ICollectionItemWithQuantity } from "../../types";

const selectCart = (state: any) => state.cart;

export const selectCartItems = createSelector(
  [selectCart],
  cart => cart.cartItems
);

export const selectCartHidden = createSelector(
  [selectCart],
  cart => cart.hidden
);

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  cartItems =>
    cartItems.reduce(
      (acc: number, item: ICollectionItemWithQuantity) => acc + item.quantity,
      0
    )
);

export const selectCartTotal = createSelector(
  [selectCartItems],
  cartItems =>
    cartItems.reduce(
      (acc: number, item: ICollectionItemWithQuantity) =>
        acc + item.quantity * item.price,
      0
    )
);
