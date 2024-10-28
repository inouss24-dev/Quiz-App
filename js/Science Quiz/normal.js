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
        question: "Quel est le rôle principal des globules rouges dans le sang humain ?",
        choices: ["Combattre les infections", "Transporter l'oxygène", "Digérer les aliments", "Réguler la température"],
        correctAnswer: 1
    },
    {
        question: "Quelle est la principale source d'énergie pour les plantes ?",
        choices: ["L'eau", "Le dioxyde de carbone", "La lumière du soleil", "L'oxygène"],
        correctAnswer: 2
    },
    {
        question: "Quel scientifique a développé la théorie de la relativité ?",
        choices: ["Isaac Newton", "Galilée", "Nikola Tesla", "Albert Einstein"],
        correctAnswer: 3
    },
    {
        question: "Quel est l'élément le plus abondant dans l'univers ?",
        choices: ["Hydrogène", "Carbone", "Hélium", "Azote"],
        correctAnswer: 0
    },
    {
        question: "Dans quel organe du corps humain se trouve l'hippocampe, qui joue un rôle dans la mémoire ?",
        choices: ["Le foie", "Le cerveau", "Les poumons", "Le cœur"],
        correctAnswer: 1
    },
    {
        question: "Quel phénomène naturel est mesuré par l'échelle de Richter ?",
        choices: ["Les tsunamis", "Les ouragans", "Les séismes", "Les éruptions volcaniques"],
        correctAnswer: 2
    },
    {
        question: "Quel type d'animal est un ornithorynque ?",
        choices: ["Mammifère", "Oiseau", "Reptile", "Amphibien"],
        correctAnswer: 0
    },
    {
        question: "Quel est l'acronyme de l'ADN ?",
        choices: ["Acide Désoxyribonucléique", "Acide Diéthylaminique", "Acide Désoxyribonitrique", "Acide Diphosphorique"],
        correctAnswer: 0
    },
    {
        question: "Quel est le nom du processus par lequel une chenille devient un papillon ?",
        choices: ["Transformation", "Chrysalis", "Métamorphose", "Transfiguration"],
        correctAnswer: 2
    },
    {
        question: "Quel gaz est le principal responsable de l'effet de serre ?",
        choices: ["Oxygène", "Dioxyde de carbone", "Hydrogène", "Azote"],
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
