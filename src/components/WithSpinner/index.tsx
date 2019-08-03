import React from "react";
import { SpinnerContainer, SpinnerOverlay } from "./styles";

const WithSpinner = (WrappedComponent: any) => ({
  isLoading,
  ...otherProps
}: any): JSX.Element => {
  return isLoading ? (
    <SpinnerOverlay>
      <SpinnerContainer />
    </SpinnerOverlay>
  ) : (
    <WrappedComponent {...otherProps} />
  );
};

export default WithSpinner;
