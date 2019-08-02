import React, { useState } from "react";

import "./styles.scss";
import FormInput from "../FormInput";
import CustomButton from "../CustomButton";
import { auth, signInWithGoogle } from "../../firebase/firebase.utils";

export default (): JSX.Element => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const onSubmit = async (event: React.FormEvent): Promise<void> => {
    event.preventDefault();

    try {
      await auth.signInWithEmailAndPassword(email, password);
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <div className="sign-in">
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={onSubmit}>
        <FormInput
          id="email"
          name="email"
          type="email"
          value={email}
          onChange={setEmail}
          required
          label="Email"
        />
        <FormInput
          id="password"
          name="password"
          type="password"
          value={password}
          onChange={setPassword}
          required
          label="Password"
        />
        <div className="buttons">
          <CustomButton type="submit">SIGN IN</CustomButton>
          <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
            SIGN IN WITH GOOGLE
          </CustomButton>
        </div>
      </form>
    </div>
  );
};
