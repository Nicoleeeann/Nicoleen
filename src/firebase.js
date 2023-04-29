import firebase from "firebase/compat/app";
import "firebase/compat/database";


const firebaseConfig = {
    apiKey: "AIzaSyCRLlGyYxmyHV6-I5XcdZgUazGFn1XICxk",
    authDomain: "my-crud-nicole.firebaseapp.com",
    projectId: "my-crud-nicole",
    storageBucket: "my-crud-nicole.appspot.com",
    messagingSenderId: "577904950258",
    appId: "1:577904950258:web:d067f8d9284d1c89d5096b"
  };

  const fireDb = firebase.initializeApp(firebaseConfig);
  export default fireDb.database().ref();
  
