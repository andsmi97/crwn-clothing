import React from "react";
import CustomButton from "../CustomButton";
import CartItem from "../CartItem";
import { connect } from "react-redux";
import { selectCartItems } from "../../redux/cart/selectors";
import "./styles.scss";
//TODO: change type
const CartDropdown = ({ cartItems }: any): JSX.Element => {
  console.log("i am rendered");
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.map((item: any) => (
          <CartItem key={item.id} item={item} />
        ))}
      </div>
      <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
  );
};

const mapStateToProps = (state: any): any => ({
  cartItems: selectCartItems(state)
});

export default connect(
  mapStateToProps,
  null
)(CartDropdown);
