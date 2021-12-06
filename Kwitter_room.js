// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCkFxCs4f728XW0tEme8CWudh1tzsTao2c",
    authDomain: "chatapp-abc4c.firebaseapp.com",
    databaseURL: "https://chatapp-abc4c-default-rtdb.firebaseio.com",
    projectId: "chatapp-abc4c",
    storageBucket: "chatapp-abc4c.appspot.com",
    messagingSenderId: "505430728981",
    appId: "1:505430728981:web:af895e28cb76903487c91c",
    measurementId: "G-YPXJ6W7FRR"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

    user_name = localStorage.getItem("Username");
    document.getElementById("welcome_user_name").innerHTML = "Welcome "+user_name+"!";

    function addroom() {
           room_name = document.getElementById("room_name").value;
  
          localStorage.setItem("Roomname",room_name);
      
          window.location = "kwitter_page.html";
    }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code

    //End code
    });});}
getData();



user_name = localStorage.getItem("Username");
document.getElementById("welcome_user_name").innerHTML = "Welcome "+user_name+"!";

function addroom() {
       room_name = document.getElementById("room_name").value;

      localStorage.setItem("Roomname",room_name);
  
      window.location = "kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
 Room_names = childKey;
//Start code

//End code
});});}
getData();