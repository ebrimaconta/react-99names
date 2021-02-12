import firebase from 'firebase';
const  firebaseConfig = {
    apiKey: "AIzaSyDHmxxGR7_mDcZooOFsQgmB5Uwnjxqr7lY",
    authDomain: "names-ab1d8.firebaseapp.com",
    projectId: "names-ab1d8",
    storageBucket: "names-ab1d8.appspot.com",
    messagingSenderId: "333218635509",
    appId: "1:333218635509:web:864a8bf594c9b65058afbc",
    measurementId: "G-RV54SPTXD3"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

export default db;