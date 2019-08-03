import { UPDATE_COLLECTIONS } from "../constants";

const initialState = {
  collections: null
};

export const shop = (state = initialState, action: any) => {
  switch (action.type) {
    case UPDATE_COLLECTIONS:
      return { ...state, collections: action.payload };
    default:
      return state;
  }
};
