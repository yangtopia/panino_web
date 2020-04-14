import { combineReducers } from 'redux';

import article, { ArticleState } from './article/reducer';

export interface RootState {
  article: ArticleState;
}

const rootReducer = combineReducers<RootState>({
  article,
});

export default rootReducer;
