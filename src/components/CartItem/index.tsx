import React from "react";

import "./styles.scss";
import { ICollectionItemWithQuantity } from "../../types";

const CartItem = ({
  item: { imageUrl, price, name, quantity }
}: {
  item: ICollectionItemWithQuantity;
}): JSX.Element => (
  <div className="cart-item">
    <img src={imageUrl} alt="item" />
    <div className="item-details">
      <span className="name">{name}</span>
      <span className="price">
        {quantity} x {price}
      </span>
    </div>
  </div>
);

export default CartItem;
