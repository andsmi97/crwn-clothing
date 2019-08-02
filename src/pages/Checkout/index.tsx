import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import "./styles.scss";
import { selectCartItems, selectCartTotal } from "../../redux/cart/selectors";
import { ICollectionItemWithQuantity } from "../../types";
import CheckoutItem from "../../components/CheckoutItem";

const Checkout = ({ cartItems, total }: any) => (
  <div className="checkout-page">
    <div className="checkout-header">
      <div className="header-block">
        <span>Product</span>
      </div>
      <div className="header-block">
        <span>Desctiption</span>
      </div>
      <div className="header-block">
        <span>Quantity</span>
      </div>
      <div className="header-block">
        <span>Price</span>
      </div>
      <div className="header-block">
        <span>Remove</span>
      </div>
    </div>
    {cartItems.map((cartItem: ICollectionItemWithQuantity) => (
      <CheckoutItem id={cartItem.id} cartItem={cartItem} />
    ))}
    <div className="total">
      <span>TOTAL: ${total}</span>
    </div>
  </div>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal
});

export default connect(mapStateToProps)(Checkout);
