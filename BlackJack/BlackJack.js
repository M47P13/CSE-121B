// Define the deck of cards, players hand, dealers hand and score
const suits = ["Hearts", "Clubs", "Diamonds", "Spades"];
const values = ["Ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King"];
const deck = [];
for (let suit in suits) {
  for (let value in values) {
    deck.push({value: values[value], suit: suits[suit]});
  }
}

// Shuffle the deck swapping cards in decks
function shuffleDeck(deck) {
  for (let i = deck.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [deck[i], deck[j]] = [deck[j], deck[i]];
  }
}

// Deal a card to a player then computer and repeat
function dealCard(deck, hand) {
  hand.push(deck.pop());
}

// Calculate the value of a hand
function calculateHandValue(hand) {
  let value = 0;
  let numAces = 0;
  for (let i = 0; i < hand.length; i++) {
    const cardValue = hand[i].value;
    if (cardValue === "Ace") {
      numAces++;
      value += 11;
    } else if (cardValue === "King" || cardValue === "Queen" || cardValue === "Jack") {
      value += 10;
    } else {
      value += parseInt(cardValue);
    }
  }
  while (value > 21 && numAces > 0) {
    value -= 10;
    numAces--;
  }
  return value;
}

// Check if a player has gone bust
function hasBust(hand) {
  return calculateHandValue(hand) > 21;
}

// Handle the player's turn
function playerTurn(deck, playerHand, dealerHand) {
  while (true) {
    console.log("Player hand: ");
    console.log(playerHand);
    const hitOrStand = prompt("Do you want to hit or stand? (h/s)");
    if (hitOrStand === "h") {
      dealCard(deck, playerHand);
      if (hasBust(playerHand)) {
        console.log("Bust! You lose.");
        return false;
      }
    } else if
