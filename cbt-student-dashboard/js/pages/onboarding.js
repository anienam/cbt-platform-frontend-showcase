// onboarding.js
// Demo mode: backend profile loading is disabled so the static onboarding page stays visible.

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

// async function loadProfile() { ... }

document.addEventListener("DOMContentLoaded", () => {
  // Static onboarding page intentionally does not fetch backend data in demo mode.
});