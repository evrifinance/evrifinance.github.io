document.getElementById('signup-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;
    const errorDiv = document.getElementById('signup-error');

    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Signed up
            console.log('User signed up:', userCredential.user);
            window.location.href = 'index.html'; // Redirect to home or another page
        })
        .catch((error) => {
            console.error('Error signing up:', error);
            errorDiv.textContent = error.message;
        });
});
