import firebase from "firebase";


const firebaseConfig = {
  apiKey: "AIzaSyAUIBr3cOeKbh9X1rgUXsrX4JwHSxoRKQY",
  authDomain: "app-do-livro-digital.firebaseapp.com",
  projectId: "app-do-livro-digital",
  storageBucket: "app-do-livro-digital.appspot.com",
  messagingSenderId: "1011517499784",
  appId: "1:1011517499784:web:901b043b2c0f3d446b723d"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore()