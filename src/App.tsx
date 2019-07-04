import React, { useState, useEffect } from "react";
import "./App.scss";
import { Route, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ShopPage from "./pages/Shop";
import Header from "./components/Header";
import SignInAndSignUp from "./pages/SignInAndSignUp";
import { auth } from "./firebase/firebase.utils";

export default (): JSX.Element => {
  const [currentUser, setCurrentUser] = useState<
    firebase.User | null | undefined
  >(null);
  useEffect(() => {
    const unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      setCurrentUser(user);
    });
    return () => unsubscribeFromAuth();
  });
  return (
    <>
      <Header currentUser={currentUser} />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/signin" component={SignInAndSignUp} />
      </Switch>
    </>
  );
};
