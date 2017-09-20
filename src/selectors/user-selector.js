import { createSelector } from 'reselect'

export const currentUserUidSelector = (state) => state.users.uid;
export const currentUserEmailSelector = (state) => state.users.email;
export const authorizedSelector = (state) => state.users.authorized;
