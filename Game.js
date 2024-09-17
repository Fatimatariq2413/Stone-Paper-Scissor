let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userScorePara=document.querySelector("#user-score");
const compScorePara=document.querySelector("#comp-score");
const genCompChoice=()=>{
	const options=["Rock","Paper","Scissor"];
	const randIdx=Math.floor(Math.random()*3);
	return options[randIdx]
	//rock,paper,scissor
};
const drawGame=() => {
	console.log("Game was draw");
	msg.innerText="Game was Draw, Play Again.";
	msg.style.backgroundColor="rebeccapurple";
};

const showWinner=(userWin, userChoice, compChoice)=>{
	if(userWin){
		userScore++;
		userScorePara.innerText=userScore;
		msg.innerText=`You Win,  Your ${userChoice} beats ${compChoice}`;
		msg.style.backgroundColor="green";
	}else{
		compScore++;
		compScorePara.innerText=compScore;
		console.log("You lose, Opps");
		msg.innerText=`You Lose, ${compChoice} beats Your ${userChoice}`;
		msg.style.backgroundColor="red";
	}

}
const playGame=(userChoice)=>{
	console.log("user Choice=",userChoice);
	//Generate Computer Choice
	const compChoice=genCompChoice();
	console.log("comp choice=",compChoice);

	if(compChoice===userChoice){
		//Draw Game
	    drawGame();
	} else{
		let userWin=true;

		if (userChoice==="Rock"){
			//scissors,paper
			userWin=compChoice==="Paper"? false:true;
		}else if(userChoice==="Paper"){
			//rock,scissors
			userWin=compChoice==="Scissors"? false:true;
		}else{
			//rock,paper
			userWin=compChoice==="Rock"?false:true;

		}
		showWinner(userWin, userChoice, compChoice);
	}
};

choices.forEach((choice)=>{
	choice.addEventListener("click",()=> {
		const userChoice=choice.getAttribute("id")
		playGame(userChoice);

	});
});
let Fatima="Welcome Fatima";
console.log(Fatima);


