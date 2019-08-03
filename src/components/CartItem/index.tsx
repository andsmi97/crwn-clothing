import React from "react";
import { ICollectionItemWithQuantity } from "../../types";
import {
  CartItemContainer,
  ImgContainer,
  ItemDetailsContainer,
  NameContainer
} from "./styles";

const CartItem = ({
  item: { imageUrl, price, name, quantity }
}: {
  item: ICollectionItemWithQuantity;
}): JSX.Element => (
  <CartItemContainer>
    <ImgContainer src={imageUrl} alt="item" />
    <ItemDetailsContainer>
      <NameContainer>{name}</NameContainer>
      <span>
        {quantity} x {price}$
      </span>
    </ItemDetailsContainer>
  </CartItemContainer>
);

export default CartItem;
