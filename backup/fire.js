const firebase = require("firebase");
require("firebase/firestore")

const firebaseConfig = {
    apiKey: "AIzaSyA4bURwKfBr19PFn7nkHJGick18ZEiHiU8",
    authDomain: "meme-b98ea.firebaseapp.com",
    databaseURL: "https://meme-b98ea.firebaseio.com",
    projectId: "meme-b98ea",
    storageBucket: "meme-b98ea.appspot.com",
    messagingSenderId: "569777234629",
    appId: "1:569777234629:web:fd46829c12f2bf0f9906ac",
    measurementId: "G-6TP8JX9FT8"
};

const Firebase = firebase.initializeApp(firebaseConfig);

export default Firebase;
