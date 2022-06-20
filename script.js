const quizQuestion = [
  {
    question: "What does CSS stand for?",
    a: "Cascading Style Sheets",
    b: "Creative Style Sheets",
    c: "Colorful Style Sheets",
    d: "Computer Style Sheets",
    correct: "a",
  },
  {
    question: "Choose the correct HTML element for the largest heading:",
    a: "<h1>",
    b: "<h6>",
    c: "<head>",
    d: "<heading>",
    correct: "a",
  },
  {
    question: "Which HTML attribute is used to define inline styles?",
    a: "styles",
    b: "font",
    c: "style",
    d: "class",
    correct: "c",
  },
  {
    question: "What is the correct HTML for creating a hyperlink?",
    a: "<a name='www.google.com'>Google</a>",
    b: "<a href='www.google.com'>Google</a>",
    c: "<a>www.google.com</a>",
    d: "<a url='www.google.com'>Google</a>",
    correct: "b",
  },
];

const quiz = document.querySelector(".container");
const questionEl = document.getElementById("question");
const answerEl = document.querySelectorAll(".answer");
const a_answer = document.getElementById("a_answer");
const b_answer = document.getElementById("b_answer");
const c_answer = document.getElementById("c_answer");
const d_answer = document.getElementById("d_answer");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

startQuiz();

function startQuiz() {
  deselectAnswers();

  const currentQuizQuestion = quizQuestion[currentQuiz];

  questionEl.innerText = currentQuizQuestion.question;
  a_answer.innerText = currentQuizQuestion.a;
  b_answer.innerText = currentQuizQuestion.b;
  c_answer.innerText = currentQuizQuestion.c;
  d_answer.innerText = currentQuizQuestion.d;
}

function deselectAnswers() {
  answerEl.forEach((answerEach) => (answerEach.checked = false));
}

function getSelected() {
  let answer;

  answerEl.forEach((answerEach) => {
    if (answerEach.checked) {
      answer = answerEach.id;
    }
  });

  return answer;
}

submitBtn.addEventListener("click", () => {
  const answer = getSelected();
  console.log(answer);

  if (answer) {
    if (answer === quizQuestion[currentQuiz].correct) {
      score++;
    }

    currentQuiz++;

    if (currentQuiz < quizQuestion.length) {
      startQuiz();
    } else {
      quiz.innerHTML = `
        <h2>Your score is ${score}/${quizQuestion.length}</h2>

        <button onclick = "location.reload()"> Reload </button>
      `;
    }
  }
});
