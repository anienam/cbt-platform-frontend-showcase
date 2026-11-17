// exam2.js
// Demo mode: render the hardcoded sample exam so the frontend remains usable without backend APIs.

const sampleQuestions = [
  {
    _id: "q1",
    question: "Which of the following is the basic unit of life?",
    options: {
      A: "Tissue",
      B: "Organ",
      C: "Cell",
      D: "Organism",
    },
    answer: "C",
  },
  {
    _id: "q2",
    question: "What carries genetic information in most living organisms?",
    options: {
      A: "Protein",
      B: "DNA",
      C: "Fat",
      D: "Water",
    },
    answer: "B",
  },
  {
    _id: "q3",
    question: "Which planet is known as the Red Planet?",
    options: {
      A: "Venus",
      B: "Mars",
      C: "Jupiter",
      D: "Mercury",
    },
    answer: "B",
  },
  {
    _id: "q4",
    question: "Which organ is responsible for pumping blood throughout the body?",
    options: {
      A: "Liver",
      B: "Lungs",
      C: "Heart",
      D: "Brain",
    },
    answer: "C",
  },
  {
    _id: "q5",
    question: "What is 12 × 8?",
    options: {
      A: "84",
      B: "96",
      C: "98",
      D: "108",
    },
    answer: "B",
  },
];

let questions = sampleQuestions;
let currentQuestion = 0;
let answers = JSON.parse(localStorage.getItem("exam_answers_demo")) || {};
let timerInterval;
let timeLeft = 45 * 60;

function renderQuestionGrid() {
  const grid = document.getElementById("questionGrid");
  if (!grid) return;

  grid.innerHTML = "";

  questions.forEach((q, index) => {
    const btn = document.createElement("button");
    btn.textContent = index + 1;
    btn.id = `q-${index}`;

    if (answers[q._id]) {
      btn.classList.add("answered");
    }

    if (index === currentQuestion) {
      btn.classList.add("active");
    }

    btn.addEventListener("click", () => {
      currentQuestion = index;
      showQuestion(index);
    });

    grid.appendChild(btn);
  });
}

function showQuestion(index) {
  const q = questions[index];
  if (!q) return;

  const questionNumber = document.getElementById("questionNumber");
  const questionText = document.getElementById("questionText");
  const options = document.getElementById("options");

  if (questionNumber) questionNumber.textContent = `Question ${index + 1}`;
  if (questionText) questionText.textContent = q.question;
  if (!options) return;

  options.innerHTML = "";

  Object.entries(q.options).forEach(([key, value]) => {
    const label = document.createElement("label");
    label.className = "option";

    const input = document.createElement("input");
    input.type = "radio";
    input.name = "option";
    input.value = key;

    if (answers[q._id] === key) {
      input.checked = true;
    }

    input.addEventListener("change", () => {
      answers[q._id] = key;
      localStorage.setItem("exam_answers_demo", JSON.stringify(answers));
      renderQuestionGrid();
      showQuestion(currentQuestion);
    });

    const text = document.createTextNode(`${key}. ${value}`);
    label.appendChild(input);
    label.appendChild(text);
    options.appendChild(label);
  });

  renderQuestionGrid();
}

function startTimer() {
  const timerEl = document.getElementById("timer");
  if (!timerEl) return;

  timerInterval = setInterval(() => {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;

    timerEl.textContent = `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;

    timeLeft -= 1;

    if (timeLeft < 0) {
      clearInterval(timerInterval);
      confirmSubmit();
    }
  }, 1000);
}

function openModal() {
  const answered = Object.keys(answers).length;
  const unanswered = questions.length - answered;

  const answeredCount = document.getElementById("answeredCount");
  const unansweredCount = document.getElementById("unansweredCount");
  const submitModal = document.getElementById("submitModal");

  if (answeredCount) answeredCount.textContent = answered;
  if (unansweredCount) unansweredCount.textContent = unanswered;
  if (submitModal) submitModal.classList.remove("hidden");
}

function closeModal() {
  const submitModal = document.getElementById("submitModal");
  if (submitModal) submitModal.classList.add("hidden");
}

async function confirmSubmit() {
  clearInterval(timerInterval);
  localStorage.removeItem("exam_answers_demo");

  const submitModal = document.getElementById("submitModal");
  const successModal = document.getElementById("successModal");

  if (submitModal) submitModal.classList.add("hidden");
  if (successModal) successModal.classList.remove("hidden");
}

function goToDashboard() {
  window.location.href = "./profile.html";
}

document.getElementById("nextBtn")?.addEventListener("click", () => {
  if (currentQuestion < questions.length - 1) {
    currentQuestion += 1;
    showQuestion(currentQuestion);
  }
});

document.getElementById("prevBtn")?.addEventListener("click", () => {
  if (currentQuestion > 0) {
    currentQuestion -= 1;
    showQuestion(currentQuestion);
  }
});

document.getElementById("submitBtn")?.addEventListener("click", openModal);

window.addEventListener("beforeunload", () => {
  localStorage.setItem("exam_answers_demo", JSON.stringify(answers));
});

document.addEventListener("DOMContentLoaded", () => {
  const subjectName = document.getElementById("subjectName");
  if (subjectName) subjectName.textContent = "Biology";

  const examTitle = document.getElementById("examTitle");
  if (examTitle) examTitle.textContent = "Sample Examination";

  const examInstruction = document.getElementById("examInstruction");
  if (examInstruction) examInstruction.textContent = "Answer all questions carefully.";

  const modalSubject = document.getElementById("modalSubject");
  if (modalSubject) modalSubject.textContent = "Biology";

  renderQuestionGrid();
  showQuestion(currentQuestion);
  startTimer();
});
