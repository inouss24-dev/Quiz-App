let questionTitle = document.getElementById('questionTitle');
let differentAnswers = document.querySelectorAll('.quiz-container');
let currentQuestionIndex = 0;
let startCountQuestion = document.querySelector('.startCountQuestion');
let endCountQuestion = document.querySelector('.endCountQuestion');
let title               = document.querySelector('.title');
let scoreCount = 0; 
// Tableau des questions
const questions = [
    {
        question: "Qui a peint la célèbre fresque 'La Cène' ?",
        choices: ["Vincent van Gogh", "Leonardo da Vinci", "Michel-Ange", "Pablo Picasso"],
        correctAnswer: 1
    },
    {
        question: "Quel est le nom de la première civilisation connue pour avoir inventé l'écriture ?",
        choices: ["Les Romains", "Les Égyptiens", "Les Mésopotamiens", "Les Grecs"],
        correctAnswer: 2
    },
    {
        question: "Quel explorateur a découvert l'Amérique en 1492 ?",
        choices: ["Vasco de Gama", "Marco Polo", "Christophe Colomb", "Ferdinand Magellan"],
        correctAnswer: 2
    },
    {
        question: "Quelle guerre célèbre a opposé les royaumes d'Angleterre et de France entre 1337 et 1453 ?",
        choices: ["La guerre des Deux-Roses", "La guerre de Cent Ans", "La guerre civile anglaise", "La guerre de Succession d'Espagne"],
        correctAnswer: 1
    },
    {
        question: "Qui était le premier président des États-Unis ?",
        choices: ["Abraham Lincoln", "George Washington", "Thomas Jefferson", "John Adams"],
        correctAnswer: 1
    },
    {
        question: "Dans quelle ville se trouve le célèbre Colisée romain ?",
        choices: ["Athènes", "Rome", "Istanbul", "Alexandrie"],
        correctAnswer: 1
    },
    {
        question: "Comment s'appelait la reine d'Égypte célèbre pour sa beauté et son règne avec Jules César ?",
        choices: ["Néfertiti", "Cléopâtre", "Hatshepsout", "Sémiramis"],
        correctAnswer: 1
    },
    {
        question: "Quelle grande muraille a été construite pour protéger la Chine des invasions ?",
        choices: ["La muraille d'Hadrien", "La Grande Muraille de Chine", "La muraille de Babylone", "La muraille de Troie"],
        correctAnswer: 1
    },
    {
        question: "Qui est connu pour avoir mené les troupes françaises à la victoire lors de la bataille d'Orléans en 1429 ?",
        choices: ["Marie Curie", "Jeanne d'Arc", "Marguerite de Navarre", "Anne de Bretagne"],
        correctAnswer: 1
    },
    {
        question: "Quel événement historique a marqué le début de la Révolution française en 1789 ?",
        choices: ["La Prise de la Bastille", "L'Exécution de Louis XVI", "La Nuit du 4 août", "La Fuite à Varennes"],
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
