import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import { firebaseConfig } from './firebaseConfig.js';

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

document.getElementById('signin-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const email = document.getElementById('signin-email').value;
    const password = document.getElementById('signin-password').value;
    const errorDiv = document.getElementById('signin-error');
    const successDiv = document.getElementById('signin-success');
    const loadingDiv = document.getElementById('loading');

    errorDiv.textContent = '';
    successDiv.textContent = '';
    loadingDiv.style.display = 'block';
    console.log('Sign In button clicked with email:', email);

    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            console.log('User signed in:', userCredential.user);
            loadingDiv.style.display = 'none';
            successDiv.textContent = 'User signed in successfully!';
            setTimeout(() => {
                window.location.href = 'index.html';
            }, 2000);
        })
        .catch((error) => {
            console.error('Error signing in:', error);
            loadingDiv.style.display = 'none';
            errorDiv.textContent = error.message;
        });
});

document.getElementById('google-signin').addEventListener('click', function() {
    console.log('Google Sign-In button clicked');
    signInWithPopup(auth, provider)
        .then((result) => {
            console.log('User signed in with Google:', result.user);
            window.location.href = 'index.html';
        })
        .catch((error) => {
            console.error('Error signing in with Google:', error);
            document.getElementById('signin-error').textContent = error.message;
        });
});
