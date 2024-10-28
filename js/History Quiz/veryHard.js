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
        question: "Quel roi babylonien a créé le premier code de lois connu, gravé sur une stèle de pierre ?",
        choices: ["Sargon", "Nabonide", "Hammurabi", "Nabuchodonosor"],
        correctAnswer: 2
    },
    {
        question: "Qui a été le principal stratège militaire de la Chine lors de la période des Royaumes combattants, souvent crédité du livre 'L'Art de la Guerre' ?",
        choices: ["Sun Tzu", "Confucius", "Qin Shi Huang", "Zhang Liang"],
        correctAnswer: 0
    },
    {
        question: "Dans quelle bataille Napoléon a-t-il subi sa première grande défaite face à la coalition anglo-espagnole ?",
        choices: ["Bataille de Trafalgar", "Bataille de Leipzig", "Bataille de Borodino", "Bataille de Vitoria"],
        correctAnswer: 3
    },
    {
        question: "Quelle civilisation mésoaméricaine a introduit le système de numération vigésimal et le concept de zéro dans ses mathématiques ?",
        choices: ["Aztèque", "Maya", "Olmèque", "Inca"],
        correctAnswer: 1
    },
    {
        question: "Quel dirigeant mongol a établi l'Empire timouride, une des dynasties les plus puissantes d'Asie centrale au XIVe siècle ?",
        choices: ["Gengis Khan", "Timur", "Ogedei Khan", "Batu Khan"],
        correctAnswer: 1
    },
    {
        question: "Dans quelle ville grecque antique le philosophe Héraclite a-t-il développé sa doctrine du changement perpétuel ?",
        choices: ["Athènes", "Éphèse", "Sparta", "Corinthe"],
        correctAnswer: 1
    },
    {
        question: "Qui était le roi anglais régnant pendant la perte de la bataille d'Hastings en 1066 ?",
        choices: ["Édouard le Confesseur", "Harold Godwinson", "Guillaume le Conquérant", "Henri Ier"],
        correctAnswer: 1
    },
    {
        question: "Quel traité de 1713 a mis fin à la guerre de Succession d'Espagne, réorganisant les puissances en Europe ?",
        choices: ["Traité de Paris", "Traité d'Utrecht", "Traité de Nimègue", "Traité de Vienne"],
        correctAnswer: 1
    },
    {
        question: "Quel pays africain a résisté aux colonisateurs italiens lors de la bataille d'Adoua en 1896 ?",
        choices: ["Éthiopie", "Érythrée", "Soudan", "Libye"],
        correctAnswer: 0
    },
    {
        question: "Quel explorateur a été le premier Européen à atteindre l'archipel indonésien en 1512 ?",
        choices: ["Vasco de Gama", "Fernand de Magellan", "Francis Drake", "Francisco Serrão"],
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
