// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Initialize Sign in with Apple button
AppleID.auth.init({
    clientId: 'com.evrifinance.app',
    scope: 'email name',
    redirectURI: 'https://www.evrifinance.com/home',
    usePopup: true
});
