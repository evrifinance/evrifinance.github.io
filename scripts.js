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

// Handle Sign in with Apple callback
AppleID.auth.signIn().then(function (response) {
    const identityToken = response.authorization.id_token;
    const userInfo = decodeIdentityToken(identityToken);
    saveUserInfo(userInfo);
});

// Decode the Identity Token
function decodeIdentityToken(identityToken) {
    const decodedToken = atob(identityToken.split('.')[1]);
    return JSON.parse(decodedToken);
}

// Save user information to CloudKit
function saveUserInfo(userInfo) {
    // Configure CloudKit
    CloudKit.configure({
        containers: [{
            containerIdentifier: 'iCloud.evrifinance.app',
            environment: 'development',
            apiToken: '66a4da36c202ae0a0c11ff7768e46c59589e6d54174cdc93ed9dd00089c14d3d' // Replace 'YOUR_API_KEY' with your actual API key
        }]
    });

    // Access the default container
    const container = CloudKit.getDefaultContainer();

    // Save user information to CloudKit
    container
        .publicCloudDatabase
        .saveRecord({
            recordType: 'UserInfo',
            fields: {
                name: { value: userInfo.name },
                email: { value: userInfo.email }
            }
        })
        .then(response => {
            console.log('User information saved:', response);
        })
        .catch(error => {
            console.error('Error saving user information:', error);
        });
}
