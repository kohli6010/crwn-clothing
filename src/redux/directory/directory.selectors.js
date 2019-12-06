import { createSelector } from 'reselect';

export const directorySelector = (state) => state.directory; 

export const directorySelection = createSelector(
	[directorySelector],
	(directory) => directory
)