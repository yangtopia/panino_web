import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import _delay from 'lodash/delay';

import { useFirebaseAuth } from '@hooks/useFirebaseAuth';

const LoadingComponent: React.FC = () => {
  const { user } = useFirebaseAuth();
  const router = useRouter();
  useEffect(() => {
    if (user) {
      _delay(() => router.replace('/'), 1500);
    }
  }, [user]);
  return <h4>Loading...</h4>;
};

export default LoadingComponent;
