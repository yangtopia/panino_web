import React from 'react';
import { NextPage } from 'next';

import MainContainer from '@containers/LayoutContainer';
import LoginFormComponent from '@components/LoginComponent';

const LoginPage: NextPage = () => {
  return (
    <MainContainer>
      <LoginFormComponent />
    </MainContainer>
  );
};

export default LoginPage;
