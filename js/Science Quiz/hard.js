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
        question: "Quel est le nombre de protons dans le noyau d'un atome de carbone ?",
        choices: ["4", "6", "8", "12"],
        correctAnswer: 1
    },
    {
        question: "Quelle est l’unité de base pour mesurer l’intensité du courant électrique ?",
        choices: ["Ampère", "Volt", "Ohm", "Watt"],
        correctAnswer: 0
    },
    {
        question: "Qui est le père de la physique quantique ?",
        choices: ["Albert Einstein", "Niels Bohr", "Max Planck", "Erwin Schrödinger"],
        correctAnswer: 2
    },
    {
        question: "Quel processus cellulaire est responsable de la production d'ATP dans les mitochondries ?",
        choices: ["La photosynthèse", "La glycolyse", "La respiration cellulaire", "La fermentation"],
        correctAnswer: 2
    },
    {
        question: "Quel est le nom de la particule élémentaire découverte en 2012, surnommée la 'particule de Dieu' ?",
        choices: ["Le photon", "Le gluon", "Le boson de Higgs", "Le neutrino"],
        correctAnswer: 2
    },
    {
        question: "Quel est le nom de la plus grande lune de Saturne ?",
        choices: ["Io", "Europa", "Titan", "Ganymède"],
        correctAnswer: 2
    },
    {
        question: "Quelle est la distance moyenne de la Terre au Soleil ?",
        choices: ["92,96 millions de kilomètres", "149,6 millions de kilomètres", "384 400 kilomètres", "1 million de kilomètres"],
        correctAnswer: 1
    },
    {
        question: "Dans le tableau périodique, quel est le symbole chimique du tungstène ?",
        choices: ["Tu", "Tn", "W", "Tg"],
        correctAnswer: 2
    },
    {
        question: "Quel est le principal composé chimique des parois cellulaires des plantes ?",
        choices: ["La lignine", "La cellulose", "La chitine", "L'amidon"],
        correctAnswer: 1
    },
    {
        question: "Quel est le nombre maximum d'électrons pouvant occuper la couche L d'un atome ?",
        choices: ["2", "8", "18", "32"],
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
