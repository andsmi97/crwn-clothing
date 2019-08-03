import styled from "styled-components";
import CustomButton from "../CustomButton";

export const CartDropdownContainer = styled.div`
  position: absolute;
  width: 280px;
  height: 340px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid black;
  background-color: white;
  top: 90px;
  right: 60px;
  z-index: 5;
`;

export const EmptyMessageContainer = styled.span`
  font-size: 18px;
  justify-self: center;
  align-self: center;
`;

export const CartItemsContainer = styled.div`
  height: 240px;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
`;

export const ButtonContainer = styled(CustomButton)`
  margin-top: auto;
`;
