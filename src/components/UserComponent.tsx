import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import _delay from 'lodash/delay';

import { useFirebaseAuth } from '@hooks/useFirebaseAuth';

const UserComponent: React.FC = () => {
  const { user } = useFirebaseAuth();
  return <h4>{user?.email ?? 'WELCOME TO PANINO'}</h4>;
};

export default UserComponent;
