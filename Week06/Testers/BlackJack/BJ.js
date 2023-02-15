/* ------------------------------------------------------
Here is a Blackjack game where your objective is to 
go against a computer/dealer that will be seeing who can get closer 
to the number 21.
------------------------------------------------------ */

//Arrays to go over the suites and values of each card
var suits = ["Hearts", "Clubs", "Diamonds", "Spades"];
let values = [
  "Ace",
  "King",
  "Queen",
  "Jack",
  "Ten",
  "Nine",
  "Eight",
  "Seven",
  "Six",
  "Five",
  "Four",
  "Three",
  "Two"
];

//Display Variables
var textArea = document.getElementById("text-area");
var newGameButton = document.getElementById("new-game-button");
var hitButton = document.getElementById("hit-button");
var stayButton = document.getElementById("stay-button");

//Game Variables
var gamesStarted = false;
var gameOver = false;
var playerWon = false;
var dealerCards = [];
var playerCards = [];
var dealerScore = 0;
var playerScore = 0;
var deck = [];

//hide buttons until game starts
hitButton.style.display = "none";
stayButton.style.display = "none";

//beginning of a new game, ending of game etc. 
//Set game status
newGameButton.addEventListener("click", function() 
{
  gamesStarted = true;
  gameOver = false;
  playerWon = false;

  deck = createDeck();
  shuffleDeck(deck);
  dealerCards = [getNextCard(), getNextCard()];
  playerCards = [getNextCard(), getNextCard()];

  newGameButton.style.display = "none";
  hitButton.style.display = "inline";
  stayButton.style.display = "inline";
  showStatus();
});

//eventlistener looks for the click function in 
//order for the game to begin


hitButton.addEventListener("click", function() 
{
  playerCards.push(getNextCard());
  //to check if the game is over after hit
  checkForEndOfGame();
  //updates the total
  showStatus();
});

//Same thing as before with EventListener
stayButton.addEventListener("click", function() 
{
  //checks for a game over
  gameOver = true;
  //checks for game again and then displays total
  checkForEndOfGame();
  showStatus();
});

//creates the deck/ shuffles to go over the suits and 
//values to 
function createDeck() 
{
  var deck = [];
  for (var suitIdx = 0; suitIdx < suits.length; suitIdx++) {
    for (var valueIdx = 0; valueIdx < values.length; valueIdx++) {
      var card = {
        suit: suits[suitIdx],
        value: values[valueIdx]
      };
      deck.push(card);
    }
  }
  return deck;
}

//To see if player has begun again and will restart/ start game 
function showStatus() 
{
  if (!gamesStarted) 
  {
    //display message to user
    textArea.innerText = "Welcome to BlackJack";
    return;
  }
//arrays to rep cards in array
  var dealerCardString = "";
  for (var i = 0; i < dealerCards.length; i++) 
  {
    dealerCardString += getCardString(dealerCards[i]) + "\n";
  }

  var playerCardString = "";
  for (var i = 0; i < playerCards.length; i++) 
  {
    playerCardString += getCardString(playerCards[i]) + "\n";
  }
//updates the score tells how to display score
  updateScores();
  textArea.innerText =
    "Dealer has: \n " +
    dealerCardString +
    "(score:" +
    dealerScore +
    ")\n\n" +
    "Player has: \n " +
    playerCardString +
    "(score:" +
    playerScore +
    ")\n\n";

//when total goes over 21 tells user or computer who won
  if (gameOver) 
  {
    if (playerWon) 
    {
      textArea.innerText += "You Win!";
    }
    else 
    {
      textArea.innerText += "Dealer Wins!";
    }
    newGameButton.style.display = "inline";
    hitButton.style.display = "none";
    stayButton.style.display = "none";
  }
}

//shuffle / will randomize the draw of the cards
function shuffleDeck(deck) {
  for (var i = 0; i < deck.length; i++) 
  {
    var swapIdx = Math.trunc(Math.random() * deck.length);
    var tmp = deck[swapIdx];
    deck[swapIdx] = deck[i];
    deck[i] = tmp;
  }
}

//grabs the score of the card and adds 
//displays for user to see
function getCardString(card) 
{
  return card.value + " of " + card.suit;
}

function getNextCard() 
{
  return deck.shift();
}

//goes over the value of each card
function getCardNumericValue(card) 
{
  switch (card.value) 
  {
    case "Ace":
      return 1;
    case "Two":
      return 2;
    case "Three":
      return 3;
    case "Four":
      return 4;
    case "Five":
      return 5;
    case "Six":
      return 6;
    case "Seven":
      return 7;
    case "Eight":
      return 8;
    case "Nine":
      return 9;
    default:
      return 10;
  }
}

//will take array data from earlier and will
//return the score of player of com
//will keep track of cards since ace can be either 1 or 11 points
function getScore(cardArray) {
  var score = 0;
  var hasAce = false;
  for (var i = 0; i < cardArray.length; i++) 
  {
    var card = cardArray[i];
    score += getCardNumericValue(card);
    if (card.value === "Ace") 
    {
      hasAce = true;
    }
  }
  if (hasAce && score + 10 <= 21) 
  {
    return score + 10;
  }
  return score;
}

//will update the scores for player and dealer 
//for overall total
function updateScores() 
{
  dealerScore = getScore(dealerCards);
  playerScore = getScore(playerCards);
}

//looking for the end of game aka over 21 for
//either the computer or dealer
function checkForEndOfGame() 
{
  updateScores();
  if (gameOver) 
  {
    //var the dealer take cards
    while (
      dealerScore < playerScore &&
      playerScore <= 21 &&
      dealerScore <= 21
    ) {
      dealerCards.push(getNextCard());
      updateScores();
    }
  }

  if (playerScore > 21) 
  {
    playerWon = false;
    gameOver = true;
  }
   else if (dealerScore > 21) 
  {
    playerWon = true;
    gameOver = true;
  } else if (gameOver) 
  {
    if (playerScore > dealerScore) 
    {
      playerWon = true;
    } else 
    {
      playerWon = false;
    }
  }
}
