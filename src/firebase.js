import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDi3qPfGmN-kerBZW06xxwll9ESLZYH-zM",
    authDomain: "fcrud-2b4e2.firebaseapp.com",
    databaseURL: "https://fcrud-2b4e2-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "fcrud-2b4e2",
    storageBucket: "fcrud-2b4e2.appspot.com",
    messagingSenderId: "1084166590014",
    appId: "1:1084166590014:web:f5f000a434ddac3acd0b6f"
  };

  // Initialize Firebase
  
const fireDb = firebase.initializeApp(firebaseConfig);
const auth = fireDb.auth()

export {auth}
export default fireDb.database().ref();