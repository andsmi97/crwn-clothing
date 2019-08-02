import React from "react";

import "./styles.scss";

const CheckoutItem = ({
  cartItem: { name, imageUrl, price, quantity }
}: any): JSX.Element => {
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img alt="item" src={imageUrl} />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">{quantity}</span>
      <span className="price">{price}</span>
      <span className="remove-button">&#10005;</span>
    </div>
  );
};

export default CheckoutItem;
