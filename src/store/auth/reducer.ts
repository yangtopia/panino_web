import { createReducer } from 'typesafe-actions';
import {
  AuthActionTypes,
  loginAsyncAction,
  logoutAsyncAction,
} from './actions';

export interface AuthState {
  isLoading: boolean;
  isLoggedIn: boolean;
  authInfo: any;
  error: any;
}

const INITIAL_STATE: AuthState = {
  isLoading: false,
  isLoggedIn: false,
  authInfo: undefined,
  error: null,
};

const reducer = createReducer<AuthState, AuthActionTypes>(INITIAL_STATE)
  .handleAction(loginAsyncAction.request, (state) => ({
    ...state,
    isLoading: true,
  }))
  .handleAction(loginAsyncAction.success, (state, { payload }) => ({
    ...state,
    isLoading: false,
    isLoggedIn: true,
    authInfo: payload,
  }))
  .handleAction(loginAsyncAction.failure, (state, { payload }) => ({
    ...state,
    isLoading: false,
    error: payload,
  }))
  .handleAction(logoutAsyncAction.request, (state) => ({
    ...state,
    isLoading: true,
  }))
  .handleAction(logoutAsyncAction.success, (state) => ({
    ...state,
    isLoading: false,
    isLoggedIn: false,
  }))
  .handleAction(logoutAsyncAction.failure, (state, { payload }) => ({
    ...state,
    isLoading: false,
    error: payload,
  }));

export default reducer;
