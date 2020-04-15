/* eslint-disable @typescript-eslint/no-empty-interface */
import 'styled-components';
import { PaninoTheme } from '../styles/styleTheme';

declare module 'styled-components' {
  export interface DefaultTheme extends PaninoTheme {}
}
