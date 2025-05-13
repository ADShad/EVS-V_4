// Function to generate HTML for questions
function renderQuestions() {
  const quizContainer = document.querySelector(".quiz_ques ol");
  quizContainer.innerHTML = questions
    .map(
      (question, qIndex) => `
        <li class="questions">
            <label class="labelwrap checkbox">
              <input type="checkbox" id="q${qIndex + 1}" name="q${qIndex + 1}">
              <span class="checkbox-text">${question.title}</span>
            </label>
        </li>
    `
    )
    .join("");

  document.getElementById("total-marks").textContent = questions.filter(
    (q) => q.correct
  ).length;
  try {
    document.getElementById("audio-intro").play();
  } catch (err) {}
}

// Function to check answers when submit button is clicked
function checkAnswers() {
  let score = 0;
  let totalCorrect = questions.filter((q) => q.correct).length;

  document.querySelectorAll(".quiz_ques > ol > li").forEach((question) => {
    question.classList.remove("submit-correct", "submit-incorrect");
  });

  let allCorrect = true;
  questions.forEach((question, index) => {
    const checkbox = document.getElementById(`q${index + 1}`);
    const questionElement = checkbox.closest("li");
    if (checkbox.checked === question.correct) {
      if (question.correct) score++;
      questionElement.classList.add("submit-correct");
    } else {
      allCorrect = false;
      questionElement.classList.add("submit-incorrect");
    }
  });

  document.getElementById("total-score").textContent = score;
  document.getElementById("total-marks").textContent = totalCorrect;
  document.querySelector(".score").style.display = "block";
  const feedback = document.getElementById("feedback");
  feedback.style.display = "block";

  feedback.textContent =
    allCorrect && score === totalCorrect
      ? "Excellent! All answers are correct!"
      : "Some answers are incorrect. Try again!";
  feedback.className = `feedback ${
    allCorrect && score === totalCorrect ? "correct" : "incorrect"
  }`;

  allCorrect && score === totalCorrect
    ? document.getElementById("audio-clap").play()
    : document.getElementById("audio-try-again").play();

  document.querySelectorAll('input[type="checkbox"]').forEach((checkbox) => {
    checkbox.disabled = true;
  });

  const submitButton = document.getElementById("btn-submit");
  submitButton.textContent = "Show Answers";
  submitButton.onclick = showAnswers;
}

// Function to show correct answers
function showAnswers() {
  document.querySelectorAll(".quiz_ques > ol > li").forEach((question) => {
    question.classList.remove("submit-correct", "submit-incorrect");
  });

  questions.forEach((question, index) => {
    const checkbox = document.getElementById(`q${index + 1}`);
    checkbox.checked = question.correct;
  });

  document.querySelector(".score").style.display = "none";
}

// Function to reset the quiz
function resetQuiz() {
  document.querySelectorAll('input[type="checkbox"]').forEach((checkbox) => {
    checkbox.disabled = false;
    checkbox.checked = false;
  });

  document.querySelectorAll(".quiz_ques > ol > li").forEach((question) => {
    question.classList.remove("submit-correct", "submit-incorrect");
  });

  const submitButton = document.getElementById("btn-submit");
  submitButton.textContent = "Submit";
  submitButton.onclick = checkAnswers;

  document.querySelector(".feedback").style.display = "none";
  document.querySelector(".score").style.display = "none";
}

// Initialize the quiz when the DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  renderQuestions();
  document.getElementById("btn-submit").onclick = checkAnswers;
  document.getElementById("btn-reset").onclick = resetQuiz;
});
