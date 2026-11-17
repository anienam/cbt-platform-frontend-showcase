// api.js
// Demo mode: backend integration is disabled so the static frontend remains visible.
// Keep a harmless fallback so pages do not blow up when a script references request().

// const API = "http://localhost:5000/api";
// const API = "https://flama-cbt-backend.onrender.com/api"; // Production backend

function getToken() {
  return localStorage.getItem("token");
}

async function request(url, method = "GET", data = null, auth = false) {
  console.info("Demo mode: backend request skipped.", {
    url,
    method,
    auth,
    payload: data,
  });

  return {
    ok: true,
    message: "Frontend demo mode active",
    data,
  };
}