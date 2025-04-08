// ייבוא המודולים הדרושים מ-Firebase (גרסת 9+ במצב מודולרי)
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-app.js";
import { getAuth, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-auth.js";

// קונפיגורציית Firebase – אותו קוד שהשתמשנו בו בפרויקט (עדכן במידת הצורך)
const firebaseConfig = {
  apiKey: "AIzaSyBvhdmhh12h2qbl99385j3iRKR9EEw01HU",
  authDomain: "sparta-m.firebaseapp.com",
  projectId: "sparta-m",
  storageBucket: "sparta-m.firebasestorage.app",
  messagingSenderId: "137777159078",
  appId: "1:137777159078:web:0d7639edd4feb7441d0d67",
  measurementId: "G-5519CNXMV7"
};

// אתחול Firebase והאימות
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// שליפת אלמנטים מהדף
const userEmailSpan = document.getElementById("user-email");
const logoutButton = document.getElementById("logout-button");

// בדיקת מצב האימות – אם משתמש לא מחובר, להחזיר לדף ההתחברות (נניח index.html)
onAuthStateChanged(auth, (user) => {
  if (user) {
    // תצוגת האימייל של המשתמש שהתחבר
    userEmailSpan.textContent = user.email;
  } else {
    // אם אין משתמש, מעבירים לדף ההתחברות
    window.location.href = "index.html";
  }
});

// טיפול בהתנתקות – לחיצה על כפתור ההתנתקות מבצעת את signOut
logoutButton.addEventListener("click", () => {
  signOut(auth)
    .then(() => {
      alert("התנתקת בהצלחה!");
      window.location.href = "index.html";
    })
    .catch((error) => {
      alert("אירעה שגיאה: " + error.message);
      console.error("Error during sign out:", error);
    });
});
