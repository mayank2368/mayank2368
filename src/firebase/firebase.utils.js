import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const config = {
  apiKey: "AIzaSyBcx9s_a3EFmGhRNNgZNWQgFKO4VMBkc20",
  authDomain: "shopify-a2224.firebaseapp.com",
  projectId: "shopify-a2224",
  storageBucket: "shopify-a2224.appspot.com",
  messagingSenderId: "982591105116",
  appId: "1:982591105116:web:e172acccdf7331191c5e99",
  measurementId: "G-6BEF3NYE16",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const SignInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
