import { initializeApp } from "https://www.gstatic.com/firebasejs/11.3.0/firebase-app.js"; 
import { getAuth, GoogleAuthProvider, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/11.3.0/firebase-auth.js";

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

// Function to update user profile
function updateUserProfile(user) {
    // Check if user exists 
    if (user) {
        const userName = user.displayName || "No Name"; // Show "No Name" if displayName isn’t available
        const userEmail = user.email || "No Email"; // Show "No Email" if email isn’t available
        const userProfilePicture = user.photoURL || "default-profile-pic.png"; // Set a default if photoURL isn’t available

 // Update the text content or image source
        document.getElementById("userName").textContent = userName;
        document.getElementById("userEmail").textContent = userEmail;
        // Assuming you have an <img> tag for the profile picture
        document.getElementById("userProfilePicture").src = userProfilePicture; 
    } else {
        // Handle the case where the user object is null
        console.error("No user is currently signed in.");
    }
}

// Monitor authentication state
onAuthStateChanged(auth, (user) => {
    if (user) {
        updateUserProfile(user);
    } else {
        alert("No user is signed in. Please create an account and log in.");
    }
});