// exam-start.js
// Demo mode: backend exam/profile loading is disabled so the static exam-start page remains visible.

// const API = "http://localhost:5000/api";
// const API = "https://flama-cbt-backend.onrender.com/api"; // Production backend

// const token = localStorage.getItem("token");
// const userId = localStorage.getItem("userId");
// const role = localStorage.getItem("role");

// if (token) {
//   try {
//     const payload = JSON.parse(atob(token.split(".")[1]));
//
//     if (payload.exp * 1000 < Date.Now()) {
//       localStorage.clear();
//     }
//   } catch (err) {
//     localStorage.clear();
//     window.location.href = "../index.html";
//   }
// }

// Example:
// exam-start.html?examId=6848b1d5e123456789abcd12
const params = new URLSearchParams(window.location.search);
const examId = params.get("examId");

const startBtn = document.querySelector(".start-btn");
const backBtn = document.querySelector(".back-btn");

if (backBtn) {
  backBtn.addEventListener("click", () => {
    window.location.href = "./onboarding.html";
  });
}

if (startBtn) {
  startBtn.addEventListener("click", () => {
    const targetUrl = examId
      ? `./exam.html?examId=${encodeURIComponent(examId)}`
      : "./exam.html";

    window.location.href = targetUrl;
  });
}

document.addEventListener("DOMContentLoaded", () => {
  // Static exam-start page is intentionally rendered without backend data in demo mode.
});









