// profile.js
// Demo mode: backend profile/subject loading is disabled so the static profile page stays visible.

// const API = "http://localhost:5000/api";
// const API = "https://flama-cbt-backend.onrender.com/api"; // Production backend

// const token = localStorage.getItem("token");
// const userId = localStorage.getItem("userId");
// const role = localStorage.getItem("role");

// if (token) {
//   try {
//     const payload = JSON.parse(atob(token.split(".")[1]));
//
//     if (payload.exp * 1000 < Date.now()) {
//       localStorage.clear();
//     }
//   } catch (err) {
//     localStorage.clear();
//     window.location.href = "../index.html";
//   }
// }

const backBtn = document.querySelector(".back-btn");
if (backBtn) {
  backBtn.addEventListener("click", () => {
    window.history.back();
  });
}

// async function loadProfile() { ... }
// async function loadStudentSubjects(student) { ... }

document.addEventListener("DOMContentLoaded", () => {
  // Static profile page is intentionally rendered without backend fetching in demo mode.
});