let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let sumEl = document.getElementById("sum-el")
let messageEl = document.getElementById("message-el")
let cardEl = document.getElementById("cards-el")

function getRandomCard(){
    let randomNumer = Math.floor( Math.random() * 13 ) + 1

    if (randomNumer > 10) {
        return 10
    } else if (randomNumer === 1) {
        return 11
    } else {
        return randomNumer
    }
} 

function startGame() {
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
    renderGame()
}
function renderGame() {
    cardEl.textContent = "Cards: "
    
    for (let i = 0; i < cards.length; i++) {
        cardEl.textContent += cards[i] + " "
    }
    sumEl.textContent = "Sum: " + sum
  
    if (sum <= 20) {
        message = "Do you want to draw a new card? "
    } else if (sum === 21) {
        message = " You've got Blackjack! "
        hasBlackjack =true
    } else  {
        message = "You're out of the game! "
        isAlive = false
    }
    messageEl.textContent = message

}function newCard() {
    let card =  getRandomCard()
    
    sum += card
    cards.push(card)
    console.log(cards)
    renderGame()

}