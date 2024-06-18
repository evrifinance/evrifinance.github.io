import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import { firebaseConfig } from './firebaseConfig.js';

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

document.getElementById('signup-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;
    const confirmPassword = document.getElementById('signup-confirm-password').value;
    const errorDiv = document.getElementById('signup-error');
    const successDiv = document.getElementById('signup-success');
    const loadingDiv = document.getElementById('loading');

    if (password !== confirmPassword) {
        errorDiv.textContent = 'Passwords do not match';
        return;
    }

    errorDiv.textContent = '';
    successDiv.textContent = '';
    loadingDiv.style.display = 'block';
    console.log('Sign Up button clicked with email:', email);

    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            console.log('User signed up:', userCredential.user);
            loadingDiv.style.display = 'none';
            successDiv.textContent = 'User signed up successfully!';
            setTimeout(() => {
                window.location.href = 'index.html';
            }, 2000);
        })
        .catch((error) => {
            console.error('Error signing up:', error);
            loadingDiv.style.display = 'none';
            errorDiv.textContent = error.message;
        });
});

document.getElementById('google-signup').addEventListener('click', function() {
    console.log('Google Sign-Up button clicked');
    signInWithPopup(auth, provider)
        .then((result) => {
            console.log('User signed up with Google:', result.user);
            window.location.href = 'index.html';
        })
        .catch((error) => {
            console.error('Error signing up with Google:', error);
            document.getElementById('signup-error').textContent = error.message;
        });
});
