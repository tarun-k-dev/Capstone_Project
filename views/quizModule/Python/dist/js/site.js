
let questions = [
  {
    id: 1,
    question: "In which language is Python written?",
    answer: "C",
    options: [
      "English",
      "PHP",
      "C",
      "None of these"
    ]
  },
  {
    id: 2,
    question: "Which one of the following is the correct extension of the Python file?",
    answer: ".py",
    options: [
      ".py",
      ".python",
      ".p",
      "None of these"
    ]
  },
  {
    id: 3,
    question: "What do we use to define a block of code in Python language?",
    answer: "Indentation",
    options: [
      "Key",
      "Brackets",
      "Indentation",
      "None of these"
    ]
  },
  {
    id: 4,
    question: "Which of the following declarations is incorrect?",
    answer: "None of these",
    options: [
      "_x = 2",
      "__x = 3",
      "__xyz__ = 5",
      "None of these"
    ]
  },
  {
    id: 5,
    question: "Why does the name of local variables start with an underscore discouraged?",
    answer: "It indicates a private variable of a class",
    options: [
      "It indicates a private variable of a class",
      "To identify the variable",
      "It confuses the interpreter",
      "None of these"
    ]
  }
];

let question_count = 0;
let points = 0;

window.onload = function() {
  show(question_count);

};

function next() {

   
  // if the question is last then redirect to final page
  if (question_count == questions.length - 1) {
    sessionStorage.setItem("time", time);
    clearInterval(mytime);
    location.href = "end.html";
  }
  console.log(question_count);

  let user_answer = document.querySelector("li.option.active").innerHTML;
  // check if the answer is right or wrong
  if (user_answer == questions[question_count].answer) {
    points += 10;
    sessionStorage.setItem("points", points);
  }
  console.log(points);

  question_count++;
  show(question_count);
}

function show(count) {
  let question = document.getElementById("questions");
  let [first, second, third, fourth] = questions[count].options;

  question.innerHTML = `
  <h2>Q${count + 1}. ${questions[count].question}</h2>
   <ul class="option_group">
  <li class="option">${first}</li>
  <li class="option">${second}</li>
  <li class="option">${third}</li>
  <li class="option">${fourth}</li>
</ul> 
  `;
  toggleActive();
}

function toggleActive() {
  let option = document.querySelectorAll("li.option");
  for (let i = 0; i < option.length; i++) {
    option[i].onclick = function() {
      for (let i = 0; i < option.length; i++) {
        if (option[i].classList.contains("active")) {
          option[i].classList.remove("active");
        }
      }
      option[i].classList.add("active");
    };
  }
}
