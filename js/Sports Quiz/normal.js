let questionTitle = document.getElementById('questionTitle');
let differentAnswers = document.querySelectorAll('.quiz-container');
let currentQuestionIndex = 0;
let startCountQuestion = document.querySelector('.startCountQuestion');
let endCountQuestion = document.querySelector('.endCountQuestion');
let title = document.querySelector('.title');
let scoreCount = 0; 

const questions = [
    {
        question: "Quel club de football a remporté le plus de Ligue des Champions de l'UEFA ?",
        choices: ["FC Barcelone", "AC Milan", "Real Madrid", "Liverpool"],
        correctAnswer: 2
    },
    {
        question: "Combien de fois Michael Schumacher a-t-il remporté le championnat du monde de Formule 1 ?",
        choices: ["5", "7", "8", "9"],
        correctAnswer: 1
    },
    {
        question: "En quelle année le premier Super Bowl a-t-il eu lieu ?",
        choices: ["1965", "1967", "1970", "1972"],
        correctAnswer: 1
    },
    {
        question: "Quel est le sport national du Canada ?",
        choices: ["Hockey sur glace", "Lacrosse", "Football américain", "Curling"],
        correctAnswer: 1
    },
    {
        question: "Quel joueur de basket détient le record du plus grand nombre de points marqués en un match NBA ?",
        choices: ["Wilt Chamberlain", "Michael Jordan", "Kobe Bryant", "LeBron James"],
        correctAnswer: 0
    },
    {
        question: "Quel est le nombre de titres de Grand Chelem remportés par Serena Williams ?",
        choices: ["20", "21", "23", "24"],
        correctAnswer: 2
    },
    {
        question: "En escrime, quelle est la seule arme où le corps entier est une cible valable ?",
        choices: ["Épée", "Fleuret", "Sabre", "Rapière"],
        correctAnswer: 0
    },
    {
        question: "Quel pays a remporté la première Coupe du Monde de la FIFA en 1930 ?",
        choices: ["Brésil", "Argentine", "Uruguay", "Italie"],
        correctAnswer: 2
    },
    {
        question: "Dans quel sport utilise-t-on un 'mélange de curling' ?",
        choices: ["Luge", "Curling", "Ski", "Patinage de vitesse"],
        correctAnswer: 1
    },
    {
        question: "Combien de fois Rafael Nadal a-t-il remporté Roland-Garros ?",
        choices: ["10", "11", "13", "14"],
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
