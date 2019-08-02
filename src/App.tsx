import React, { useEffect } from "react";
import "./App.scss";
import { Route, Switch, Redirect } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ShopPage from "./pages/Shop";
import Header from "./components/Header";
import SignInAndSignUp from "./pages/SignInAndSignUp";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import // IUser
// IReduxStore,
// IUserState,
// IReduxDispatch,
// IUserAction
"./types";
import { connect } from "react-redux";
import { setCurrentUser } from "./redux/user/actions";

const mapStateToProps = (state: any): any => ({ ...state.user });

const mapDispatchToProps = (dispatch: any): any => ({
  setCurrentUser: (user: any): void => dispatch(setCurrentUser(user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(
  (props: any): JSX.Element => {
    useEffect(() => {
      const unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
        if (userAuth) {
          const token = await userAuth.getIdToken();

          const userRef = await createUserProfileDocument(userAuth);
          if (userRef === undefined) {
            props.setCurrentUser(userAuth);
          } else {
            userRef.onSnapshot(snapShot => {
              props.setCurrentUser({
                id: snapShot.id,
                ...snapShot.data(),
                token
              });
            });
          }
        } else {
          props.setCurrentUser(userAuth);
        }
      });
      return () => unsubscribeFromAuth();
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return (
      <>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route
            exact
            path="/signin"
            render={() =>
              props.currentUser ? <Redirect to="/" /> : <SignInAndSignUp />
            }
          />
        </Switch>
      </>
    );
  }
);
