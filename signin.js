document.getElementById('signin-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const email = document.getElementById('signin-email').value;
    const password = document.getElementById('signin-password').value;
    const errorDiv = document.getElementById('signin-error');

    firebase.auth().signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Signed in
            console.log('User signed in:', userCredential.user);
            window.location.href = 'index.html'; // Redirect to home or another page
        })
        .catch((error) => {
            console.error('Error signing in:', error);
            errorDiv.textContent = error.message;
        });
});
