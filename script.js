const questions = [
  {
    question: "Mahatsiaro ve ianao fa salama saina tsara ?",
    answers: [
      { text: "Eny", correct: true },
      { text: "Tsia", correct: false },
      { text: "Tsy voafaritra", correct: false },
    ],
  },
  {
    question: "Mahatsiaro hoe anaty olana lalina ve ianao io ankehitriny ?",
    answers: [
      { text: "Eny", correct: true },
      { text: "Tsia", correct: false },
      { text: "Tsy voafaritra", correct: false },
    ],
  },
  {
    question: "Mba te iaina toy ireo olona lavitra ny ahiahy ?",
    answers: [
      { text: "Eny", correct: true },
      { text: "Tsia", correct: false },
      { text: "Tsy voafaritra", correct: false },
    ],
  },
  {
    question: "Mba tsy ho baikon'ny Boss instony ?",
    answers: [
      { text: "Eny", correct: true },
      { text: "Tsia", correct: false },
      { text: "Tsy voafaritra", correct: false },
    ],
  },
  {
    question:
      "Mba te itaingina fiaramanidina foana rehefa mivezivezy eto antoerana ?",
    answers: [
      { text: "Eny", correct: true },
      { text: "Tsia", correct: false },
      { text: "Tsy voafaritra", correct: false },
    ],
  },
  {
    question:
      "Tsapanao ve ara fa misy fiatraikany amin'ny fiananao ny fiainampirenena ?",
    answers: [
      { text: "Eny", correct: true },
      { text: "Tsia", correct: false },
      { text: "Tsy voafaritra", correct: false },
    ],
  },
  {
    question:
      "Ka noho izany rehetra izany iza ary no ho fidinao amin'ny fifidianana manaraka eo ?",
    answers: [
      { text: "Andry Nirina Rajoelina", correct: true },
      { text: "Marc Ralomanana", correct: false },
      { text: "Siteny", correct: false },
    ],
  },
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  nextButton.innerHTML = "Manaraka";
  showQuestion();
}

function showQuestion() {
  resetState();
  let currentQuestion = questions[currentQuestionIndex];
  let questionNo = currentQuestionIndex + 1;
  questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

  currentQuestion.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    answerButtons.appendChild(button);
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
  });
}

function resetState() {
  nextButton.style.display = "none";
  while (answerButtons.firstChild) {
    answerButtons.removeChild(answerButtons.firstChild);
  }
}

function selectAnswer(e) {
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.correct === "true";
  if (isCorrect) {
    selectedBtn.classList.add("correct");
    score++;
  } else {
    selectedBtn.classList.add("incorrect");
  }
  Array.from(answerButtons.children).forEach((button) => {
    if (button.dataset.correct === "true") {
      button.classList.add("correct");
    }
    button.disabled = true;
  });
  nextButton.style.display = "block";
}

function showScore() {
  resetState();
  if (score === 7) {
    questionElement.innerHTML =
      "Arabaina fa olona tena misaina tokoa ianao ary te hivoatra";
  } else {
    questionElement.innerHTML =
      "Indrisy fa naman'ireo mbola tsy te handrosoa sy vendrana ianao ary tsy tapakevitra ianao";
  }
  nextButton.innerHTML = "Amerina";
  nextButton.style.display = "block";
}

function handleNextButton() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showScore();
  }
}

nextButton.addEventListener("click", () => {
  if (currentQuestionIndex < questions.length) {
    handleNextButton();
  } else {
    startQuiz();
  }
});

startQuiz();
