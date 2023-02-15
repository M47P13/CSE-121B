/* ------------------------------------------------------
Here is a Blackjack game where your objective is to 
go against a computer that will be seeing who can get closer 
to the number 21.
------------------------------------------------------ */
//defines the deck, players hand, computers hand, and scores
let deck = [];
let playerHand = [];
let dealerHand = [];
let playerScore = 0;
let dealerScore = 0;
let gameOver = false;

//will shuffle the deck of cards and swap randomly
  function shuffleDeck() {
    deck = [];
    let suits = ["Hearts", "Diamonds", "Clubs", "Spades"];
    let values = ["Ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King"];
    for (let suit of suits) {
      for (let value of values) {
        deck.push(value + " of " + suit);
      }
    }
    for (let i = 0; i < deck.length; i++) {
      let randomIndex = Math.floor(Math.random() * deck.length);
      let temp = deck[i];
      deck[i] = deck[randomIndex];
      deck[randomIndex] = temp;
    }
  }

//will deal card to player then computer and repeat
  function dealCards() {
    playerHand.push(deck.shift());
    dealerHand.push(deck.shift());
    playerHand.push(deck.shift());
    dealerHand.push(deck.shift());
  }

//calculating score as we go aces could as 1 or 11 
//face cards are 10 or above
  function calculateHandScore(hand) {
    let score = 0;
    let hasAce = false;
    for (let card of hand) {
      let value = card.split(" ")[0];
      if (value === "Ace") {
        hasAce = true;
        score += 11;
      } else if (["King", "Queen", "Jack"].includes(value)) {
        score += 10;
      } else {
        score += parseInt(value);
      }
    }
    if (hasAce && score > 21) {
      score -= 10;
    }
    return score;
  }
  
//if player has black jack they win 
  function checkForBlackjack(hand) {
    return (hand.includes("Ace of Hearts") || hand.includes("Ace of Diamonds") || hand.includes("Ace of Clubs") || hand.includes("Ace of Spades"))
        && (hand.includes("10 of Hearts") || hand.includes("10 of Diamonds") || hand.includes("10 of Clubs") || hand.includes("10 of Spades"));
  }
//if score is over 21 then player or computer loses
  function checkForBust(score) {
    return score > 21;
  }
  
//hit to add more cards to initial draw.
  function hit() {
    if (!gameOver && playerScore < 21) {
      playerHand


//references: 
//https://math.hws.edu/eck/cs271/js-work/Blackjack.html
//https://codepen.io/eqmvii/pen/GmRmZa
//https://gist.github.com/teruuuuuu/1c1b44a4cb18b4e91c2b
//https://codesandbox.io/s/javascript-beginner-tutorial-blackjack-epegw?from-embed