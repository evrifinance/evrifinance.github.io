document.addEventListener('DOMContentLoaded', function() {
    if (!firebase.apps.length) {
        console.error('Firebase is not initialized.');
    } else {
        console.log('Firebase is initialized.');

        document.getElementById('toggle-auth-forms').addEventListener('click', function() {
            const signInForm = document.getElementById('sign-in-form');
            const signUpForm = document.getElementById('sign-up-form');
            const toggleButton = document.getElementById('toggle-auth-forms');

            if (signInForm.style.display === 'none') {
                signInForm.style.display = 'block';
                signUpForm.style.display = 'none';
                toggleButton.textContent = 'Switch to Sign Up';
            } else {
                signInForm.style.display = 'none';
                signUpForm.style.display = 'block';
                toggleButton.textContent = 'Switch to Sign In';
            }
        });

        // Initialize Google Auth
        var provider = new firebase.auth.GoogleAuthProvider();

        // Google Sign-In
        document.getElementById('google-signin').addEventListener('click', function() {
            firebase.auth().signInWithPopup(provider).then((result) => {
                console.log('User signed in with Google:', result.user);
                window.location.href = 'index.html';
            }).catch((error) => {
                console.error('Error during Google sign-in:', error);
            });
        });

        // Google Sign-Up
        document.getElementById('google-signup').addEventListener('click', function() {
            firebase.auth().signInWithPopup(provider).then((result) => {
                console.log('User signed up with Google:', result.user);
                window.location.href = 'index.html';
            }).catch((error) => {
                console.error('Error during Google sign-up:', error);
            });
        });
    }
});
