import React from 'react';
import { NextPage } from 'next';

import MainContainer from '@containers/LayoutContainer';
import UserComponent from '@components/UserComponent';

const IndexPage: NextPage = () => {
  return (
    <MainContainer>
      <UserComponent />
    </MainContainer>
  );
};

export default IndexPage;
