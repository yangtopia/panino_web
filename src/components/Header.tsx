/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Link from 'next/link';

import styled from 'styled-components';

const Header = styled.header`
  background-color: ${(props) => props.theme.color['nxv-yellow']};
`;

export default ({ pathname }: { pathname?: any }) => (
  <Header>
    <Link href="/">
      <a className={pathname === '/' ? 'is-active' : ''}>Home</a>
    </Link>
    <Link href="/about">
      <a className={pathname === '/about' ? 'is-active' : ''}>About</a>
    </Link>
  </Header>
);
