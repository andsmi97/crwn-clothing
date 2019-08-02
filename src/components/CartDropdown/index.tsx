import React from "react";
import CustomButton from "../CustomButton";

import "./styles.scss";

const CartDropdown = (): JSX.Element => (
  <div className="cart-dropdown">
    <div className="cart-items" />
    <CustomButton>GO TO CHECKOUT</CustomButton>
  </div>
);

export default CartDropdown;
