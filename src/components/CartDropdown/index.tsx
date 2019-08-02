import React from "react";
import CustomButton from "../CustomButton";
import CartItem from "../CartItem";
import { connect } from "react-redux";
import { selectCartItems } from "../../redux/cart/selectors";
import { createStructuredSelector } from "reselect";
import { withRouter } from "react-router-dom";
import { toggleCartHidden } from "../../redux/cart/actions";
import "./styles.scss";
//TODO: change type
const CartDropdown = ({ cartItems, history, dispatch }: any): JSX.Element => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.length ? (
          cartItems.map((item: any) => <CartItem key={item.id} item={item} />)
        ) : (
          <span className="empty-message">Your cart is empty</span>
        )}
      </div>
      <CustomButton
        onClick={() => {
          history.push("/checkout");
          dispatch(toggleCartHidden());
        }}
      >
        GO TO CHECKOUT
      </CustomButton>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
});

export default withRouter(connect(
  mapStateToProps,
  null
)(CartDropdown) as any);
