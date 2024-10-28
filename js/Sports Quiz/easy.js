let questionTitle = document.getElementById('questionTitle');
let differentAnswers = document.querySelectorAll('.quiz-container');
let currentQuestionIndex = 0;
let startCountQuestion = document.querySelector('.startCountQuestion');
let endCountQuestion = document.querySelector('.endCountQuestion');
let title               = document.querySelector('.title');
let scoreCount = 0; 

const questions = [
    {
        question: "Quel pays a remporté la Coupe du monde de football en 2018 ?",
        choices: ["France", "Brésil", "Allemagne", "Espagne"],
        correctAnswer: 0
    },
    {
        question: "En quelle année ont eu lieu les premiers Jeux olympiques modernes ?",
        choices: ["1896", "1900", "1924", "1932"],
        correctAnswer: 0
    },
    {
        question: "Combien de points vaut un tir à trois points au basket-ball ?",
        choices: ["2", "3", "4", "5"],
        correctAnswer: 1
    },
    {
        question: "Quel joueur de tennis détient le plus de titres en Grand Chelem ?",
        choices: ["Roger Federer", "Rafael Nadal", "Novak Djokovic", "Pete Sampras"],
        correctAnswer: 2
    },
    {
        question: "Combien de titre a remporté Micheal Jordan en NBA",
        choices: ["3", "6", "4", "2"],
        correctAnswer: 1
    }, 
    {
        question: "Quel Pays africain à déja organisé une Coupe Du Monde",
        choices: ["Kenya", "Bénin", "Afrique Du Sud", "Cote D'ivoire"],
        correctAnswer: 2
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

