var firebaseConfig = {
    apiKey: "AIzaSyAfvS2N9uYMvA6FPbsekgAK54O_MX2sDTI",
    authDomain: "emeralds-and-rubies-9502d.firebaseapp.com",
    databaseURL: "https://emeralds-and-rubies-9502d.firebaseio.com",
    projectId: "emeralds-and-rubies-9502d",
    storageBucket: "emeralds-and-rubies-9502d.appspot.com",
    messagingSenderId: "605418981728",
    appId: "1:605418981728:web:f1e4cead4dd675a8677605",
    measurementId: "G-NFQY6JBSW0"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
