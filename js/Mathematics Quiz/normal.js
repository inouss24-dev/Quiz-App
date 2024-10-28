let questionTitle           = document.getElementById('questionTitle');
let differentAnswers        = document.querySelectorAll('.quiz-container');
let startCountQuestion      = document.querySelector('.startCountQuestion');
let endCountQuestion        = document.querySelector('.endCountQuestion');
let title                   = document.querySelector('.title');
let scoreCount= 0; 
let currentQuestionIndex    = 0;

const questions = [
    {
        question: "Quelle est la valeur de √81 ?",
        choices: ["7", "8", "9", "10"],
        correctAnswer: 2
    },
    {
        question: "Quel est le résultat de 25 x 4 ?",
        choices: ["75", "100", "125", "150"],
        correctAnswer: 1
    },
    {
        question: "Quel est le résultat de 14 + 23 - 9 ?",
        choices: ["28", "32", "18", "24"],
        correctAnswer: 0
    },
    {
        question: "Comment appelle-t-on un angle supérieur à 90 degrés mais inférieur à 180 degrés ?",
        choices: ["Angle droit", "Angle aigu", "Angle obtus", "Angle plat"],
        correctAnswer: 2
    },
    {
        question: "Quel est le périmètre d'un carré dont chaque côté mesure 5 cm ?",
        choices: ["15 cm", "20 cm", "25 cm", "30 cm"],
        correctAnswer: 1
    },
    {
        question: "Si un cercle a un diamètre de 10 cm, quel est son rayon ?",
        choices: ["2 cm", "5 cm", "10 cm", "20 cm"],
        correctAnswer: 1
    },
    {
        question: "Quel est le produit de 6 x 7 ?",
        choices: ["36", "40", "42", "48"],
        correctAnswer: 2
    },
    {
        question: "Comment appelle-t-on un polygone à huit côtés ?",
        choices: ["Hexagone", "Octogone", "Nonagone", "Décagone"],
        correctAnswer: 1
    },
    {
        question: "Quel est le résultat de (8 + 12) ÷ 4 ?",
        choices: ["3", "5", "6", "7"],
        correctAnswer: 1
    },
    {
        question: "Combien d'angles droits trouve-t-on dans un rectangle ?",
        choices: ["1", "2", "3", "4"],
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
            element.onclick = null; 
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
