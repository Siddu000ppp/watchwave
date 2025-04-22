import { initializeApp } from "https://www.gstatic.com/firebasejs/11.3.0/firebase-app.js";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/11.3.0/firebase-auth.js";  
  
const firebaseConfig = {
    apiKey: "AIzaSyC1e3nujGUpZAYTzVmd2zIXmyOiwYBXFVo",
    authDomain: "login-93ca2.firebaseapp.com",
    projectId: "login-93ca2",
    storageBucket: "login-93ca2.appspot.com",
    messagingSenderId: "28027353029",
    appId: "1:28027353029:web:398a63537eb1bf31327dac"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
auth.languageCode = 'en';
const provider = new GoogleAuthProvider();

// Select the specific Google login button
const googleLogin = document.getElementById('googel');

const googleLogins=document.getElementById('googele');// Change this according to your button ID

googleLogin.addEventListener('click', function(){
    signInWithPopup(auth, provider)
    .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const user = result.user;
        console.log(user);
        window.location.href = "home.html";
    }).catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error('Error during Google sign-in: ', errorMessage); // Handle errors properly
    });
});
googleLogins.addEventListener('click', function(){
    signInWithPopup(auth, provider)
    .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const user = result.user;
        console.log(user);
        window.location.href = "home.html";
    }).catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error('Error during Google sign-in: ', errorMessage); // Handle errors properly
    });
});

function updateUserProfile(user){
    const userName = user.displayName;
    const userEmail=user.email;
    const UserProfilePicture=user.photoUrl;

    document.getElementById("userName").textContent=userName;
    document.getElementById("userEmail").textContent=userEmail;
    document.getElementById("userProfilePicture").textContent=UserProfilePicture;
    
}

updateUserProfile()
