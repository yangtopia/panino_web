import React from 'react';
import { NextPage } from 'next';

import App from '@components/App';
import { Translate } from 'react-localize-redux';

const IndexPage: NextPage = () => {
  return (
    <App>
      <p>
        <Translate id="common.index" />
      </p>
    </App>
  );
};

export default IndexPage;
