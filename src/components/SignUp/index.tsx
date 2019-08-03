import React, { useState } from "react";
import FormInput from "../FormInput";
import CustomButton from "../CustomButton";
import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";
import { SignUpContainer } from "./styles";

const SignUp = (): JSX.Element => {
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
    <SignUpContainer>
      <h2>I do not have an account</h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={onSubmit}>
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
        <div>
          <CustomButton type="submit">SIGN UP</CustomButton>
        </div>
      </form>
    </SignUpContainer>
  );
};

export default SignUp;
