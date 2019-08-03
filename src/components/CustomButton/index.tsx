import React from "react";
import { CustomButtonContainer } from "./styles";

const CustomButton = (props: any): JSX.Element => {
  return (
    <CustomButtonContainer {...props}>{props.children}</CustomButtonContainer>
  );
};

export default CustomButton;
