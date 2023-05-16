import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const app = firebase.initializeApp({
  apiKey: "AIzaSyCkYCWKDuzpZuZMna53GMVE3SXA3qun6Vw",
  authDomain: "exem-40cf0.firebaseapp.com",
  projectId: "exem-40cf0",
  storageBucket: "exem-40cf0.appspot.com",
  messagingSenderId: "940602209074",
  appId: "1:940602209074:web:5d02470c6990ffd289dd2b",
  measurementId: "G-YBZGDZPST7",
});

const auth = app.auth();
export { auth };
export default app;
