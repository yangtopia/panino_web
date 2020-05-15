import React, { useEffect } from 'react';
import { useRouter } from 'next/router';

import firebase from '@utils/initFirebase';

interface Props {
  firebaseToken?: string;
}

const LoadingComponent: React.FC<Props> = ({ firebaseToken }) => {
  const router = useRouter();
  useEffect(() => {
    if (firebaseToken) {
      (async () => {
        await firebase.auth().signInWithCustomToken(firebaseToken);
      })();
    }
    router.replace('/');
  }, []);
  return <h4>Loading...</h4>;
};

export default LoadingComponent;
