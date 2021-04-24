import  firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore' ;
// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDNQDPXPnt0jmVbRDZRLmav2OfZrtiMN9Q",
    authDomain: "firegram-ebfeb.firebaseapp.com",
    projectId: "firegram-ebfeb",
    storageBucket: "firegram-ebfeb.appspot.com",
    messagingSenderId: "576624477632",
    appId: "1:576624477632:web:3fd07e5abdf6eb7d8ff425"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const projectStorage = firebase.storage();
  const projectFirestore = firebase.firestore();
  const timestamp = firebase.firestore.FieldValue.serverTimestamp;

  export { projectStorage, projectFirestore , timestamp};