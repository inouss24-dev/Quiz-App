let questionTitle = document.getElementById('questionTitle');
let differentAnswers = document.querySelectorAll('.quiz-container');
let currentQuestionIndex = 0;
let startCountQuestion = document.querySelector('.startCountQuestion');
let endCountQuestion = document.querySelector('.endCountQuestion');
let title               = document.querySelector('.title');
let scoreCount = 0; 

const questions = [
  {
    question: "Quel est le plus grand nombre de buts marqués par un joueur dans un seul match international de football ?",
    choices: ["10", "13", "11", "9"],
    correctAnswer: 1
  },
  {
    question: "Quel pilote détient le record du plus grand nombre de pole positions consécutives en Formule 1 ?",
    choices: ["Ayrton Senna", "Michael Schumacher", "Sebastian Vettel", "Lewis Hamilton"],
    correctAnswer: 0
  },
  {
    question: "Dans quel club de football George Best a-t-il marqué 6 buts en un seul match ?",
    choices: ["Manchester United", "Hibernian", "Fulham", "Los Angeles Aztecs"],
    correctAnswer: 0
  },
  {
    question: "Quel athlète a remporté le plus de médailles en une seule édition des Jeux olympiques d'hiver ?",
    choices: ["Marit Bjørgen", "Ole Einar Bjørndalen", "Dario Cologna", "Ireen Wüst"],
    correctAnswer: 0
  },
  {
    question: "Quel joueur de cricket détient le record du plus grand nombre de courses en Test Cricket ?",
    choices: ["Ricky Ponting", "Sachin Tendulkar", "Brian Lara", "Jacques Kallis"],
    correctAnswer: 1
  },
  {
    question: "En 1956, qui est devenu le plus jeune vainqueur du Ballon d'Or ?",
    choices: ["George Best", "Pelé", "Bobby Charlton", "Duncan Edwards"],
    correctAnswer: 0
  },
  {
    question: "Quelle gymnaste a obtenu le premier score parfait de 10 aux Jeux Olympiques ?",
    choices: ["Simone Biles", "Olga Korbut", "Nadia Comăneci", "Svetlana Khorkina"],
    correctAnswer: 2
  },
  {
    question: "Combien de grands chelems Donald Bradman, légende du cricket, a-t-il marqués dans sa carrière ?",
    choices: ["0", "4", "2", "3"],
    correctAnswer: 0
  },
  {
    question: "Quel coureur cycliste a remporté le Tour de France cinq fois de suite dans les années 1990 ?",
    choices: ["Eddy Merckx", "Miguel Indurain", "Bernard Hinault", "Jacques Anquetil"],
    correctAnswer: 1
  },
  {
    question: "En athlétisme, quel est le record actuel du saut en hauteur masculin ?",
    choices: ["2,45 m", "2,42 m", "2,43 m", "2,44 m"],
    correctAnswer: 0
  }
];

  
function displayQuestion() {
  // Vérifie s'il y a des questions restantes
  if (currentQuestionIndex < questions.length) { 
      const currentQuestion = questions[currentQuestionIndex];
      questionTitle.textContent = currentQuestion.question;
      endCountQuestion.textContent = questions.length;
      startCountQuestion.textContent = currentQuestionIndex + 1;

      // Réinitialiser les réponses
      differentAnswers.forEach((element) => {
          element.classList.remove('disabled', 'correctAnswer', 'notCorrectAnswer');
          element.onclick = null; // Retire tout événement précédent
      });

      // Affiche les réponses pour la question actuelle
      differentAnswers.forEach((element, index) => {
          element.textContent = currentQuestion.choices[index];

          // Ajoute l'événement de clic pour vérifier la réponse
          element.onclick = function() {
              // Désactive toutes les options
              differentAnswers.forEach(choi => {
                  choi.classList.add('disabled'); // Ajoute la classe désactivée
                  choi.onclick = null; // Empêche les clics supplémentaires
              });

              // Vérifie si la réponse est correcte
              if (index === currentQuestion.correctAnswer) {
                  element.classList.add("correctAnswer");
                  scoreCount++;
              } else {
                  element.classList.add("notCorrectAnswer");
                  // Affiche la bonne réponse
                  differentAnswers[currentQuestion.correctAnswer].classList.add("correctAnswer");
              }

              // Passe à la question suivante après un court délai
              setTimeout(() => {
                  currentQuestionIndex++;
                  displayQuestion();
              }, 1000);
          };
      });
  } else {
      title.style.display = 'none';
      questionTitle.textContent = "Quiz terminé !" + "\n" + "Votre Score est de" + "\n" + " " + scoreCount + "/" + questions.length;
      hideAnswers();
  }
}

function hideAnswers() {
  differentAnswers.forEach(element => {
      element.style.display = 'none';
  });
}

displayQuestion();

