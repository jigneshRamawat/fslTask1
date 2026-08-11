
import { questions } from './Api.js';



const questionsElemetn =  document.querySelector(".question");
const optionElemetn =  document.querySelector(".option");
const nextbtnElement  =  document.querySelector(".nextbtn");

let  currentIndex = 0 ;
let score  = 0;

function QuizStart(){
     currentIndex = 0 ;
    score = 0 ;
    nextbtnElement.innerHTML = "Next"
    questions.sort(() => Math.random()* questions.length);
    ShowQustion();
}

function ShowQustion(){
    resetState()
    let  currentQuestion =  questions[ currentIndex];
    let  currentQusetionNumber =  currentIndex + 1;
    questionsElemetn.innerHTML =  currentQusetionNumber + ". " +   currentQuestion.q;


      currentQuestion.answers.forEach((ans)=>{
        const bt = document.createElement("button");
        bt.innerHTML = ans.text;
        bt.classList.add("btn");
        optionElemetn.appendChild(bt);

        if(ans.correct){
            bt.dataset.correct = ans.correct;
        }
        bt.addEventListener("click", selectAnsware)
    })
}



function resetState(){
    nextbtnElement.style.display = "none";
    while(optionElemetn.firstChild){
        optionElemetn.removeChild(optionElemetn.firstChild);
    }

}

function selectAnsware(e){
    const selcetedbtn = e.target;
    const right = selcetedbtn.dataset.correct === "true";

if (right) {
        selcetedbtn.classList.add("correct");
        score++
    } else {
        selcetedbtn.classList.add("Wrong");
    }

    Array.from(optionElemetn.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct")
        }
        button.disabled = true;
        button.style.cursor = "not-allowed";
    });

    nextbtnElement.style.display = "block";
}

function showScore(){
    resetState();
    questionsElemetn.innerHTML = `Your Score is : ${score} out od ${questions.length}`;
    nextbtnElement.innerHTML = "Play Again"
    nextbtnElement.style.display = "block"

}

function handleNext(){
     currentIndex++;
    if( currentIndex < questions.length){
        ShowQustion();
    }
    else{
        showScore();
    }
}

nextbtnElement.addEventListener("click", ()=>{
    if( currentIndex < questions.length){
        handleNext();
    }else{
        QuizStart();
    }
})

QuizStart();