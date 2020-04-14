import { createAsyncAction, ActionType } from 'typesafe-actions';
import { Article } from '@models/serverModels';

const GET_ARTICLE_LIST = 'GET_ARTICLE_LIST';
const GET_ARTICLE_LIST_SUCCESS = 'GET_ARTICLE_LIST_SUCCESS';
const GET_ARTICLE_LIST_ERROR = 'GET_ARTICLE_LIST_ERROR';

export const getArticleListAsyncAction = createAsyncAction(
  GET_ARTICLE_LIST,
  GET_ARTICLE_LIST_SUCCESS,
  GET_ARTICLE_LIST_ERROR,
)<void, Article[], any>();

export type ArticleActionTypes = ActionType<typeof getArticleListAsyncAction>;
