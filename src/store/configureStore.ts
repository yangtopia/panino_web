import { createStore, compose, applyMiddleware, Store } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';

import rootReducer, { RootState } from './rootReducer';
import { registerStore } from './storeService';

const middlewares = [thunkMiddleware];

const enhancer =
  process.env.NODE_ENV !== 'production'
    ? compose(applyMiddleware(...middlewares))
    : composeWithDevTools({})(applyMiddleware(...middlewares));

export default function configureStore(initialState = {}): Store<RootState> {
  const store = createStore(rootReducer, initialState, enhancer);
  registerStore(store);

  if (process.env.NODE_ENV === 'development' && module.hot) {
    module.hot.accept(() => {
      store.replaceReducer(require('./rootReducer').default);
    });
  }

  return store;
}
