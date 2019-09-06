let inputContainer = document.getElementById("input-container")
let playerNumber = document.getElementById("player-number")
let gameField = document.getElementById("game-field")
let turn = 1


const gameStart = () => {
    document.location.reload()
    inputContainer.style.display = "block";
    playerNumber.value = ""
    
}



rollBtn.addEventListener("click", roll)

   

   
    
}

}
else {
playerNumber.value = "Please type a number"
}
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