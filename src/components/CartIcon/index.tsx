import React from "react";
import { toggleCartHidden } from "../../redux/cart/actions";
import { selectCartItemsCount } from "../../redux/cart/selectors";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import {
  CartIconContainer,
  ItemCountContainer,
  ShoppingIconContainer
} from "./styles";

const CartIcon = ({ toggleCartHidden, itemCount }: any): JSX.Element => (
  <CartIconContainer onClick={toggleCartHidden}>
    <ShoppingIconContainer />
    <ItemCountContainer>{itemCount}</ItemCountContainer>
  </CartIconContainer>
);

const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount
});

const mapDispatchToProps = (dispatch: any) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CartIcon);
