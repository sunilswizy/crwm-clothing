import { createSelector } from "reselect"

const selectDirectory = state => state.directory

const selectSection = createSelector(
    [selectDirectory],
    directory => directory.sections
)

export default selectSection