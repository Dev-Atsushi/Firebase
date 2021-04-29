const firebase = require("firebase");

let firebaseConfig = {
    apiKey: "XXX",
    authDomain: "XXX",
    databaseURL: "XXX",
    projectId: "XXX",
    storageBucket: "XXX",
    messagingSenderId: "XXX",
    appId: "XXX",
    measurementId: "XXX"
};

firebase.initializeApp(firebaseConfig);
const data = firebase.database();

let bref = data.ref(`Users/Email`);

bref.update({
  email: "atsushithesushi@gmail.com"
});
