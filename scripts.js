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
            apiToken: '66a4da36c202ae0a0c11ff7768e46c59589e6d54174cdc93ed9dd00089c14d3d'
        }]
    });

    // Access the default container
    const container = CloudKit.getDefaultContainer();

    // Save user information to CloudKit
    container
        .publicCloudDatabase
        .saveRecord({
            recordType: 'UserInfo',
            recordName: userInfo.email, // Use the email as the record name
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

// Check if the user already exists
function checkUserExists(email) {
    return new Promise((resolve, reject) => {
        const container = CloudKit.getDefaultContainer();
        const query = {
            recordType: 'UserInfo',
            filterBy: [{
                fieldName: 'email',
                comparator: 'EQUALS',
                fieldValue: { value: email }
            }]
        };

        container
            .publicCloudDatabase
            .performQuery(query)
            .then(response => {
                resolve(response.records.length > 0);
            })
            .catch(error => {
                reject(error);
            });
    });
}

// Handle Sign in with Apple callback
AppleID.auth.signIn().then(function (response) {
    const identityToken = response.authorization.id_token;
    const userInfo = decodeIdentityToken(identityToken);

    // Check if the user already exists
    checkUserExists(userInfo.email)
        .then(userExists => {
            if (userExists) {
                console.log('User already exists');
                // Handle existing user
            } else {
                console.log('User does not exist');
                // Save new user
                saveUserInfo(userInfo);
            }
        })
        .catch(error => {
            console.error('Error checking user existence:', error);
        });
});

// Detect user's preferred color scheme and update the CSS variables
function detectColorScheme() {
  const isDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  if (isDarkMode) {
    document.documentElement.style.setProperty('--background-color-light', '#000000');
    document.documentElement.style.setProperty('--background-color-dark', '#FFFFFF');
    document.documentElement.style.setProperty('--text-color-light', '#FFFFFF');
    document.documentElement.style.setProperty('--text-color-dark', '#000000');
  }
}

// Call the function when the page loads
window.onload = detectColorScheme;

