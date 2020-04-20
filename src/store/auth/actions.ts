import { createAction, createAsyncAction, ActionType } from 'typesafe-actions';
import { AuthInfo } from '@models/auth';

export const loginAsyncAction = createAsyncAction(
  'auth/LOGIN_REQUEST',
  'auth/LOGIN_SUCCESS',
  'auth/LOGIN_FAILED',
)<void, firebase.auth.UserCredential, any>();

export const logoutAsyncAction = createAsyncAction(
  'auth/LOGOUT_REQUEST',
  'auth/LOGOUT_SUCCESS',
  'auth/LOGOUT_FAILED',
)<void, void, any>();

export type AuthActionTypes =
  | ActionType<typeof loginAsyncAction>
  | ActionType<typeof logoutAsyncAction>;
