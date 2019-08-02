import { data } from "./data";

const initialState = {
  collections: data
};

export const shop = (state = initialState, action: any) => {
  switch (action.type) {
    default:
      return state;
  }
};
