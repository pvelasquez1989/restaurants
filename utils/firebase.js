import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyCGQtB1Bcd57HprPPpYLmpOPPBhFxBWgh0",
    authDomain: "restaurants-a725b.firebaseapp.com",
    projectId: "restaurants-a725b",
    storageBucket: "restaurants-a725b.appspot.com",
    messagingSenderId: "758039930984",
    appId: "1:758039930984:web:ebe1bc58cff6fb9e8b33dd"
  }
  
  export const firebaseApp = firebase.initializeApp(firebaseConfig);