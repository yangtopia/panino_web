import { createSelector } from 'reselect';

import { RootState } from '../rootReducer';

export const articleSelector = (state: RootState) => state.auth;

export const selectIsLoggedIn = createSelector(
  [articleSelector],
  (state) => state.isLoggedIn,
);

export const selectAuthInfo = createSelector(
  [articleSelector],
  (state) => state.authInfo,
);
