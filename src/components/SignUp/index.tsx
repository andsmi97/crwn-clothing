import React, { useState } from "react";

import "./styles.scss";
import FormInput from "../FormInput";
import CustomButton from "../CustomButton";
import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";

export default (): JSX.Element => {
  const [displayName, setDisplayName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const onSubmit = async (event: React.FormEvent): Promise<void> => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert("passwords don't match");
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );

      await createUserProfileDocument(user, { displayName });

      setDisplayName("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="sign-up">
      <h2>I do not have an account</h2>
      <span>Sign up with your email and password</span>
      <form className="sign-up-form" onSubmit={onSubmit}>
        <FormInput
          name="name"
          type="text"
          value={displayName}
          onChange={setDisplayName}
          required
          label="Name"
        />
        <FormInput
          name="email"
          type="email"
          value={email}
          onChange={setEmail}
          required
          label="Email"
        />
        <FormInput
          name="password"
          type="password"
          value={password}
          onChange={setPassword}
          required
          label="Password"
        />
        <FormInput
          name="confirmPassword"
          type="password"
          value={confirmPassword}
          onChange={setConfirmPassword}
          required
          label="Confirm Password"
        />
        <div className="buttons">
          <CustomButton type="submit">SIGN UP</CustomButton>
        </div>
      </form>
    </div>
  );
};
