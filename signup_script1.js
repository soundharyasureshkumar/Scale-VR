
var firebaseConfig = {
  apiKey: "AIzaSyClwTUAgNkeATuuKedk3SJjPDb8FObrNvo",
  authDomain: "scale-vr-2b272.firebaseapp.com",
  databaseURL: "https://scale-vr-2b272.firebaseio.com",
  projectId: "scale-vr-2b272",
  storageBucket: "scale-vr-2b272.appspot.com",
  messagingSenderId: "795904121533",
  appId: "1:795904121533:web:8fdb6e3e881dbe143a75d4"
};
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const auth = firebase.auth();

  
  function signup(){
    var email=document.getElementById("email");
    var password=document.getElementById("password");
    const promise= auth.createUserWithEmailAndPassword(email.value, password.value);
    promise.catch(e => alert(e.message));

    alert("Signed Up");
    window.location='signin.html';

  } 
