import React from "react";
import { GroupContainer, FormInputContainer, FormInputLabel } from "./styles";
import { IFormInput } from "../../types";

const FormInput = ({ onChange, label, ...props }: IFormInput): JSX.Element => {
  return (
    <GroupContainer>
      <FormInputContainer
        onChange={event => onChange && onChange(event.target.value)}
        {...props}
      />
      {label && (
        <FormInputLabel
          className={`${props.value && (props.value.length && "shrink")}`}
        >
          {label}
        </FormInputLabel>
      )}
    </GroupContainer>
  );
};
export default FormInput;
