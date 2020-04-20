import { combineReducers } from 'redux';
import { routerReducer } from 'connected-next-router';

import auth, { AuthState } from './auth/reducer';

export interface RootState {
  auth: AuthState;
  router: ReturnType<typeof routerReducer>;
}

const rootReducer = combineReducers<RootState>({
  auth,
  router: routerReducer,
});

export default rootReducer;
