import React from "react";

import "./styles.scss";

export default ({
  children,
  inverted,
  isGoogleSignIn,
  ...restProps
}: any): JSX.Element => {
  return (
    <button
      className={`
        ${inverted && "inverted"} 
        ${isGoogleSignIn && "google-sign-in"} 
        custom-button`}
      {...restProps}
    >
      {children}
    </button>
  );
};
