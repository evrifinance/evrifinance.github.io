// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-analytics.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-firestore.js";

// TODO: Add SDKs for Firebase products that you want to use
 // https://firebase.google.com/docs/web/setup#available-libraries

 // Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyCbIz-jPc0GmQctyFJt1NMvB-gPp0Jl1Xk",
	authDomain: "evri-finance.firebaseapp.com",
	projectId: "evri-finance",
	storageBucket: "evri-finance.appspot.com",
	messagingSenderId: "144557667607",
	appId: "1:144557667607:web:8f731961adfccf181d3352",
	measurementId: "G-HR31XF4PDX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const firestore = getFirestore(app);
// Assuming you've already imported getAuth in your HTML

document.addEventListener('DOMContentLoaded', (event) => {
    // Firebase Auth instance
    const auth = getAuth();

    // Test user's credentials
    const testEmail = "testuser@example.com"; // Replace with your test user's email
    const testPassword = "yourTestUserPassword"; // Replace with your test user's password

    // Sign in function
    function signIn() {
        signInWithEmailAndPassword(auth, testEmail, testPassword)
        .then((userCredential) => {
            // Signed in 
            var user = userCredential.user;
            console.log("Auth Test: User signed in ", user.email);
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            console.error("Auth Test Error: ", errorCode, errorMessage);
        });
    }

    // Call the sign-in function to test
    signIn();
});
