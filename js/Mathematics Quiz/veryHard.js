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
        question: "Quel est le déterminant de la matrice 3x3 suivante : [[2, -3, 1], [5, 0, 4], [1, -1, -2]] ?",
        choices: ["17", "-27", "19", "14"],
        correctAnswer: 1
    },
    {
        question: "Si f(x) = e^(2x), quelle est la dérivée seconde de f(x) ?",
        choices: ["2e^(2x)", "4e^(2x)", "e^(2x)", "8e^(2x)"],
        correctAnswer: 1
    },
    {
        question: "La conjecture de Goldbach affirme que chaque nombre pair supérieur à 2 peut être exprimé comme :",
        choices: [
            "La somme de deux nombres premiers",
            "La somme de trois nombres premiers",
            "Le produit de deux nombres premiers",
            "Le produit de trois nombres premiers"
        ],
        correctAnswer: 0
    },
    {
        question: "Quel est le résultat de l'intégrale suivante : ∫ (x² - 3x + 2) / (x - 2) dx ?",
        choices: [
            "x² / 2 - 3x + ln|x - 2| + C",
            "x + ln|x - 2| + C",
            "x - 3 + ln|x - 2| + C",
            "x² - 3x + ln|x - 2| + C"
        ],
        correctAnswer: 1
    },
    {
        question: "Quel est le nombre de solutions réelles de l'équation x^4 - 10x² + 9 = 0 ?",
        choices: ["4", "2", "3", "1"],
        correctAnswer: 0
    },
    {
        question: "Si z = 3 + 4i, quel est le module de z ?",
        choices: ["7", "5", "6", "5i"],
        correctAnswer: 1
    },
    {
        question: "La transformation de Laplace de cos(3t) est :",
        choices: ["s / (s² + 9)", "3 / (s² + 9)", "1 / (s² + 9)", "s² / (s² + 3)"],
        correctAnswer: 0
    },
    {
        question: "Si lim (x→∞) (x² - 4x + 1) / (2x² + 3x + 1) = L, quelle est la valeur de L ?",
        choices: ["1/2", "0", "2", "∞"],
        correctAnswer: 0
    },
    {
        question: "La somme infinie de la série Σ (1/n²) est :",
        choices: ["π² / 6", "π / 4", "π² / 4", "2π / 3"],
        correctAnswer: 0
    },
    {
        question: "Le théorème des restes chinois est applicable lorsque :",
        choices: [
            "Les moduli sont tous premiers entre eux",
            "Les moduli sont tous impairs",
            "Les moduli sont tous pairs",
            "Les moduli sont tous premiers"
        ],
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
