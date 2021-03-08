import firebase from "firebase";


// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyBRJZqazVyxKia4iMIPnebtz4dvowh6xps",
    authDomain: "login-a2c38.firebaseapp.com",
    projectId: "login-a2c38",
    storageBucket: "login-a2c38.appspot.com",
    messagingSenderId: "483132040660",
    appId: "1:483132040660:web:b90f9268816909bdebe241",
    measurementId: "G-ECZ795QS8P"
  };
  // Initialize Firebase
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  const db = firebaseApp.firestore()
  const auth = firebase.auth();


  export {db, auth}