import React from "react";
import { connect } from "react-redux";
import { clearItem, removeItem, addItem } from "../../redux/cart/actions";

import {
  CheckoutItemContainer,
  ImageContainer,
  Img,
  SpanContainer,
  QuantityContainer,
  QuantityArrow,
  QuantityValue,
  RemoveButton
} from "./styles";

import { ICollectionItemWithQuantity } from "../../types";

const CheckoutItem = ({
  cartItem,
  clearItem,
  removeItem,
  addItem
}: any): JSX.Element => {
  const { name, imageUrl, price, quantity } = cartItem;
  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <Img alt="item" src={imageUrl} />
      </ImageContainer>
      <SpanContainer>{name}</SpanContainer>
      <QuantityContainer>
        <QuantityArrow onClick={() => removeItem(cartItem)}>
          &#10094;
        </QuantityArrow>
        <QuantityValue> {quantity}</QuantityValue>
        <QuantityArrow onClick={() => addItem(cartItem)}>
          &#10095;
        </QuantityArrow>
      </QuantityContainer>
      <SpanContainer>{price}</SpanContainer>
      <RemoveButton onClick={() => clearItem(cartItem)}>&#10005;</RemoveButton>
    </CheckoutItemContainer>
  );
};

const mapDispatchToProps = (dispatch: any) => ({
  clearItem: (item: ICollectionItemWithQuantity) => dispatch(clearItem(item)),
  removeItem: (item: ICollectionItemWithQuantity) => dispatch(removeItem(item)),
  addItem: (item: ICollectionItemWithQuantity) => dispatch(addItem(item))
});

export default connect(
  null,
  mapDispatchToProps
)(CheckoutItem);
