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
        question: "Si x = 5 et y = 3, quel est le résultat de l'expression 2x² - 3y ?",
        choices: ["29", "35", "23", "27"],
        correctAnswer: 0
    },
    {
        question: "Quelle est la dérivée de la fonction f(x) = 3x^3 + 4x² - 5x + 7 ?",
        choices: ["9x² + 8x - 5", "3x² + 8x + 7", "9x² - 5", "x² - 4x + 5"],
        correctAnswer: 0
    },
    {
        question: "Quel est le logarithme de 1000 en base 10 ?",
        choices: ["2", "3", "4", "10"],
        correctAnswer: 1
    },
    {
        question: "La somme des angles d'un polygone à 12 côtés est de combien ?",
        choices: ["1800°", "1620°", "2160°", "1980°"],
        correctAnswer: 1
    },
    {
        question: "Quel est le nombre de combinaisons possibles de choisir 4 objets parmi 7 ?",
        choices: ["24", "35", "210", "70"],
        correctAnswer: 1
    },
    {
        question: "Si cos θ = 0.5, quelle est la valeur de θ en degrés ?",
        choices: ["30°", "60°", "90°", "45°"],
        correctAnswer: 1
    },
    {
        question: "Le nombre d'or est approximativement égal à :",
        choices: ["1.618", "2.718", "3.141", "1.414"],
        correctAnswer: 0
    },
    {
        question: "Quelle est la valeur de l'intégrale ∫(3x² + 2x)dx ?",
        choices: ["x³ + x² + C", "x³ + x + C", "3x³ + x² + C", "x³ + 2x + C"],
        correctAnswer: 0
    },
    {
        question: "La série géométrique infinie de raison 1/2 et de premier terme 4 converge vers quel nombre ?",
        choices: ["6", "8", "10", "12"],
        correctAnswer: 1
    },
    {
        question: "Dans un triangle, si deux côtés mesurent 7 et 24, et que l'hypoténuse mesure 25, quel est cet triangle ?",
        choices: ["Triangle équilatéral", "Triangle rectangle", "Triangle isocèle", "Triangle obtusangle"],
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
