import { createSelector } from "reselect";

const selectDirectory = (state: any) => state.directory;

export const selectSections = createSelector(
  [selectDirectory],
  directory => directory.sections
);
