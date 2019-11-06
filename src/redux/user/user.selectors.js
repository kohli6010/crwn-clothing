import { createSelector } from 'reselect';

const userSelector = state => {
	console.log(state.user);
	return state.user;
};

export const selectCurrentUser = createSelector(
	[userSelector],
	(user) => user.currentUser
)
