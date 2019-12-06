import { createSelector } from 'reselect';

const shopSelector = (state) => state.shop;

export const shopSelection = createSelector(
	[shopSelector],
	(shop) => shop
);