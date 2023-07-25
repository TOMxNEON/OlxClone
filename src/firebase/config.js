import firebase from 'firebase';
import 'firebase/auth';
import 'firebase/firebase-storage';


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCmcBb7tICi3aTvMcchJ99NJqr9xetFyP4",
    authDomain: "olxclone-afc9d.firebaseapp.com",
    projectId: "olxclone-afc9d",
    storageBucket: "olxclone-afc9d.appspot.com",
    messagingSenderId: "8365352581",
    appId: "1:8365352581:web:99505579dd1107f0a32bec",
    measurementId: "G-C1CMNNKD9V"
  };

  export default firebase.initializeApp(firebaseConfig)