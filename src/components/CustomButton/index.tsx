import React from "react";

import "./styles.scss";
import { ICustomButton } from "../../types";

export default ({
  children,
  isGoogleSignIn,
  ...restProps
}: ICustomButton): JSX.Element => {
  return (
    <button
      className={`${isGoogleSignIn ? "google-sign-in" : ""} custom-button`}
      {...restProps}
    >
      {children}
    </button>
  );
};
