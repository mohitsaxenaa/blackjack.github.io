let cards = []
let sum = 0
let hasBlackjack = false
let isAlive = false
let message = ""


let messageEL = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")


let player = {
    name: "Mohit",
    chips: 145
}


let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": ₹" + player.chips


function getRandomCard(){

    let randomNumer = Math.floor( Math.random()*13 ) + 1
    if (randomNumer > 10) {
        return 10
    } else if (randomNumer === 1) {
        return 11
    } else {
        return randomNumer
    }
}
function startGame(){
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
}
function renderGame(){

    cardsEl.textContent = "Cards: "
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }
    sumEl.textContent = "Sum: " + sum

    if(sum<21){
        message = "Do you want to draw a new card!"
    }
    else if(sum=== 21){
        message = "Yipee you got a BlackJack"
        hasBlackjack = true
    }
    else{
        message = "You're out of the game"
        isAlive = false
        
    }
    messageEL.textContent = message
  
}

function newCard() {
    if(isAlive===true && hasBlackjack===false){

        let card = getRandomCard()
        sum += card
        cards.push(card)
        console.log(cards)
        renderGame()
    }
    
   
}

