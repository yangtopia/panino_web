import React, { useEffect } from 'react';
import { useRouter } from 'next/router';

import { useFirebaseAuth } from '@hooks/useFirebaseAuth';

const LoadingComponent: React.FC = () => {
  const { user } = useFirebaseAuth();
  const router = useRouter();
  useEffect(() => {
    router.push('/');
  }, [user]);
  return <h4>Loading...</h4>;
};

export default LoadingComponent;
