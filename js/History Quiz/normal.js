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
        question: "Quel roi de France est surnommé 'le Roi Soleil' ?",
        choices: ["Louis XIV", "Louis XVI", "Louis XV", "François Ier"],
        correctAnswer: 0
    },
    {
        question: "En quelle année l'homme a-t-il marché sur la Lune pour la première fois ?",
        choices: ["1967", "1968", "1969", "1970"],
        correctAnswer: 2
    },
    {
        question: "Quelle bataille a marqué la défaite finale de Napoléon Bonaparte ?",
        choices: ["La bataille de Leipzig", "La bataille de Waterloo", "La bataille de Trafalgar", "La bataille d'Austerlitz"],
        correctAnswer: 1
    },
    {
        question: "Qui a unifié l'Allemagne en 1871, devenant ainsi son premier chancelier ?",
        choices: ["Franz Ferdinand", "Otto von Bismarck", "Wilhelm II", "Frédéric III"],
        correctAnswer: 1
    },
    {
        question: "Quel explorateur est célèbre pour avoir navigué autour du monde au XVIe siècle ?",
        choices: ["Christophe Colomb", "Ferdinand Magellan", "Vasco de Gama", "Francis Drake"],
        correctAnswer: 1
    },
    {
        question: "Quel traité a mis fin à la Première Guerre mondiale en 1919 ?",
        choices: ["Le traité de Versailles", "Le traité de Rome", "Le traité de Paris", "Le traité de Trianon"],
        correctAnswer: 0
    },
    {
        question: "Qui était le pharaon lorsque les grandes pyramides ont été construites en Égypte ?",
        choices: ["Toutankhamon", "Ramsès II", "Kheops", "Aménophis III"],
        correctAnswer: 2
    },
    {
        question: "Quelle ville fut la capitale de l'Empire byzantin ?",
        choices: ["Athènes", "Rome", "Byzance", "Constantinople"],
        correctAnswer: 3
    },
    {
        question: "Quel document signé en 1215 est considéré comme une étape importante dans le développement des droits ?",
        choices: ["La Constitution", "Le Code Napoléon", "La Magna Carta", "La Déclaration des droits de l'homme"],
        correctAnswer: 2
    },
    {
        question: "Sous quel président américain le New Deal a-t-il été lancé pour contrer la Grande Dépression ?",
        choices: ["Herbert Hoover", "Franklin D. Roosevelt", "Harry Truman", "Woodrow Wilson"],
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
