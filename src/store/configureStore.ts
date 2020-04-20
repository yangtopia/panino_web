import { createStore, compose, applyMiddleware, Store } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import {
  createRouterMiddleware,
  initialRouterState,
} from 'connected-next-router';
import thunkMiddleware from 'redux-thunk';

import rootReducer, { RootState } from './rootReducer';
import { registerStore } from './storeService';

const routerMiddleware = createRouterMiddleware();
const middlewares = [thunkMiddleware, routerMiddleware];

const enhancer =
  process.env.NODE_ENV !== 'production'
    ? compose(applyMiddleware(...middlewares))
    : composeWithDevTools({})(applyMiddleware(...middlewares));

export default function configureStore(
  initialState = {},
  options,
): Store<RootState> {
  const modifiedState = (() => {
    const copy: any = { ...initialState };
    if (options.asPath) {
      copy.router = initialRouterState(options.asPath);
    }
    return copy;
  })();
  const store = createStore(rootReducer, modifiedState, enhancer);
  registerStore(store);

  if (process.env.NODE_ENV === 'development' && module.hot) {
    module.hot.accept(() => {
      store.replaceReducer(require('./rootReducer').default);
    });
  }

  return store;
}
