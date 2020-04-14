import React from 'react';
import { NextPage } from 'next';
import { Translate } from 'react-localize-redux';
import firebase from 'firebase';
import { auth } from 'firebaseui';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';

import App from '@components/App';

const uiConfig: auth.Config = {
  signInFlow: 'popup',
  signInSuccessUrl: '/about',
  signInOptions: [firebase.auth.EmailAuthProvider.PROVIDER_ID],
};

const IndexPage: NextPage = () => {
  return (
    <App>
      <p>
        <Translate id="common.index" />
      </p>
      <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
    </App>
  );
};

export default IndexPage;
