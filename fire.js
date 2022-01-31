const firebase = require("firebase");
require("firebase/firestore")

const firebaseConfig = {
    apiKey: "AIzaSyCpf5FSfK0AzpojIeKGMrvCGEEkCWLTnqE",
    authDomain: "lumberjack-d065d.firebaseapp.com",
    projectId: "lumberjack-d065d",
    storageBucket: "lumberjack-d065d.appspot.com",
    messagingSenderId: "720554267013",
    appId: "1:720554267013:web:33e5a199f3396baaa774ec",
    measurementId: "G-KQM65X6W1C"
  };

const Firebase = firebase.initializeApp(firebaseConfig);

export default Firebase;