import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
const config = {
  apiKey: "AIzaSyC2mTNCMzCTs8pH2pmMjy7L3p1GHIHW9EM",
  authDomain: "crwn-db-6bb46.firebaseapp.com",
  databaseURL: "https://crwn-db-6bb46.firebaseio.com",
  projectId: "crwn-db-6bb46",
  storageBucket: "",
  messagingSenderId: "610011609716",
  appId: "1:610011609716:web:2af6cbb3463cefdf"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ promt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;
