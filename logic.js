let questions = [
    {
        question: "What is the capital of Brazil?",
        optionA: "Rio de Janeiro",
        optionB: "São Paulo",
        optionC: "Brasília",
        optionD: "Salvador",
        correctOption: "optionC"
    },
    {
        question: "What is the capital of Nigeria?",
        optionA: "Lagos",
        optionB: "Abuja",
        optionC: "Kano",
        optionD: "Ibadan",
        correctOption: "optionB"
    },
    {
        question: "What is the capital of USA?",
        optionA: "New York",
        optionB: "California",
        optionC: "Texas",
        optionD: "Washington D.C.",
        correctOption: "optionD"
    },
    {
        question: "What is the capital of Germany?",
        optionA: "Berlin",
        optionB: "Munich",
        optionC: "Frankfurt",
        optionD: "Hamburg",
        correctOption: "optionA"
    },
    {
        question: "What is the capital of Canada?",
        optionA: "Toronto",
        optionB: "Vancouver",
        optionC: "Ottawa",
        optionD: "Montreal",
        correctOption: "optionC"
    }
]

let NumOfQuest = questions.length;
let currQuestIndex = 0;
var questionElement = document.querySelector('.question');
let score = 0;
const scoreText = document.querySelector('.currScore');
const choiceElements = Array.from(document.getElementsByClassName('option'));
let currQuesnumber = 1;
let availableQuestion = [...questions];
let quesNum = document.querySelector('.quesNumber');
localStorage.setItem('numOfQuest', NumOfQuest);
let proBar = document.querySelector('.bar');
proBar.style.width = `${(currQuesnumber/questions.length)*100}%`
function startGame() { 
    loadQuestion();
}

function loadQuestion() {
    if (availableQuestion.length === 0) {
        localStorage.setItem('mostRecentScore', score);
        return window.location.assign('end.html');
    }
    let currQuestIndex = Math.floor(Math.random()*availableQuestion.length);
    const currQues = availableQuestion[currQuestIndex];
    questionElement.innerText = currQues.question;
    proBar.style.width = `${(currQuesnumber/questions.length)*100}%`
    quesNum.innerText = "Question " + currQuesnumber + "/" + questions.length;
    currQuesnumber++;
    document.querySelector('#optA').innerText = currQues.optionA;
    document.querySelector('#optB').innerText = currQues.optionB;
    document.querySelector('#optC').innerText = currQues.optionC;
    document.querySelector('#optD').innerText = currQues.optionD;

    document.querySelector('#optA').addEventListener("click",checkA);
    document.querySelector('#optB').addEventListener("click",checkB);
    document.querySelector('#optC').addEventListener("click",checkC);
    document.querySelector('#optD').addEventListener("click",checkD);
    let isOne = true;


    function checkA() {
        var str = document.querySelector('#optA').innerText;
        var temp = currQues.correctOption;
        if(isOne) {
        if(str===currQues[temp]) {
            score=score+10;
            scoreText.innerText=score;
            document.querySelector('#optA').classList.add('correct');
        }
        else {
            document.querySelector('#optA').classList.add('incorrect');
        }
        isOne = false;
        setTimeout(() => {
            document.querySelector('#optA').classList.remove('correct','incorrect');
            availableQuestion.splice(currQuestIndex, 1);
            loadQuestion();
        }, 1000);
    }
    }

    function checkB() {
        var str = document.querySelector('#optB').innerText;
        var temp = currQues.correctOption;
        if(isOne) {
            if(str===currQues[temp]) {
                score=score+10;
                scoreText.innerText=score;
                document.querySelector('#optB').classList.add('correct');
            }
            else {
                document.querySelector('#optB').classList.add('incorrect');
            }
            isOne = false;
            setTimeout(() => {
                document.querySelector('#optB').classList.remove('correct','incorrect');
                availableQuestion.splice(currQuestIndex, 1);
                loadQuestion();
            }, 1000);
        }
    }

    function checkC() {
        var str = document.querySelector('#optC').innerText;
        var temp = currQues.correctOption;
        if(isOne) {
            if(str===currQues[temp]) {
                score=score+10;
                scoreText.innerText=score;
                document.querySelector('#optC').classList.add('correct');
            }
            else {
                document.querySelector('#optC').classList.add('incorrect');
            }
            isOne = false;
            setTimeout(() => {
                document.querySelector('#optC').classList.remove('correct','incorrect');
                availableQuestion.splice(currQuestIndex,1);
                loadQuestion();
            }, 1000);
        }
    }

    function checkD() {
        var str = document.querySelector('#optD').innerText;
        var temp = currQues.correctOption;
        if(isOne) {
            if(str===currQues[temp]) {
                score=score+10;
                scoreText.innerText =score;
                document.querySelector('#optD').classList.add('correct');
            }
            else {
                document.querySelector('#optD').classList.add('incorrect');
            }
            isOne = false;
            setTimeout(() => {
                document.querySelector('#optD').classList.remove('correct','incorrect');
                availableQuestion.splice(currQuestIndex, 1);
                loadQuestion();
            }, 1000);
        }
    }
}

startGame();