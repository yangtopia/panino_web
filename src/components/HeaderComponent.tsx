import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Link from 'next/link';

import styled from 'styled-components';
import { selectIsLoggedIn, logout } from '@store/auth';
import { useFirebaseAuth } from '@hooks/useFirebaseAuth';

const Header = styled.header`
  font-size: 4rem;
  height: 10rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;
  color: #4e42d4;
`;

const Left = styled.div``;
const Right = styled.div``;

const A = styled.a`
  text-decoration: none;
  cursor: pointer;
  padding: 0 1.5rem;
  &:hover {
    color: #ff3859;
  }
`;

const HeaderComponent: React.FC = () => {
  const dispatch = useDispatch();
  const { isInitializing, user } = useFirebaseAuth();
  const isLogined = useSelector(selectIsLoggedIn);

  const signout = () => {
    dispatch(logout());
  };

  return (
    <Header>
      <Left>
        <Link href="/">
          <A>PANINO</A>
        </Link>
      </Left>
      <Right>
        {user ? (
          <A onClick={signout}>로그아웃</A>
        ) : (
          <Link href="/login">
            <A>로그인</A>
          </Link>
        )}
      </Right>
    </Header>
  );
};

export default HeaderComponent;
