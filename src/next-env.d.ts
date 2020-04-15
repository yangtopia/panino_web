/// <reference types="next" />
/// <reference types="next/types/global" />

import 'styled-components';
import { PaninoTheme } from './styles/theme';

declare module 'styled-components' {
  export interface DefaultTheme extends PaninoTheme {}
}
