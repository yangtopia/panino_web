import React from 'react';
import { NextPage } from 'next';

import App from '@components/App';

const AboutPage: NextPage = () => {
  return (
    <App>
      <p>About Page</p>
    </App>
  );
};

AboutPage.getInitialProps = async (ctx) => {
  console.log(ctx);
};

export default AboutPage;
