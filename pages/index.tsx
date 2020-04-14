import React from 'react';
import { NextPage } from 'next';

import App from '@components/App';

const IndexPage: NextPage = () => {
  return (
    <App>
      <p>Index Page</p>
    </App>
  );
};

IndexPage.getInitialProps = async (ctx) => {
  console.log(ctx);
};

export default IndexPage;
