// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAez0UifJeP0YVQZBvE6ozLCRuS1THV4LM",
  authDomain: "homeschooldating.firebaseapp.com",
  projectId: "homeschooldating",
  storageBucket: "homeschooldating.firebasestorage.app",
  messagingSenderId: "881684032751",
  appId: "1:881684032751:web:596a4387061a8761db7f1a",
  measurementId: "G-2GV2QP218G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Listen for the signup form submission
const signupForm = document.getElementById("signup-form");
if (signupForm) {
  signupForm.addEventListener("submit", (e) => {
    e.preventDefault();

    // Get form values
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const displayName = document.getElementById("displayName").value;

    // Create user with Firebase Authentication
    auth.createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        const user = userCredential.user;

        // Save additional user data in Firestore under a "users" collection
        return db.collection("users").doc(user.uid).set({
          displayName: displayName,
          email: email,
          createdAt: firebase.firestore.FieldValue.serverTimestamp(),
          // Add other profile fields as needed (e.g., interests, age, etc.)
        });
      })
      .then(() => {
        alert("Sign-up successful! You can now log in.");
        window.location.href = "login.html";
      })
      .catch((error) => {
        console.error("Error during sign-up:", error);
        alert(error.message);
      });
  });
}
