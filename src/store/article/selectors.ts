import { createSelector } from 'reselect';

import { ArticleCard } from '@models/clientModels';
import { RootState } from '../rootReducer';

export const articleSelector = (state: RootState) => state.article;

export const selectArticleList = createSelector(
  [articleSelector],
  (articleState) => articleState.list,
);

export const selectArticleCardList = createSelector(
  [articleSelector],
  (articleState) => {
    const { list } = articleState;
    return list.map<ArticleCard>((article) => {
      return {
        ...article,
      };
    });
  },
);
