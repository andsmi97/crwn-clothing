import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import { config } from "../config/firebase";
firebase.initializeApp(config);
export const createUserProfileDocument = async (
  userAuth: firebase.User | null,
  additionalData?: any
) => {
  if (!userAuth) {
    return;
  }
  // var token = result.credential.accessToken;
  // console.log()
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
      console.log("error creating user", error.message);
    }
  }
  return userRef;
};
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ promt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;
