import { UPDATE_COLLECTIONS } from "../constants";

export const updateCollections = (collectionsMap: any) => ({
  type: UPDATE_COLLECTIONS,
  payload: collectionsMap
});
