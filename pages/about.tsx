import React from 'react';
import { NextPage } from 'next';

import App from '@components/App';
import { Translate } from 'react-localize-redux';

const AboutPage: NextPage = () => {
  return (
    <App>
      <p>
        <Translate id="common.about" />
      </p>
    </App>
  );
};

export default AboutPage;
