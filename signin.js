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

    firebase.auth().signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            console.log('User signed in:', userCredential.user);
            loadingDiv.style.display = 'none';
            successDiv.textContent = 'User signed in successfully!';
            setTimeout(() => {
                window.location.href = 'index.html';
            }, 2000); // Redirect after 2 seconds
        })
        .catch((error) => {
            console.error('Error signing in:', error);
            loadingDiv.style.display = 'none';
            errorDiv.textContent = error.message;
        });
});
