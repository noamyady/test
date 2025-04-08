// ייבוא המודולים מ-Firebase (גרסה מודולרית – Firebase v9+)
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-app.js";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/9.22.0/firebase-auth.js";

// קונפיגורציית Firebase – יש לוודא שהקונפיגורציה זהה בכל הדפים
const firebaseConfig = {
  apiKey: "AIzaSyBvhdmhh12h2qbl99385j3iRKR9EEw01HU",
  authDomain: "sparta-m.firebaseapp.com",
  projectId: "sparta-m",
  storageBucket: "sparta-m.firebasestorage.app",
  messagingSenderId: "137777159078",
  appId: "1:137777159078:web:0d7639edd4feb7441d0d67",
  measurementId: "G-5519CNXMV7"
};

// אתחול Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// טיפול בטופס ההתחברות
const loginForm = document.getElementById("login-form");
loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // המשתמש התחבר בהצלחה
      console.log("משתמש שהתחבר:", userCredential.user);
      // לאחר התחברות מוצלחת, מפנים לעמוד המרכזי
      window.location.href = "main.html";
    })
    .catch((error) => {
      alert("שגיאה בהתחברות: " + error.message);
      console.error("שגיאה בטופס התחברות:", error);
    });
});

// טיפול בטופס ההרשמה
const signupForm = document.getElementById("signup-form");
signupForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const email = document.getElementById("signup-email").value;
  const password = document.getElementById("signup-password").value;

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // המשתמש נרשם בהצלחה
      console.log("משתמש נרשם:", userCredential.user);
      // לאחר הרשמה מוצלחת, מפנים לעמוד המרכזי
      window.location.href = "main.html";
    })
    .catch((error) => {
      alert("שגיאה בהרשמה: " + error.message);
      console.error("שגיאה בטופס הרשמה:", error);
    });
});
