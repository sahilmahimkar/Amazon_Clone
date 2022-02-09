import * as firebase from "firebase";
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDv98Hi4EQFXx6KWgzdwo9rg8rutBblS3k",
  authDomain: "clone-6951e.firebaseapp.com",
  projectId: "clone-6951e",
  storageBucket: "clone-6951e.appspot.com",
  messagingSenderId: "398376750987",
  appId: "1:398376750987:web:0f5e2dc856b891f3cee98e",
  measurementId: "G-T53EMY9FXF"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export{db,auth};