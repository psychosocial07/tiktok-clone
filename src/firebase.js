import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAq_sEKehuK0l0sbM-J0IwtD89f8PKp13U",
  authDomain: "tiktok-clone-6f799.firebaseapp.com",
  projectId: "tiktok-clone-6f799",
  storageBucket: "tiktok-clone-6f799.appspot.com",
  messagingSenderId: "338228856272",
  appId: "1:338228856272:web:f8e293ba66933b82b8e5d5",
  measurementId: "G-NKKD0P5LNG"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;