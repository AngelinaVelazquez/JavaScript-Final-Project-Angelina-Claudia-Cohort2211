// The user clicks or taps the flashcard to toggle between the word and definition.
// If the user got the flashcard correct:
// The user clicks nextButton and it shows the next flashcard.
// If the user got the flashcard wrong:
//The user clicks previousButton and it show the same flashcard:

// definition = document.querySelector('.card__face.card__face--back'),

const cardContainer = document.querySelector('.card-container'),
card = document.querySelector('.card__inner'),
card2 = document.querySelector('.card2__inner'),
card3 = document.querySelector('.card3__inner'),
card4 = document.querySelector('.card4__inner'),
card5 = document.querySelector('.card5__inner'),
term = document.querySelector('.card__face.card__face--front'),
term2 = document.querySelector('.card2__face.card2__face--front'),
term3 = document.querySelector('.card3__face.card3__face--front'),
term4 = document.querySelector('.card4__face.card4__face--front'),
term5 = document.querySelector('.card5__face.card5__face--front'),
nextButton = document.querySelector('.Home'),
prevButton = document.querySelector('.Calendar');

card.addEventListener('click', function () {
  card.classList.toggle('is-flipped');
});

card2.addEventListener('click', function () {
  card2.classList.toggle('is-flipped');
});

card3.addEventListener('click', function () {
  card3.classList.toggle('is-flipped');
});

card4.addEventListener('click', function () {
  card4.classList.toggle('is-flipped');
});

card5.addEventListener('click', function () {
  card5.classList.toggle('is-flipped');
});

var question1 = 
{
1 : "The humerus, paired radius, and ulna come together to form the elbow",
};

var question2 = 
{
2 : "The Mitochondria is the powerhouse of the cell",
};

var question3 = 
{
2 : "The Patella is the scientific name for the knee cap",
};

var question4 = 
{
4 : "The eyes are the part of the body affected by glaucoma",
};
 
var question5 = 
{
5 : "What is the scientific term for taste? Gustatory Perception",
};

let answers = {
1 : "Elbow",
2 : "Mitochondria",
3 : "Patella",
4 : "Eyes",
5 : "Gustatory Perception"
};

data = Object.entries(question1)

  function getRandomQuestion() {
    randomCard = data[Math.floor(Math.random() * data.length)]
    term.innerHTML = `<h1>${question1[randomCard[0]]}</h1>`; 
   }

data2 = Object.entries(question2)

  function getRandomQuestion2() {
    randomCard2 = data2[Math.floor(Math.random() * data2.length)]
    term2.innerHTML = `<h1>${question2[randomCard2[0]]}</h1>`; 
   }

data3 = Object.entries(question3)

   function getRandomQuestion3() {
     randomCard3 = data3[Math.floor(Math.random() * data3.length)]
     term3.innerHTML = `<h1>${question3[randomCard3[0]]}</h1>`; 
    }

data4 = Object.entries(question4)

    function getRandomQuestion4() {
      randomCard4 = data4[Math.floor(Math.random() * data4.length)]
      term4.innerHTML = `<h1>${question4[randomCard4[0]]}</h1>`; 
     }    

data5 = Object.entries(question5)

     function getRandomQuestion5() {
       randomCard5 = data5[Math.floor(Math.random() * data5.length)]
       term5.innerHTML = `<h1>${question5[randomCard5[0]]}</h1>`; 
      }  
 

   // cardContainer.style.gridTemplateColumns = `repeat(${size}, auto)`;

  //  function updateText() {
  //   document.getElementById("answer").innerHTML=currentText;
  // }

// backData = Object.entries(answers)

//  function getRandomAnswer() {
//     randomCardBack = backData[Math.floor(Math.random() * backData.length)]
//     term.innerHTML = `<h3>${randomCard[1]}</h3>`;
//   }

   nextButton.addEventListener('click', function() {
    console.log(card);
    card.style.display = 'block';
    });

    prevButton.addEventListener('click', function () {
    console.log("You Clicked the previous button");
    card.style.display = 'block';
    });


// var questions = [
//   "The humerus, paired radius, and ulna come together to form what joint?",
//   "What is the powerhouse of the cell?",
//   "What is the scientific name of the knee cap?",
//   "Which part of the body does glaucoma affect?",
//   "What is the scientific term for taste?"
// ];

// var answers = [
//   "Elbow",
//   "Mitochondria",
//   "Patella",
//   "Eyes",
//   "Gustatory Perception"
// ];

// for (var questionGet = 0; questionGet < 5; questionGet++) {
//   for (var getCorrect = 0; getCorrect < 5; getCorrect++) {
//     console.log(answers[getCorrect] + questions[questionGet]);
//   }
// } 


 



//{"response_code":0,"results":[{"category":"Science & Nature","type":"multiple","difficulty":"medium","question":"The humerus, paired radius, and ulna come together to form what joint?","correct_answer":"Elbow","incorrect_answers":["Knee","Sholder","Ankle"]},{"category":"Science & Nature","type":"multiple","difficulty":"easy","question":"What is the powerhouse of the cell?","correct_answer":"Mitochondria","incorrect_answers":["Ribosome","Redbull","Nucleus"]},{"category":"Science & Nature","type":"multiple","difficulty":"hard","question":"What is the scientific name of the knee cap?","correct_answer":"Patella","incorrect_answers":["Femur","Foramen Magnum","Scapula"]},{"category":"Science & Nature","type":"multiple","difficulty":"medium","question":"Which part of the body does glaucoma affect?","correct_answer":"Eyes","incorrect_answers":["Throat","Stomach","Blood"]},{"category":"Science & Nature","type":"multiple","difficulty":"medium","question":"What is the scientific term for &#039;taste&#039;?","correct_answer":"Gustatory Perception","incorrect_answers":["Olfaction","Somatosensation","Auditory Perception"]}]}