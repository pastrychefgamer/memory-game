console.log("Up and running!");
const cards = ["queen", "queen", "king", "king"];
const cardsInPlay = [];

var checkForMatch = function () {
    if (cardsInPlay[0] === cardsInPlay[1]) {
        console.log("You found a match!");
      } else {
        console.log("Sorry, try again.");
      }
}
/*const cardOne = cards[0];
cardsInPlay.push['cardOne']
console.log("User flipped queen");
const cardTwo = cards[2];
cardsInPlay.push['cardTwo']
console.log("User flipped king");*/

var flipCard = function (cardId) {

/*if (cardsInPlay.length === 2) {
    result = "match";
  } else if (cardsInPlay[0] === cardsInPlay[2]) {
    result = "you found a match";
    alert("You found a match!");
  } else (cardsInPlay[0] !== cardsInPlay[2]);{
    result = "sorry, try again";
    alert("Sorry, try again.");
  }*/
checkForMatch();
  console.log("User flipped" + cards[cardId]);
  cards[cardId].push[cardsInPlay];
};
flipCard(2);
flipCard(0);