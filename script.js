document.addEventListener("DOMContentLoaded", function() {
    // JavaScript code goes here
    console.log("Welcome to APP NAME - The Future of Finance");
});

// Test Firestore
var db = firebase.firestore();

db.collection("test").add({
    first: "Test",
    last: "Firebase",
    timestamp: firebase.firestore.FieldValue.serverTimestamp()
})
.then((docRef) => {
    console.log("Firestore Test: Document written with ID: ", docRef.id);
})
.catch((error) => {
    console.error("Firestore Test Error: ", error);
});

// Test Firebase Authentication
firebase.auth().signInWithEmailAndPassword("test@example.com", "password")
.then((userCredential) => {
    // Signed in 
    var user = userCredential.user;
    console.log("Auth Test: User signed in ", user.email);
})
.catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    console.error("Auth Test Error: ", errorCode, errorMessage);
});

// Test Firebase Analytics
firebase.analytics().logEvent('test_event', {name: 'testName'});
console.log("Analytics Test: Event logged");
