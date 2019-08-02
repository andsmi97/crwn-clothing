import { IUser, IUserAction } from "../../types";
import { SET_CURRENT_USER } from "../constants";
export const setCurrentUser = (user: IUser): IUserAction => ({
  type: SET_CURRENT_USER,
  payload: { currentUser: user }
});
