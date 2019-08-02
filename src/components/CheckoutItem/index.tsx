import React from "react";
import { connect } from "react-redux";

import "./styles.scss";
import {
  clearItem,
  removeItem,
  addItem,
  clearCart
} from "../../redux/cart/actions";
import { ICollectionItemWithQuantity } from "../../types";

const CheckoutItem = ({
  cartItem,
  clearItem,
  removeItem,
  addItem,
  clearCart
}: any): JSX.Element => {
  const { name, imageUrl, price, quantity } = cartItem;
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img alt="item" src={imageUrl} />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={() => removeItem(cartItem)}>
          &#10094;
        </div>
        <div className="value"> {quantity}</div>
        <div className="arrow" onClick={() => addItem(cartItem)}>
          &#10095;
        </div>
      </span>
      <span className="price">{price}</span>
      <span className="remove-button" onClick={() => clearItem(cartItem)}>
        &#10005;
      </span>
    </div>
  );
};

const mapDispatchToProps = (dispatch: any) => ({
  clearItem: (item: ICollectionItemWithQuantity) => dispatch(clearItem(item)),
  removeItem: (item: ICollectionItemWithQuantity) => dispatch(removeItem(item)),
  addItem: (item: ICollectionItemWithQuantity) => dispatch(addItem(item)),
  clearCart: () => dispatch(clearCart())
});

export default connect(
  null,
  mapDispatchToProps
)(CheckoutItem);
