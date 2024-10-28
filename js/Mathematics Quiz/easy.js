let questionTitle           = document.getElementById('questionTitle');
let differentAnswers        = document.querySelectorAll('.quiz-container');
let startCountQuestion      = document.querySelector('.startCountQuestion');
let endCountQuestion        = document.querySelector('.endCountQuestion');
let title                   = document.querySelector('.title');
let scoreCount= 0; 
let currentQuestionIndex    = 0;

// Tableau des questions
const questions = [
    {
        question: "Quel est le résultat de 7 + 5 ?",
        choices: ["10", "11", "12", "13"],
        correctAnswer: 2
    },
    {
        question: "Comment appelle-t-on un polygone avec trois côtés ?",
        choices: ["Carré", "Rectangle", "Triangle", "Pentagone"],
        correctAnswer: 2
    },
    {
        question: "Quel est le résultat de 9 x 3 ?",
        choices: ["27", "21", "36", "18"],
        correctAnswer: 0
    },
    {
        question: "Quel est le nombre qui vient après 99 ?",
        choices: ["98", "100", "101", "99"],
        correctAnswer: 1
    },
    {
        question: "Combien font 100 ÷ 10 ?",
        choices: ["5", "10", "20", "50"],
        correctAnswer: 1
    },
    {
        question: "Quelle forme a quatre côtés égaux et quatre angles droits ?",
        choices: ["Rectangle", "Carré", "Triangle", "Cercle"],
        correctAnswer: 1
    },
    {
        question: "Combien de côtés a un hexagone ?",
        choices: ["5", "6", "7", "8"],
        correctAnswer: 1
    },
    {
        question: "Que vaut 15 - 7 ?",
        choices: ["8", "6", "7", "9"],
        correctAnswer: 0
    },
    {
        question: "Comment appelle-t-on un angle de 90 degrés ?",
        choices: ["Angle obtus", "Angle droit", "Angle aigu", "Angle plat"],
        correctAnswer: 1
    },
    {
        question: "Quel est le résultat de 4² (4 au carré) ?",
        choices: ["4", "8", "12", "16"],
        correctAnswer: 3
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
