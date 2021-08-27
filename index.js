let firstCard = 6
let secondCard = 9
let cards = [firstCard, secondCard]
let sum = firstCard + secondCard
let hasBlackjack = false
let isAlive = true
let message = ""
let sumEl = document.getElementById("sum-el")
let messageEl = document.getElementById("message-el")
let cardEl = document.getElementById("cards-el")

function startGame() {
    renderGame()
}
function renderGame() {
    sumEl.textContent = "Sum: " + sum
    cardEl.textContent = "Cards: " + cards[0] + " " + cards[1]
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
    let card = 6
    
    sum += card
    cards.push(card)
    console.log(cards)
    renderGame()

}