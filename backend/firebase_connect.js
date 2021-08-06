//The core Firebase JS SDK is always required and must be listed first -->
src="https://www.gstatic.com/firebasejs/8.8.0/firebase-app.js"

//TODO: Add SDKs for Firebase products that you want to use
     //https://firebase.google.com/docs/web/setup#available-libraries -->
src="https://www.gstatic.com/firebasejs/8.8.0/firebase-analytics.js"
  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyDLgWpWUOSR3cZebUyOOx-nBE_25q0y2yE",
    authDomain: "motsi-id001.firebaseapp.com",
    databaseURL: "https://motsi-id001-default-rtdb.firebaseio.com",
    projectId: "motsi-id001",
    storageBucket: "motsi-id001.appspot.com",
    messagingSenderId: "800130546268",
    appId: "1:800130546268:web:dfbb366f25a92bf2308499",
    measurementId: "G-VLFWHRNBQC"
  };
  // Initialize Firebase
  var firebase = require("firebase");
  firebase.initializeApp(firebaseConfig);
  

  var db= firebase.database();
  var ref = db.ref("/user_data");

  ref.push({
    id:22,
    name:"Jane Doe",
    email:"jane@doe.com",
    website:"https://jane.foo.bar"
});
