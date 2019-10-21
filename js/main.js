console.log("Up and running!");
const myCards = ["queen", "queen", "king", "king"];
const cardsInPlay = [];
const cardOne = myCards[0];
cardsInPlay.push['cardOne']
console.log("User flipped queen");
const cardTwo = myCards[2];
cardsInPlay.push['cardTwo']
console.log("User flipped king");

if (cardsInPlay.length === 2) {
    result = "match";
  } else if (cardsInPlay[0] === cardsInPlay[2]) {
    result = "you found a match";
    alert("You found a match!");
  } else (cardsInPlay[0] !== cardsInPlay[2]);{
    result = "sorry, try again";
    alert("Sorry, try again.");
  }