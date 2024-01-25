import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-auth.js";
const auth = getAuth();

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
