let inputContainer = document.getElementById("input-container")
let playerNumber = document.getElementById("player-number")
let gameField = document.getElementById("game-field")
let players = document.getElementsByClassName("player")
let rollBtn = document.getElementsByClassName("roll-button")
let turn = 1


const gameStart = () => {
    document.location.reload()
    inputContainer.style.display = "block";
    playerNumber.value = ""
    
}

const submit = () => {
    if(playerNumber.value > 0 && playerNumber.value <= 4){

        
    inputContainer.style.display = "none";

    for(i=1; i <= playerNumber.value; i++)
    {
        // document.getElementById(`player-${i}`).style.display = "block";
        document.getElementById(`player-${i}`).setAttribute("class", "playing") 
    }


    } else if(playerNumber.value > 4){playerNumber.value = "Number less than 5"}
    
    else {playerNumber.value = "Please type a number"}
}

const roll = () => {

            
    let random = Math.floor(Math.random()*6)
    let images = [`dice1.png`, `dice2.png`,`dice3.png`, `dice4.png`,`dice5.png`, `dice6.png` ]
    let diceImage = document.getElementsByTagName("img")
    diceImage.src  = `./img/dice${image[random]}.png`
    console.log("is it working")
    console.log(random)
}




window.addEventListener("keypress", () => {
if(event.which == 13){
submit()
}
})

window.addEventListener("keypress", () => {
if(event.which == 32){
gameStart ()
console.log("May the best gambler win!")
}
})

playerNumber.addEventListener("click", () => {
playerNumber.value = ""
})

// rollBtn.addEventListener("click", roll)