// Import the necessary Firebase modules
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-analytics.js";
// Other Firebase imports can be commented out for now
// import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-auth.js";
// import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-firestore.js";

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyCbIz-jPc0GmQctyFJt1NMvB-gPp0Jl1Xk",
	authDomain: "evri-finance.firebaseapp.com",
	projectId: "evri-finance",
	storageBucket: "evri-finance.appspot.com",
	messagingSenderId: "144557667607",
	appId: "1:144557667607:web:8f731961adfccf181d3352",
	measurementId: "G-HR31XF4PDX"};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
// Firebase Auth and Firestore can be initialized later when needed
// const auth = getAuth(app);
// const firestore = getFirestore(app);

// Comment out the signIn() function call and Firestore test functions
// document.addEventListener('DOMContentLoaded', (event) => {
//     signIn();
// });

// Keep Google Analytics active
// You can add event tracking here as needed

// Placeholder for future event listeners or functions
// function setupEventListeners() {
//     // Code to setup event listeners for user interactions
// }

// Call the placeholder function
// setupEventListeners();


// // Import the functions you need from the SDKs
// import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-app.js";
// import { getAnalytics, logEvent } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-analytics.js";
// import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-auth.js";
// import { getFirestore, doc, setDoc, getDoc } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-firestore.js";

// // Your web app's Firebase configuration
// const firebaseConfig = {
// 	apiKey: "AIzaSyCbIz-jPc0GmQctyFJt1NMvB-gPp0Jl1Xk",
// 	authDomain: "evri-finance.firebaseapp.com",
// 	projectId: "evri-finance",
// 	storageBucket: "evri-finance.appspot.com",
// 	messagingSenderId: "144557667607",
// 	appId: "1:144557667607:web:8f731961adfccf181d3352",
// 	measurementId: "G-HR31XF4PDX"};

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
// const auth = getAuth(app);
// const firestore = getFirestore(app);

// document.addEventListener('DOMContentLoaded', (event) => {
//     // Test user's credentials
//     const testEmail = "testuser@example.com"; // Replace with your test user's email
//     const testPassword = "yourTestUserPassword"; // Replace with your test user's password

//     // Sign in function for testing authentication
//     function signIn() {
//         signInWithEmailAndPassword(auth, testEmail, testPassword)
//             .then((userCredential) => {
//                 // Signed in 
//                 console.log("Auth Test: User signed in ", userCredential.user.email);
//                 // After successful authentication, perform Firestore and Analytics tests
//                 writeTestData();
//                 readTestData();
//                 testAnalytics();
//             })
//             .catch((error) => {
//                 console.error("Auth Test Error: ", error.code, error.message);
//             });
//     }

//     // Firestore test functions
//     async function writeTestData() {
//         const userDoc = doc(firestore, "users", "testUser");
//         await setDoc(userDoc, {
//             name: "Test User",
//             balance: 1000,
//             lastTransactionDate: new Date()
//         });
//         console.log("Data written to Firestore!");
//     }

//     async function readTestData() {
//         const userDoc = doc(firestore, "users", "testUser");
//         const docSnapshot = await getDoc(userDoc);

//         if (docSnapshot.exists()) {
//             console.log("Document data:", docSnapshot.data());
//         } else {
//             console.log("No such document!");
//         }
//     }

//     // Google Analytics test function
//     function testAnalytics() {
//         logEvent(analytics, 'test_event', { name: 'Test Event', value: 'Success' });
//         console.log("Test event logged in Analytics");
//     }

//     // Call the sign-in function to start the tests
//     signIn();
// });
