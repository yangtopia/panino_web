import { ThunkAction } from 'redux-thunk';
import { RootState } from '../rootReducer';
import { getArticleListAsyncAction, ArticleActionTypes } from './actions';

export function getArticleListThunk(): ThunkAction<
  void,
  RootState,
  null,
  ArticleActionTypes
> {
  return async (dispatch) => {
    const { request, success, failure } = getArticleListAsyncAction;
    dispatch(request());
    try {
      // api logic here
      dispatch(success([]));
    } catch (error) {
      dispatch(failure(error));
    }
  };
}
