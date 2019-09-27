//storing various elements that I will need in variables for ease of manipulation
let inputContainer = document.getElementById("input-container")
let playerNumber = document.getElementById("player-number")
let gameField = document.getElementById("game-field")
let players = document.getElementsByClassName("player")
let turn = 1
let rollBtn = document.getElementById(`roll-${turn}`)

// let playerScore = document.getElementById(`score-${turn}`)
// let playerScore2 = document.getElementById(`score-2`)
// let playerScore3 = document.getElementById(`score-3`)
// let playerScore4 = document.getElementById(`score-4`)





//this function reloads the page so that all players default to their hidden state and the input becomes visible
const gameStart = () => {
    document.location.reload()
    inputContainer.style.display = "block";
    playerNumber.value = ""
    
}

//attaching the game start function to the space bar for convenience
window.addEventListener("keypress", () => {
if(event.which == 32){
gameStart ()
console.log("May the best gambler win!")
}
})

//This makes the default text inside the input bar disappear for convenience upon clicking.
playerNumber.addEventListener("click", () => {
    playerNumber.value = ""
    })

//function for the submit button which makes the input disappear once submitted and makes the inputted number of players appear in the game field
const submit = () => {
    if(playerNumber.value > 0 && playerNumber.value <= 4){

        
    inputContainer.style.display = "none";

    for(i=1; i <= playerNumber.value; i++)
    {
 
        document.getElementById(`player-${i}`).setAttribute("class", "playing")
        rollBtn.disabled = false;
        
        
    }


    } else if(playerNumber.value > 4){playerNumber.value = "Number less than 5"}
    
    else {playerNumber.value = "Please type a number"}
}

//adding event to call submit function when enter key is pressed for convenience
window.addEventListener("keypress", () => {
if(event.which == 13){
submit()
}
})

//the function for the roll button which puts the images in an array which are called using a random number generator inside a for loop

const roll = () => {

    
    let random = Math.floor(Math.random()*6)
    let images = [`dice1.png`, `dice2.png`,`dice3.png`, `dice4.png`,`dice5.png`, `dice6.png` ]
    // let playerScore = [document.getElementById(`score-1`), document.getElementById(`score-2`), document.getElementById(`score-3`), document.getElementById(`score-4`)]
   
    for(i=1; i <= playerNumber.value; i++){
        if(turn <= playerNumber.value){
        let diceImage = document.getElementById(`player-${turn}-die`)
        diceImage.src  = `./img/${images[random]}`
        
        }else {
            turn = 1
            let diceImage = document.getElementById(`player-${turn}-die`)
        diceImage.src  = `./img/${images[random]}`
   
    
        }
    }
    // playerScore[turn].innerHTML = random+1 + Number(playerScore[turn].innerHTML)
    if(turn > playerNumber.value){
        turn = 1
        let playerScore = document.getElementById(`score-${turn}`)
        playerScore.innerHTML =   random+1 + Number(playerScore.innerHTML)
        console.log(playerScore.innerHTML)
        turn = turn + 1
       
        
       
        enableBtn()
        console.log(turn)
    } else {
        let playerScore = document.getElementById(`score-${turn}`)
        playerScore.innerHTML =  random+1+ Number(playerScore.innerHTML)
        console.log(playerScore)
        turn = turn + 1
        
        
       
        enableBtn()
        console.log(turn)
    }
   
}

//this enables the player's roll button who's turn it is and disables the previous player's button.
const enableBtn = () => {
    if(turn <= playerNumber.value){
    document.getElementById(`roll-${turn}`).disabled = false;
    document.getElementById(`roll-${turn-1}`).disabled = true;
    } else {
        document.getElementById(`roll-1`).disabled = false;
    document.getElementById(`roll-${playerNumber.value}`).disabled = true;
    }

}

// const score = () => {
//       playerScore.innerHTML = random+1 +Number(playerScore.innerHTML)
// }







// // rollBtn.addEventListener("click", roll)