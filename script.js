const questions = [ 
    {
    quesstion:"Which country has a unicorn as its national animal?",
    answers:[
     {text:"Germany" , correct:false},
     {text:"Scotland" , correct:true},
     {text:"Finland" , correct:false},
     {text:"Luxembourg" , correct:false}
    ]
} ,{
    quesstion:"Which is capital city of North Korea?",
    answers:[
     {text:"Oslo" , correct:false},
     {text:"Wellington" , correct:false},
     {text:"Seoul" , correct:false},
     {text:"Pyongyang" , correct:true}
    ]
},{
    quesstion:"Name a country that is believed to be shaped like an elephant's head?",
    answers:[
     {text:"Thailand" , correct:true},
     {text:"Itly" , correct:false},
     {text:"France" , correct:false},
     {text:"Finland" , correct:false}
    ]
},{
    quesstion:" Which of the following is the most populous city in the World?",
    answers:[
     {text:"Osaka" , correct:false},
     {text:"Delhi" , correct:false},
     {text:"Mexico City" , correct:false},
     {text:"Tokyo" , correct:true}
    ]
},{
    quesstion:" What country has a maple leaf on their national flag?",
    answers:[
     {text:"Canada" , correct:true},
     {text:"USA" , correct:false},
     {text:"Nepal" , correct:false},
     {text:"South Africa" , correct:false}
    ]
},{
    quesstion:"What is the national currency of China?",
    answers:[
     {text:"Yen" , correct:false},
     {text:"Pound" , correct:false},
     {text:"Yuan" , correct:true},
     {text:"Peso" , correct:false}
    ]
},{
    quesstion:"Who painted the Mona Lisa?",
    answers:[
     {text:"Vincent van Gogh" , correct:false},
     {text:" Leonardo da Vinci" , correct:true},
     {text:"Michelangelo" , correct:false},
     {text:" Pablo Picasso" , correct:false}
    ]
    },{
        quesstion:"Who wrote the play Romeo and Juliet?",
        answers:[
         {text:"William Shakespeare" , correct:true},
         {text:"Jane Austen" , correct:false},
         {text:"Charles Dickens" , correct:false},
         {text:"F. Scott Fitzgerald" , correct:false}
        ]
    },{
        quesstion:"Which country is known as the Land of the Rising Sun?",
        answers:[
         {text:"Japan" , correct:true},
         {text:"Thiland" , correct:false},
         {text:"France" , correct:false},
         {text:"Newzeland" , correct:false}
        ] 
    },{
        quesstion:"The Olympic Games are held every ______ year?",
        answers:[
         {text:"6" , correct:false},
         {text:"5" , correct:false},
         {text:"2" , correct:false},
         {text:"4" , correct:true}
        ] 
    }
];

const questionElement = document.getElementById("question");
const answerButtons= document.getElementById("answer-button");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score =0;
    nextButton.innerHTML = "Next";
    showQuestion();
}
function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.quesstion;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button); 
        if(answer.correct){
            button.dataset.correct = answer.correct
        }
        button.addEventListener("click", selectAnswer);       

    });
}
function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }

}
function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}
function showScore(){
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}


function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
    showQuestion();
}else{
    showScore();
}

}
nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
     
});
 
startQuiz();