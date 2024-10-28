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
        question: "Qui a régné comme empereur du Saint-Empire romain germanique de 1519 à 1556 ?",
        choices: ["Charles Quint", "Frédéric Barberousse", "Otton Ier", "Henri IV"],
        correctAnswer: 0
    },
    {
        question: "La guerre des Deux-Roses a opposé les maisons de Lancaster et de York pour le trône d’Angleterre. Combien d'années a-t-elle duré ?",
        choices: ["15 ans", "30 ans", "50 ans", "100 ans"],
        correctAnswer: 1
    },
    {
        question: "Quel explorateur européen fut le premier à atteindre le Cap de Bonne-Espérance en 1488 ?",
        choices: ["Ferdinand Magellan", "Vasco de Gama", "Bartolomeu Dias", "Christophe Colomb"],
        correctAnswer: 2
    },
    {
        question: "Quel empire a régné sur une grande partie de l'Asie centrale et du Moyen-Orient avant l'arrivée des Mongols au XIIIe siècle ?",
        choices: ["L'empire byzantin", "L'empire perse", "L'empire sassanide", "L'empire khorezmien"],
        correctAnswer: 3
    },
    {
        question: "Quelle dynastie chinoise est associée à la construction initiale de la Grande Muraille de Chine ?",
        choices: ["Dynastie Ming", "Dynastie Han", "Dynastie Qin", "Dynastie Tang"],
        correctAnswer: 2
    },
    {
        question: "Qui était le dernier empereur d'Empire romain d'Occident, déposant en 476 marquant la fin de l'Empire ?",
        choices: ["Néron", "Romulus Augustule", "Odoacre", "Commode"],
        correctAnswer: 1
    },
    {
        question: "Quel philosophe grec était le précepteur d'Alexandre le Grand ?",
        choices: ["Platon", "Socrate", "Pythagore", "Aristote"],
        correctAnswer: 3
    },
    {
        question: "Dans quel pays se trouve la ville d'Angkor, centre de l'Empire khmer au XIIe siècle ?",
        choices: ["Vietnam", "Birmanie", "Thaïlande", "Cambodge"],
        correctAnswer: 3
    },
    {
        question: "Quel traité a mis fin à la guerre de Trente Ans en 1648 ?",
        choices: ["Traité de Versailles", "Paix de Westphalie", "Paix d'Augsbourg", "Traité de Paris"],
        correctAnswer: 1
    },
    {
        question: "Quel leader révolutionnaire haïtien a mené une révolte contre les colons français au début du XIXe siècle ?",
        choices: ["Toussaint Louverture", "Simón Bolívar", "Jean-Jacques Dessalines", "Henri Christophe"],
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
