console.log("Up and running!");
var createBoard = function () {
    for (var i = 0; i < cardsInPlay.length; i++){};
var cardElement = setAttribute("images/back.png");
var newListItem = document.createElement('img');
var newListItem = document.createElement('img');
var newListItem = document.createElement('img');
var newListItem = document.createElement('img');
};

const cards = [
    {
        rank: "queen",
        suit: "hearts",
        cardImage: "images/queen-of-hearts.png"
    },
    {
        rank: "queen",
        suit: "diamonds",
        cardImage: "images/queen-of-diamonds.png"
    },
    {
        rank: "king",
        suit: "hearts",
        cardImage: "images/king-of-hearts.png"
    },
    {
        rank: "king",
        suit: "diamonds",
        cardImage: "images/king-of-diamonds.png"
    }
];



const cardsInPlay = [];

var checkForMatch = function () {
    if (cardsInPlay[0] === cardsInPlay[1]) {
        console.log("You found a match!");
      } else {
        console.log("Sorry, try again.");
      }
};
/*const cardOne = cards[0];
cardsInPlay.push['cardOne']
console.log("User flipped queen");
const cardTwo = cards[2];
cardsInPlay.push['cardTwo']
console.log("User flipped king");*/

var flipCard = function (cardId) {
    /* if (cardsInPlay.length === 2) {
        result = "match";
    } else if (cardsInPlay[0] === cardsInPlay[2]) {
        result = "you found a match";
        alert("You found a match!");
    } else (cardsInPlay[0] !== cardsInPlay[2]);{
        result = "sorry, try again";
        alert("Sorry, try again.");
    } */
    checkForMatch();
    console.log("User flipped" + cards[cardId].rank);
    cardsInPlay.push(cards[cardId].rank);
    console.log("User flipped" + cards[cardId].cardImage);  
    console.log("User flipped" + cards[cardId].suit); 
};
flipCard(2);
flipCard(0);