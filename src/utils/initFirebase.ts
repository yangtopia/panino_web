/* eslint-disable import/no-duplicates */
import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const firebaseConfig = {
  apiKey: 'AIzaSyBl18eauWTwZtx4tRW3pgbsG855uHvNDlM',
  authDomain: 'panino-95ab4.firebaseapp.com',
  databaseURL: 'https://panino-95ab4.firebaseio.com',
  projectId: 'panino-95ab4',
  storageBucket: 'panino-95ab4.appspot.com',
  messagingSenderId: '1081404926732',
  appId: '1:1081404926732:web:5e6e0ef8ca342043753729',
  measurementId: 'G-MM877EHJEB',
};

function configure() {
  if (firebase.apps.length) {
    return firebase;
  }

  firebase.initializeApp(firebaseConfig);
  return firebase;
}

export default configure();
