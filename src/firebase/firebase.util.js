import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDZ0xgMjZExv9Q5l1IVuUQXz0AlLYjZMw0",
    authDomain: "crwn-db-f9772.firebaseapp.com",
    databaseURL: "https://crwn-db-f9772.firebaseio.com",
    projectId: "crwn-db-f9772",
    storageBucket: "crwn-db-f9772.appspot.com",
    messagingSenderId: "172443685230",
    appId: "1:172443685230:web:806e6c159d8cdd6bcb317f",
    measurementId: "G-1E4PFE4ZL3"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};



//Authentication
firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore = firebase.firestore();
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);



export default firebase;