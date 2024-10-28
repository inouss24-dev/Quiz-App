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
        question: "Quel est l'élément chimique représenté par le symbole 'O' ?",
        choices: ["Or", "Oxygène", "Osmium", "Oganesson"],
        correctAnswer: 1
    },
    {
        question: "Quel est l'organe principal du système nerveux central ?",
        choices: ["Le cœur", "Les poumons", "Le cerveau", "L'estomac"],
        correctAnswer: 2
    },
    {
        question: "Quelle planète est la plus proche du Soleil ?",
        choices: ["Vénus", "Mars", "Mercure", "Jupiter"],
        correctAnswer: 2
    },
    {
        question: "Quel est l'état de l'eau à une température de 0°C ?",
        choices: ["Liquide", "Solide", "Gazeux", "Plasma"],
        correctAnswer: 1
    },
    {
        question: "Quelle est la force qui nous maintient au sol et empêche de flotter dans les airs ?",
        choices: ["La gravité", "L'électricité", "La pression", "La lumière"],
        correctAnswer: 0
    },
    {
        question: "Quel gaz les plantes absorbent-elles pour réaliser la photosynthèse ?",
        choices: ["Oxygène", "Azote", "Hydrogène", "Dioxyde de carbone"],
        correctAnswer: 3
    },
    {
        question: "Quel est l'instrument utilisé pour observer les étoiles et les planètes ?",
        choices: ["Microscope", "Stéthoscope", "Télescope", "Gyroscope"],
        correctAnswer: 2
    },
    {
        question: "De quelle couleur est le sang dans les veines avant de rencontrer l'oxygène ?",
        choices: ["Rouge vif", "Bleu", "Vert", "Rouge foncé"],
        correctAnswer: 3
    },
    {
        question: "Quel est le plus grand organe du corps humain ?",
        choices: ["Le foie", "La peau", "Les poumons", "Le cerveau"],
        correctAnswer: 1
    },
    {
        question: "Combien de planètes composent le système solaire ?",
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
