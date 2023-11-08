const questions = [
    {
    question: "Qual é a capital do Brasil?",
    choices: ["Brasília", "Rio de Janeiro", "São Paulo", "Salvador"],
    answer: "Brasília",
    },
    {
        question: "o vinicius é?",
        choices: ["Flamenguista", "fumante", "marcos wazalski", "pinguço"],
        answer: "marcos wazalski",
        },
    {
    question: "Qual é a capital da Argentina?",
    choices: ["Buenos Aires", "Brasília", "Lisboa", "Paris"],
    answer: "Buenos Aires",
    },
    {
        question: "oque o crazy frog disse",
        choices: ["glinglinglinglinglin", "brinbrinbrinbrin", "bin bin", "glinglinglinglinglin"],
        answer: "bin bin",
        },
    {
    question: "Qual é a capital da França?",
    choices: ["Roma", "Madri", "Paris", "Londres"],
    answer: "Paris",
    },
    {
        question: "qual a melhor aula ?",
        choices: ["Flamengo", "Sociologia", "ED.física"],
        answer: "Flamengo",
        },
    {
    question: "Qual é a capital da Espanha?",
    choices: ["Lisboa", "Madri", "Barcelona", "Valência"],
    answer: "Madri",
    },
    {
    question: "Qual é a capital da Itália?",
    choices: ["Veneza", "Milão", "Roma", "Nápoles"],
    answer: "Roma",
    },
    {
    question: "Qual é a capital do Canadá?",
    choices: ["Toronto", "Vancouver", "Ottawa", "Montreal"],
    answer: "Ottawa",
    },
    {
    question: "Qual é a capital dos Estados Unidos?",
    choices: ["Nova York", "Los Angeles", "Chicago", "Washington D.C."],
    answer: "Washington D.C.",
    },
    {
    question: "Qual é a capital do Reino Unido?",
    choices: ["Liverpool", "Manchester", "Edimburgo", "Londres"],
    answer: "Londres",
    },
    {
    question: "O quão ruim o luan é no firus faire?",
    choices: ["100%", "180%", "250%"],
    answer: "250%",
    },
    {
    question: "uma pergunta?",
    choices: ["?", "?", "?"],
    answer: "?",
    },
    {
    question: "qual é o mais bonito",
    choices: ["lamborghini huracan", "lamboghini", "huracan", "sua irmã"],
    answer: "sua irmã",
    },
   
   
    {
    question: "81 é do ?",
    choices: ["Flamengo", "Sport", "bangu"],
    answer: "Flamengo",
    },
    
    {
    question: "qual e melhor ?",
    choices: ["Flamengo", "Pátetico paranaense", "Opérario"],
    answer: "Opérario",
    },
    
    {
        question: "qual é o mais fedido",
        choices: ["eduardo", "lopes", "luan"],
        answer: "eduardo",
        },
    ];
    
    const questionElement = document.getElementById("question");
    const choiceElements = Array.from(document.getElementsByClassName("choice"));
    const nextButton = document.getElementById("next");
    const scoreElement = document.getElementById("score");
    const wrongElement = document.getElementById("wrong");
    
    let currentQuestion = 0;
    let score = 0;
    let wrong = 0;
    let answerChosen = false;
    
    function loadQuestion() {
    const currentQuestionData = questions[currentQuestion];
    questionElement.innerText = currentQuestionData.question;
    
    const choices = shuffleArray(currentQuestionData.choices);
    for (let i = 0; i < choiceElements.length; i++) {
    choiceElements[i].innerText = choices[i];
    }
    answerChosen = false; // reset flag when loading new question
    }
    
    function checkAnswer(e) {
    if (answerChosen) return; // prevent multiple answers
    answerChosen = true;
    
    if (e.target.innerText === questions[currentQuestion].answer) {
    score++;
    scoreElement.innerText = "Pontuação: " + score;
    alert("Correto!");
    } else {
    wrong++;
    wrongElement.innerText = "Erros: " + wrong;
    alert(
    "Errado! A resposta correta é " + questions[currentQuestion].answer + "."
    );
    }
    }
    
    choiceElements.forEach((element) => {
    element.addEventListener("click", checkAnswer);
    });
    
    function restartQuiz() {
    currentQuestion = 0;
    score = 0;
    wrong = 0;
    scoreElement.innerText = "Pontuação: 0";
    wrongElement.innerText = "Erros: 0";
    loadQuestion();
    }
    
    nextButton.addEventListener("click", () => {
    if (!answerChosen) {
    alert("Por favor, escolha uma resposta antes de prosseguir.");
    return;
    }
    
    currentQuestion++;
    
    if (currentQuestion < questions.length) {
    loadQuestion();
    } else {
    alert(
    "Fim do Quiz! Você acertou " +
    score +
    " de " +
    questions.length +
    " perguntas."
    );
    restartQuiz();
    }
    });
    
    function shuffleArray(array) {
    let currentIndex = array.length,
    temporaryValue,
    randomIndex;
    
    while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
    }
    
    return array;
    }
    
    loadQuestion();