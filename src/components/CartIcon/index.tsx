import React from "react";
import { toggleCartHidden } from "../../redux/cart/actions";
import { selectCartItemsCount } from "../../redux/cart/selectors";
import { connect } from "react-redux";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";

import "./styles.scss";
import { ICollectionItemWithQuantity } from "../../types";

const CartIcon = ({ toggleCartHidden, itemCount }: any): JSX.Element => (
  <div className="cart-icon" onClick={toggleCartHidden}>
    <ShoppingIcon className="shopping-icon" />
    <span className="item-count">{itemCount}</span>
  </div>
);

const mapStateToProps = (state: any) => ({
  itemCount: selectCartItemsCount(state)
});

const mapDispatchToProps = (dispatch: any) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CartIcon);
