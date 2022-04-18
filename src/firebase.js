import * as firebase from "firebase";
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCXWsim8bu53BIXn0TaJ5WKyIhUqDO4Eaw",
  authDomain: "medidrone-38611.firebaseapp.com",
  projectId: "medidrone-38611",
  storageBucket: "medidrone-38611.appspot.com",
  messagingSenderId: "670611244004",
  appId: "1:670611244004:web:eda1f85991dfee07d3fdf1",
  measurementId: "G-DMH0SXZZ89"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export{db,auth};