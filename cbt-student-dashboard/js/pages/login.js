// login.js
// Demo mode: backend auth is disabled so the static login page remains visible.

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
//     window.location.href = "index.html";
//   }
// }

// PASSWORD TOGGLE
const togglePassword = document.getElementById("togglePassword");
const passwordInput = document.getElementById("password");

if (togglePassword && passwordInput) {
  togglePassword.addEventListener("click", () => {
    const type =
      passwordInput.getAttribute("type") === "password"
        ? "text"
        : "password";

    passwordInput.setAttribute("type", type);
  });
}

// Login form submission is intentionally disabled in demo mode.
// const loginForm = document.querySelector(".login-form");
// const accessCode = document.getElementById("accessCode");
// const password = document.getElementById("password");
// const accessError = document.getElementById("accessError");
// const passwordError = document.getElementById("passwordError");
// loginForm.addEventListener("submit", async (e) => { ... });

// FORGOT PASSWORD MODAL
const forgotPasswordLink = document.getElementById("forgotPasswordLink");
const forgotModal = document.getElementById("forgotModal");
const closeModal = document.getElementById("closeModal");

if (forgotPasswordLink && forgotModal) {
  forgotPasswordLink.addEventListener("click", (e) => {
    e.preventDefault();
    forgotModal.classList.add("active");
  });
}

if (closeModal && forgotModal) {
  closeModal.addEventListener("click", () => {
    forgotModal.classList.remove("active");
  });

  forgotModal.addEventListener("click", (e) => {
    if (e.target === forgotModal) {
      forgotModal.classList.remove("active");
    }
  });
}