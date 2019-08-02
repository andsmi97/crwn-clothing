import { data } from "./data";

const initialState = { sections: data };

export const directory = (state = initialState, action: any) => {
  switch (action.type) {
    default:
      return state;
  }
};
