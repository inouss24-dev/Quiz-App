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
        question: "Quelle est la demi-vie approximative de l'uranium-238 ?",
        choices: ["4,5 milliards d'années", "1,3 milliard d'années", "704 millions d'années", "14 milliards d'années"],
        correctAnswer: 0
    },
    {
        question: "Quel physicien a formulé la théorie des cordes en 1970 ?",
        choices: ["Edward Witten", "Leonard Susskind", "Michio Kaku", "John Schwarz"],
        correctAnswer: 1
    },
    {
        question: "Quel est le nombre de types de quarks actuellement connus en physique des particules ?",
        choices: ["3", "4", "6", "8"],
        correctAnswer: 2
    },
    {
        question: "Quel scientifique a proposé l'idée du 'temps imaginaire' dans le cadre de la cosmologie quantique ?",
        choices: ["Niels Bohr", "Erwin Schrödinger", "Stephen Hawking", "Roger Penrose"],
        correctAnswer: 2
    },
    {
        question: "Dans la théorie quantique des champs, quel boson est responsable de l'interaction faible ?",
        choices: ["Le photon", "Le boson W", "Le gluon", "Le boson de Higgs"],
        correctAnswer: 1
    },
    {
        question: "Quelle équation gouverne le comportement des ondes dans un potentiel en physique quantique ?",
        choices: ["L'équation de Schrödinger", "L'équation de Dirac", "L'équation de Maxwell", "L'équation de Navier-Stokes"],
        correctAnswer: 0
    },
    {
        question: "Quelle est la vitesse de libération de la Terre, en km/s ?",
        choices: ["7,9 km/s", "11,2 km/s", "25 km/s", "5 km/s"],
        correctAnswer: 1
    },
    {
        question: "Quelle est la principale fonction des ribosomes dans une cellule ?",
        choices: ["Réparer l'ADN", "Synthétiser des protéines", "Produire de l'énergie", "Transporter l'ARN"],
        correctAnswer: 1
    },
    {
        question: "Quel est le nom de l'expérience pensée pour démontrer le paradoxe du chat en physique quantique ?",
        choices: ["Le paradoxe d'Einstein-Podolsky-Rosen", "Le paradoxe de Schrödinger", "Le paradoxe de Fermi", "Le paradoxe de Wigner"],
        correctAnswer: 1
    },
    {
        question: "Quel type de réaction nucléaire se produit dans les étoiles pour produire de l'énergie ?",
        choices: ["Fission", "Fusion", "Désintégration alpha", "Capture électronique"],
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
