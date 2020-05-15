/* eslint-disable no-console */
import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
import next from 'next';

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev, conf: { distDir: 'next' } });
const handle = app.getRequestHandler();

admin.initializeApp({
  credential: admin.credential.cert('./serviceAccountKey.json'),
  databaseURL: 'https://panino-95ab4.firebaseio.com',
});

export const nextApp = functions.https.onRequest((req, res) => {
  console.log(`File: ${req.originalUrl}`);
  return app.prepare().then(() => handle(req, res));
});

function updateOrCreateuser(
  userId: string,
  displayName: string,
  photoURL: string,
  email: string,
) {
  return admin
    .auth()
    .updateUser(userId, { displayName, email, photoURL })
    .catch((error) => {
      if (error.code === 'auth/user-not-found') {
        return admin.auth().createUser({
          uid: userId,
          email,
          displayName,
          photoURL,
        });
      }
      console.error(error);
      throw error;
    });
}

export const getFirebaseToken = functions.https.onRequest(async (req, res) => {
  const { userId, email, photoURL, nickname } = req.body;

  try {
    const { uid } = await updateOrCreateuser(userId, nickname, photoURL, email);
    const firebaseToken = await admin
      .auth()
      .createCustomToken(uid, { provider: 'KAKAO' });
    res.send({ firebaseToken });
  } catch (error) {
    console.error(error);
    res.send({ firebaseToken: undefined });
  }
});
