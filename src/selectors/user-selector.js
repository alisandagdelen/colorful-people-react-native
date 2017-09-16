import { createSelector } from 'reselect'

export const currentUserSelector = (state) => state.users.currentUser;
export const authorizedSelector = (state) => state.users.authorized;

