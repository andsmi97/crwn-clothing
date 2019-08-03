import React from "react";
import SignIn from "../../components/SignIn";
import SignUp from "../../components/SignUp";
import {SignInAndSignUpContainer} from "./styles";

const SignInAndSignUp = (): JSX.Element => (
  <SignInAndSignUpContainer>
    <SignIn />
    <SignUp />
  </SignInAndSignUpContainer>
);

export default SignInAndSignUp;
