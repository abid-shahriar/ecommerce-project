import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBYQ8lZ9FO7u63vcY8ZbYFLQBYgOTRZrjg",
  authDomain: "ecommerce-bd-35e0d.firebaseapp.com",
  databaseURL: "https://ecommerce-bd-35e0d.firebaseio.com",
  projectId: "ecommerce-bd-35e0d",
  storageBucket: "ecommerce-bd-35e0d.appspot.com",
  messagingSenderId: "596172935165",
  appId: "1:596172935165:web:4f29d0c6588de4edbe1394",
  measurementId: "G-626726T9X0",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ promt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
