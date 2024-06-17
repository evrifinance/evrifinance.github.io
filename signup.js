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

    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            console.log('User signed up:', userCredential.user);
            loadingDiv.style.display = 'none';
            successDiv.textContent = 'User signed up successfully!';
            setTimeout(() => {
                window.location.href = 'index.html';
            }, 2000); // Redirect after 2 seconds
        })
        .catch((error) => {
            console.error('Error signing up:', error);
            loadingDiv.style.display = 'none';
            errorDiv.textContent = error.message;
        });
});
