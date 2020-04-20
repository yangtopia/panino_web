import { ThunkAction } from 'redux-thunk';
import { push, replace } from 'connected-next-router';
import { CallRouterMethodAction } from 'connected-next-router/actions';

import firebase from '@utils/initFirebase';

import { RootState } from '../rootReducer';
import {
  loginAsyncAction,
  logoutAsyncAction,
  AuthActionTypes,
} from './actions';

export function loginWithEmailPasswordThunk(
  username: string,
  password: string,
): ThunkAction<void, RootState, any, AuthActionTypes | CallRouterMethodAction> {
  return async (dispatch) => {
    const { request, success, failure } = loginAsyncAction;
    dispatch(request());
    try {
      const auth = firebase.auth();
      const userCredential = await auth.signInWithEmailAndPassword(
        username,
        password,
      );
      dispatch(success(userCredential));
      dispatch(replace('/'));
    } catch (error) {
      dispatch(failure(error));
    }
  };
}

export function loginWithGoogleThunk(): ThunkAction<
  void,
  RootState,
  null,
  AuthActionTypes | CallRouterMethodAction
> {
  return async (dispatch) => {
    const { request, success, failure } = loginAsyncAction;
    dispatch(request());
    try {
      const auth = firebase.auth();
      const userCredential = await auth.signInWithPopup(
        new firebase.auth.GoogleAuthProvider(),
      );
      dispatch(success(userCredential));
      dispatch(replace('/'));
    } catch (error) {
      dispatch(failure(error));
    }
  };
}

export function logout(): ThunkAction<
  void,
  RootState,
  null,
  AuthActionTypes | CallRouterMethodAction
> {
  return async (dispatch) => {
    const { request, success, failure } = logoutAsyncAction;
    dispatch(request());
    try {
      const auth = firebase.auth();
      await auth.signOut();
      dispatch(success());
      dispatch(replace('/'));
    } catch (error) {
      dispatch(failure(error));
    }
  };
}
