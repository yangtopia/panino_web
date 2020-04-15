import firebase from 'firebase/app';
import 'firebase/auth';

const config = {
  apiKey: process.env.FIREBASE.API_KEY,
  authDomain: process.env.FIREBASE.AUTH_DOMAIN,
  databaseUrl: process.env.FIREBASE.DATABASE_URL,
  projectId: process.env.FIREBASE.PROJECT_ID,
};

export default () => {
  if (!firebase.apps.length) {
    firebase.initializeApp(config);
  }
};
