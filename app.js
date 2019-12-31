// first we are declaring both scores as zero
let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const Ukraine_div = document.getElementById("U");
const France_div = document.getElementById("F");
const Spain_div = document.getElementById("S");

// declaring variables U F and S to represent 3 countries later on
function getComputerChoice(){
    const choices = ['U','F','S'];
    const randonNumber=Math.floor(Math.random()*3);
    return choices[randonNumber];
}

function convertToWord(letter){
    if (letter=== "U") return "Ukraine";
    if (letter=== "F") return "France";
    return "Spain";
}

//adding first function that will add (++) to user's score and he wins
function win(userChoice, computerChoice){
    userScore++;
    userScore_span.innerHTML=userScore;
    computerScore_span.innerHTML=computerScore;
    //const
   // result_p.innerHTML=convertToWord(userChoice) + "(user) beats " + convertToWord(computerChoice) + "(computer). You win!";
    const smalluserword="user".fontsize(3);
    const smallcomputerword="comp".fontsize(3);
    result_p.innerHTML=`${convertToWord(userChoice)}${smalluserword} beats ${convertToWord(computerChoice)}${smallcomputerword}. <br> <br> You win!`;
}

// second function adds to computer score so it wins
function lose(userChoice, computerChoice){
    computerScore++;
    userScore_span.innerHTML=userScore;
    computerScore_span.innerHTML=computerScore;
    //const
   // result_p.innerHTML=convertToWord(userChoice) + "(user) loses to " + convertToWord(computerChoice) + "(computer). You lost!";
    const smalluserword="user".fontsize(3);
    const smallcomputerword="comp".fontsize(3);
    result_p.innerHTML=`${convertToWord(userChoice)}${smalluserword} loses to  ${convertToWord(computerChoice)}${smallcomputerword}. <br> <br> You lost!`;
}

// function responsible for  a tie. both players chose same country
function draw(userChoice, computerChoice){
    //result_p.innerHTML=convertToWord(userChoice) + "(user) equals " + convertToWord(computerChoice) + "(computer). Its a draw!";
    const smalluserword="user".fontsize(3);
    const smallcomputerword="comp".fontsize(3);
    result_p.innerHTML=`${convertToWord(userChoice)}${smalluserword} equals ${convertToWord(computerChoice)}${smallcomputerword}. <br> <br> It's a draw!`;
}

//here we are adding main logic such as France beats Ukraine since it is larger
//and if both players chose same county -its a tie
function game(userChoice){
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice){
        case "FU":
        case "FS":
        case "US":
            win(userChoice, computerChoice);
            break;
        case "UF":
        case "SF":
        case "SU":
            lose(userChoice, computerChoice);
            break;
        case "FF":
        case "UU":
        case "SS":
            draw(userChoice, computerChoice);
            break;
    }
}



function main(){
   

    Ukraine_div.addEventListener('click', function(){
        game("U");
    })
    France_div.addEventListener('click', function(){
        game("F");
    })
    Spain_div.addEventListener('click', function(){
        game("S");
    })
   
}

main();
