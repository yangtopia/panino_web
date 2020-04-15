import {
  createMuiTheme,
  Theme as MaterialTheme,
} from '@material-ui/core/styles';

const muiTheme: MaterialTheme = createMuiTheme({
  typography: {
    fontFamily: '"Noto Sans KR"',
  },
  overrides: {},
});

export const paninoTheme = {
  ...muiTheme,
  color: {
    'panino-yellow': '#fdd108',
    'panino-yellow-w-bg': '#fcc30b',
    'panino-down-yellow': '#ffbc00',
    'panino-gray': '#f5f3f2',
    'panino-charcol': '#262626',
    'panino-black': '#000000',
  },
};

export type PaninoTheme = typeof paninoTheme;
