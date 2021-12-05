document.addEventListener("DOMContentLoaded", () => {
  //card details

  const cardArray = [
    { name: "fries", image: "images/fries.png" },
    { name: "fries", image: "images/fries.png" },
    { name: "cheeseburger", image: "images/cheeseburger.png" },
    { name: "cheeseburger", image: "images/cheeseburger.png" },
    { name: "hotdog", image: "images/hotdog.png" },
    { name: "hotdog", image: "images/hotdog.png" },
    { name: "ice-cream", image: "images/ice-cream.png" },
    { name: "ice-cream", image: "images/ice-cream.png" },
    { name: "milkshake", image: "images/milkshake.png" },
    { name: "milkshake", image: "images/milkshake.png" },
    { name: "pizza", image: "images/pizza.png" },
    { name: "pizza", image: "images/pizza.png" },
  ];

  cardArray.sort(() => 0.5 - Math.random());

  const grid = document.querySelector(".grid");
  const score = document.querySelector("#result");
  var cardChosen = [];
  var cardChosenId = [];
  var winArray = [];

  //create board

  function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
      var card = document.createElement("img");
      card.setAttribute("src", "images/blank.png");
      card.setAttribute("data-id", i);
      card.addEventListener("click", fliptile);
      grid.appendChild(card);
    }
  }

  // check matches
  function checkMatches() {
    const cards = document.querySelectorAll("img");
    const first = cardChosenId[0];
    const second = cardChosenId[1];
    if (first === second) {
      cards[first].setAttribute("src", "images/blank.png");
    } else if (cardChosen[0] === cardChosen[1]) {
      alert("YOU FOUND A MATCH");
      cards[first].setAttribute("src", "images/white.png");
      cards[first].removeEventListener("click", fliptile);
      cards[second].setAttribute("src", "images/white.png");
      cards[second].removeEventListener("click", fliptile);
      winArray.push(cardChosen);
    } else {
      //   console.log(first);
      //   console.log(cards);
      cards[first].setAttribute("src", "images/blank.png");
      cards[second].setAttribute("src", "images/blank.png");
      alert("Sorry try again !");
    }
    // console.log(winArray);
    // console.log(cardChosen);
    cardChosen = [];
    cardChosenId = [];

    score.textContent = winArray.length;
    if (winArray.length === cardArray.length / 2) {
      score.textContent = "Congratulations you got them all !!";
    }
  }

  // flip tile

  function fliptile() {
    var cardId = this.getAttribute("data-id");
    cardChosen.push(cardArray[cardId].name);
    cardChosenId.push(cardId);
    this.setAttribute("src", cardArray[cardId].image);

    if (cardChosen.length === 2) {
      setTimeout(checkMatches, 500);
    }
  }

  createBoard();
});
