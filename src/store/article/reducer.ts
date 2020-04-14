import { createReducer } from 'typesafe-actions';
import { Article } from '@models/serverModels';
import { getArticleListAsyncAction, ArticleActionTypes } from './actions';

export interface ArticleState {
  isLoading: boolean;
  list: Article[];
  error: any;
}

const INITIAL_STATE: ArticleState = {
  isLoading: false,
  list: [],
  error: null,
};

const reducer = createReducer<ArticleState, ArticleActionTypes>(INITIAL_STATE)
  .handleAction(getArticleListAsyncAction.request, (state) => ({
    ...state,
    isLoading: true,
  }))
  .handleAction(getArticleListAsyncAction.success, (state, action) => ({
    ...state,
    isLoading: false,
    list: [...state.list, ...action.payload],
  }))
  .handleAction(getArticleListAsyncAction.failure, (state, action) => ({
    ...state,
    isLoading: false,
    error: action.payload,
  }));

export default reducer;
