const { Router } = require("express");
const router = Router();
//const admin = require('firebase-admin');

//SCRIPT de conexión a Firebase
// The core Firebase JS SDK is always required and must be listed first 
    src="https://www.gstatic.com/firebasejs/8.8.0/firebase-app.js"

//TODO: Add SDKs for Firebase products that you want to use
     //https://firebase.google.com/docs/web/setup#available-libraries
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
  const firebase = require('firebase')
  firebase.initializeApp(firebaseConfig);
  
  const db = firebase.database()
  const ref = db.ref("/new-contact")

  router.post('/new-contact', (req,res) => {
    console.log( req.headers);
    console.log(req.body);
    console.log("dsjkañsafkñdhlksdf");
    const newContact= {
        name: req.body.name,
        phone: req.body.phone,
        email: req.body.email
    }
    ref.push(newContact)
    res.send(newContact)
});

 


router.route('/')
    .get((req,res) => res.send('Proveedor guardado'))

 /* const db = firebase.database()
const db = admin.database()

router.post('/new-contact', (req,res) => {
    console.log(req.body);
    const newContact= {
        firstname: req.body.firstname,
        phone: req.body.phone,
        email: req.body.email
    }
    db.ref('contacts').push(req.body);
    res.push(req.body)
})

router.route('/:id')
    .get((req,res) => res.json({'Notes routes':'new route'}))
*/
module.exports = router; 