var firebaseConfig = {
    apiKey: "AIzaSyB1xnentx3hkJvoGgWGa6yQRV2OasPS9ns",
    authDomain: "todo-app-7bda6.firebaseapp.com",
    projectId: "todo-app-7bda6",
    storageBucket: "todo-app-7bda6.firebasestorage.app",
    messagingSenderId: "990142223443",
    appId: "1:990142223443:web:88f8a6f0e9441b958362a6"
  };

  var app = firebase.initializeApp(firebaseConfig);


  function signUp()
{
    var email = document.getElementById("email")
    var password = document.getElementById("pass")

    firebase.auth().createUserWithEmailAndPassword(email.value, password.value)
  .then((userCredential) => {
    // Signed in 
    var user = userCredential.user;
   console.log(user);
   window.location.href = "todo.html"
   email.value = ""
   password.value = ""
   
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log(errorMessage);
    
  });
    
}
