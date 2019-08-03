import React from "react";
import CartItem from "../CartItem";
import { connect } from "react-redux";
import { selectCartItems } from "../../redux/cart/selectors";
import { createStructuredSelector } from "reselect";
import { withRouter } from "react-router-dom";
import { toggleCartHidden } from "../../redux/cart/actions";
import {
  CartDropdownContainer,
  EmptyMessageContainer,
  CartItemsContainer,
  ButtonContainer
} from "./styles";

//TODO: change type
const CartDropdown = ({ cartItems, history, dispatch }: any): JSX.Element => {
  return (
    <CartDropdownContainer>
      <CartItemsContainer>
        {cartItems.length ? (
          cartItems.map((item: any) => <CartItem key={item.id} item={item} />)
        ) : (
          <EmptyMessageContainer>Your cart is empty</EmptyMessageContainer>
        )}
      </CartItemsContainer>
      <ButtonContainer
        onClick={() => {
          history.push("/checkout");
          dispatch(toggleCartHidden());
        }}
      >
        GO TO CHECKOUT
      </ButtonContainer>
    </CartDropdownContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
});

export default withRouter(connect(
  mapStateToProps,
  null
)(CartDropdown) as any);
