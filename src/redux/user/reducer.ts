import { IUserAction, IUserState } from "../../types";
import { SET_CURRENT_USER } from "../constants";

const initialState: IUserState = {
  currentUser: null
};

export const user = (
  state: IUserState = initialState,
  action: IUserAction
): IUserState => {
  switch (action.type) {
    case SET_CURRENT_USER:
      return { ...state, currentUser: action.payload.currentUser };
    default:
      return state;
  }
};
