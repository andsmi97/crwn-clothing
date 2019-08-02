import React from "react";
import "./styles.scss";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import { createStructuredSelector } from "reselect";
import {
  IHeader,
  // IUserState,
  // IReduxStore,
  IUserActions,
  IReduxDispatch
} from "../../types";
import { auth } from "../../firebase/firebase.utils";
import { connect } from "react-redux";
import CartIcon from "../CartIcon";
import CartDropdown from "../CartDropdown";
import { selectCurrentUser } from "../../redux/user/selectors";
import { selectCartHidden } from "../../redux/cart/selectors";

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
});

const mapDispatchToProps = (dispatch: IReduxDispatch): IUserActions => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(
  ({ currentUser, hidden }: any): JSX.Element => {
    return (
      <div className="header">
        <Link to="/">
          <Logo className="logo" />
        </Link>
        <div className="options">
          <Link className="option" to="/shop">
            SHOP
          </Link>
          <Link className="option" to="/shop">
            CONTACTS
          </Link>
          {currentUser ? (
            <div className="option" onClick={() => auth.signOut()}>
              SIGN OUT
            </div>
          ) : (
            <Link className="option" to="/signin">
              SIGN IN
            </Link>
          )}
          <CartIcon />
        </div>
        {!hidden && <CartDropdown />}
      </div>
    );
  }
);
