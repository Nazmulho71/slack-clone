import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBQr-VwJb8yaTQPmBktqgeAfGEs0vpXJyc",
  authDomain: "slack-clone-ac472.firebaseapp.com",
  projectId: "slack-clone-ac472",
  storageBucket: "slack-clone-ac472.appspot.com",
  messagingSenderId: "368762421647",
  appId: "1:368762421647:web:82bf856b92da6ae747cbfa",
  measurementId: "G-VX1YG2FR6C"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
