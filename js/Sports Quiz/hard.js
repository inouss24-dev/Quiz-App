let questionTitle = document.getElementById('questionTitle');
let differentAnswers = document.querySelectorAll('.quiz-container');
let currentQuestionIndex = 0;
let startCountQuestion = document.querySelector('.startCountQuestion');
let endCountQuestion = document.querySelector('.endCountQuestion');
let title               = document.querySelector('.title');
let scoreCount = 0; 

const questions = [
  {
    question: "Quel est le plus grand nombre de buts marqués par un joueur en une seule saison de Ligue des Champions de l'UEFA ?",
    choices: ["14", "15", "16", "17"],
    correctAnswer: 3
  },
  {
    question: "Quel joueur de tennis a remporté le plus de titres de simple en carrière ?",
    choices: ["Roger Federer", "Jimmy Connors", "Ivan Lendl", "Rafael Nadal"],
    correctAnswer: 1
  },
  {
    question: "Combien de points totaux Michael Jordan a-t-il marqué en NBA ?",
    choices: ["32,292", "33,643", "30,123", "31,928"],
    correctAnswer: 0
  },
  {
    question: "Quel est le temps exact du record du monde du 400 mètres détenu par Wayde van Niekerk ?",
    choices: ["43.01 s", "43.03 s", "43.04 s", "43.02 s"],
    correctAnswer: 1
  },
  {
    question: "Combien de buts Pelé a-t-il marqués officiellement dans sa carrière professionnelle ?",
    choices: ["767", "775", "793", "757"],
    correctAnswer: 0
  },
  {
    question: "Quel boxeur a terminé sa carrière avec 49 victoires, sans aucune défaite ou match nul, avant que Floyd Mayweather égale ce record ?",
    choices: ["Joe Louis", "Rocky Marciano", "Muhammad Ali", "Sugar Ray Robinson"],
    correctAnswer: 1
  },
  {
    question: "Quel club de football a remporté la première édition de la Ligue des Champions en 1955-1956 ?",
    choices: ["Real Madrid", "AC Milan", "Eintracht Francfort", "Benfica"],
    correctAnswer: 0
  },
  {
    question: "En quelle année Tiger Woods a-t-il remporté son premier tournoi majeur de golf ?",
    choices: ["1996", "1997", "1999", "2000"],
    correctAnswer: 1
  },
  {
    question: "Combien de fois Novak Djokovic a-t-il terminé l'année en tant que numéro 1 mondial au classement ATP ?",
    choices: ["5", "6", "7", "8"],
    correctAnswer: 2
  },
  {
    question: "Quel est le plus grand nombre de médailles d’or remportées par un athlète en une seule édition des Jeux Olympiques ?",
    choices: ["7", "8", "9", "10"],
    correctAnswer: 1
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
