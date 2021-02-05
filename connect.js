const firebase = require("firebase")

var firebaseConfig = {
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

let bref = client.Database.ref(`Usuarios/Email`);
bref.update({
  email: "mychannelall12@gmail.com"
});
