import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
  import { getDatabase } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-database.js";
  import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-auth.js";

  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyCMw4JrD9uK-pfvfKWlPv8KnKJ0jOA0OQE",
    authDomain: "paperpulse-f4b8c.firebaseapp.com",
    databaseURL: "https://paperpulse-f4b8c-default-rtdb.firebaseio.com",
    projectId: "paperpulse-f4b8c",
    storageBucket: "paperpulse-f4b8c.appspot.com",
    messagingSenderId: "301892230818",
    appId: "1:301892230818:web:0b604de026112dd5ed81fb"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const database = getDatabase(app);
  const auth = getAuth();
  Sign.addEventLister('submit', (e)=> {

    var email = document.getElementById('sign_user').value;
    var password = document.getElementById('sign_pass').value;
    var email = document.getElementById('forget_email').value;
    var email = document.getElementById('register_email').value;
    var userrname = document.getElementById('register_name').value;
    var password = document.getElementById('register_pass').value;
    var conform_password = document.getElementById('register_pass1').value;
    createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    alert(userrname);
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
    alert(errorMessage);
  });
  }
  
  );