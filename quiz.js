const data = [
  {
    question: "The humerus, paired radius, and ulna come together to form what joint?",
    a: "Knee",
    b: "Sholder",
    c: "Elbow",
    d: "Ankle",
    correct: "c",
  },
  {
    question: "What is the powerhouse of the cell?",
    a: "Ribosome",
    b: "Redbull",
    c: "Nucleus",
    d: "Mitochondria",
    correct: "d",
  },
  {
    question: "What is the scientific name of the knee cap?",
    a: "Femur",
    b: "Patella",
    c: "Foramen Magnum",
    d: "Scapula",
    correct: "b",
  },
  {
    question: "Which part of the body does glaucoma affect?",
    a: "Eyes",
    b: "Throat",
    c: "Stomach",
    d: "Blood",
    correct: "a",
  },
  {
    question: "What is the scientific term for taste?",
    a: "Olfaction",
    b: "Gustatory Perception",
    c: "Somatosensation",
    d: "Auditory Perception",
    correct: "b",
  },
];

const quiz = document.getElementById('quiz')
const answerElmnts = document.querySelectorAll('.answer')
const questionElement = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')

let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {

  deselectAnswers()

  const currentQuizData = data[currentQuiz]

  questionElement.innerText = currentQuizData.question
  a_text.innerText = currentQuizData.a
  b_text.innerText = currentQuizData.b
  c_text.innerText = currentQuizData.c
  d_text.innerText = currentQuizData.d
}

function deselectAnswers() {
  answerElmnts.forEach(answerElmnt => answerElmnt.checked = false)
}

function getSelected() {
  let answer
  answerElmnts.forEach(answerElmnts => {
    if(answerElmnts.checked) {
      answer = answerElmnts.id
    }
  })
  return answer
}

submitBtn.addEventListener('click', () => {
  const answer = getSelected()
  if(answer) {
    if(answer === data[currentQuiz].correct) {
      score++
    }

    currentQuiz++

    if(currentQuiz < data.length) {
      loadQuiz()
    } else {
      quiz.innerHTML = `
      <h2> The questions answered correctly: ${score}/${data.length}</h2>
      
      <button onclick="location.reload()">Reload</button>
      `
    }
  }
})