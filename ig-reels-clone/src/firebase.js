import firebase from 'firebase'
const firebaseConfig = {
    apiKey: "AIzaSyDtFOz6kFC2gVOrumF7y7jl9MJ_9iIu_JY",
    authDomain: "ig-reels-clone-32870.firebaseapp.com",
    databaseURL: "https://ig-reels-clone-32870.firebaseio.com",
    projectId: "ig-reels-clone-32870",
    storageBucket: "ig-reels-clone-32870.appspot.com",
    messagingSenderId: "307067042259",
    appId: "1:307067042259:web:54205d6d635364f47b1726",
    measurementId: "G-KSJKES70Y5"
  };

  const fireBaseApp= firebase.initializeApp(firebaseConfig);
  const db=fireBaseApp.firestore();

  export default db;