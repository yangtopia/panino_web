import * as admin from 'firebase-admin';

export const verifyToken = (token) => {
  const firebasePrivateKey = process.env.FIREBASE.PRIVATE_KEY;
  if (!admin.apps.length) {
    admin.initializeApp({
      credential: admin.credential.cert({
        projectId: process.env.FIREBASE.PROJECT_ID,
        clientEmail: process.env.FIREBASE.CLIENT_EMAIL,
        privateKey: firebasePrivateKey.replace(/\\n/g, '\n'),
      }),
      databaseURL: process.env.FIREBASE.DATABASE_URL,
    });
  }

  return admin
    .auth()
    .verifyIdToken(token)
    .catch((error) => {
      throw error;
    });
};
