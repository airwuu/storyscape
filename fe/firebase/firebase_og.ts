import { initializeApp } from "firebase/app";
// import { getAuth, GoogleAuthProvider } from "firebase/auth";
// import { getFirestore } from "firebase/firestore";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// import firebase from "firebase/compat/app";
// import "firebase/compat/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    // actually this can be exposed but just in case lol
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "storyscape-439106.firebaseapp.com",
  projectId: "storyscape-439106",
  storageBucket: "storyscape-439106.appspot.com",
  messagingSenderId: "130904535807",
  appId: "1:130904535807:web:7f9de7f2b79ae8658a92ca",
  measurementId: "G-SGN1L9EYHS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

// var db = firebase.firestore();

// export { getAuth, GoogleAuthProvider, getFirestore, analytics };
// export 
// export const auth = getAuth(app);
// export const googleProvider = new GoogleAuthProvider();
// export const firestore = getFirestore(app);
// export const serverStamp = firebase.firestore.Timestamp