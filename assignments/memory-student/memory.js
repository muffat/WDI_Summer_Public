//Global Variables

//Time that increments in the game
var timerId = 0,
    time = 0;

//arrays with letters in them.
var lettersSmall  = ['A', 'A', 'B', 'B', 'C', 'C', 'D', 'D', 'E', 'E'],
    lettersMedium = ['A', 'A', 'B', 'B', 'C', 'C', 'D', 'D', 'E', 'E',
                     'F', 'F', 'G', 'G', 'H', 'H', 'I', 'I', 'J', 'J'],
    lettersLarge  = ['A', 'A', 'B', 'B', 'C', 'C', 'D', 'D', 'E', 'E',
                     'F', 'F', 'G', 'G', 'H', 'H', 'I', 'I', 'J', 'J',
                     'K', 'K', 'L', 'L', 'M', 'M', 'N', 'N', 'O', 'O',
                     'P', 'P', 'Q', 'Q', 'R', 'R', 'S', 'S', 'T', 'T'];

//array of letters. will change based on size of game.
var letters;

//last card/letter you clicked on. comes from the letter divs.
var lastId = '',
    lastCard = '';

//current number of cards flipped over and something that will later return true or false for if numberOfFlippedCards = 2
// var numberOfFlippedCards = 0;
// var cardStatus;
var numberOfClicks = 0;

//current card/letter you clicked on. comes from the letter divs.
var currentId = "";
var currentCard = "";

var choice;

//Code In Here gets executed once code is ready. ie hovering, clicking events//
$(function() {
  $("#small").click(function() {
    choice = "small";
    startGame(choice);
    cardClick();
    hovering();
  });
  $("#medium").click(function() {
    choice = "medium";
    startGame(choice);
    cardClick();
    hovering();
  });
  $("#large").click(function() {
    choice = "large";
    startGame(choice);
    cardClick();
    hovering();
  });
});

// Initializes the game and creates the board
function startGame(choice) {
  // switch statement here to figure out which array of letters to use.
  if (choice === "small") {
    letters = lettersSmall;
  } else if (choice === "medium") {
    letters = lettersMedium;
  } else if (choice === "large") {
    letters = lettersLarge;
  }

  // shuffles letters in array
  letters.sort(function() {
    return 0.5 - Math.random();
  });
  // creates div elements, assigns class and id attributes, and appends to a parent node
  for (var i = 0; i < letters.length; i++) {
    var newDiv = $("<div>").attr("class", "column");
    newDiv.attr("id", i);
    $("#game").append(newDiv);
  }
}

// Flips a card and checks for a match
function cardClick() {
  $(".column").click(function() {
    // numberOfFlippedCards++;
    // cardStatus = (numberOfFlippedCards === 2);
    numberOfClicks++;

    if (numberOfClicks < 2) {
      // when there are fewer than 2 cards in play
      // case "< 2":
        lastCard = $(this);
        lastId = lastCard.attr("id");
        lastCard.text(letters[lastId]);
        console.log("FIRST CARD id: " + lastId + " letter: " + lastCard.text());
      // break;
      // when there are 2 cards in play
    } else if (numberOfClicks === 2) {
      // case "2":
        currentCard = $(this);
        currentId = currentCard.attr("id");
        currentCard.text(letters[currentId]);
        console.log("SECOND CARD id: " + currentId + " letter: " + currentCard.text());
        if ((currentCard.text() === lastCard.text()) && (currentId !== lastId)) {
          console.log("you got a match!");
          found();
          var win = checkWon();
          if (win === true) {
            won();
            alert("You won!");
          }
        }
        // } else {
        //   resetCards();
        //   console.log("resetting");
        // }
        // numberOfFlippedCards = 0;
      // break;
    } else if (numberOfClicks === 3) {
      // case "3":
        resetCards();
        console.log("resetting");
        numberOfClicks = 0;
      // break;
    }
  });
}

//resets lastCard, lastCard.text(), lastCardId, currentCard, currentCard.text(), currentCardId
function resetCards() {
  lastCard.text("");
  lastCard = "";
  lastId = "";
  currentCard.text("");
  currentCard = "";
  currentId = "";
}

//Add found class to cards.
function found() {
  lastCard.addClass("found");
  currentCard.addClass("found");
}

//Add hover class to cards.
function hovering() {
  $(".column").hover(function() {
    $(this).toggleClass("hover");
  });
}

//checks if player won the game
function checkWon() {
  return ($(".found").length === letters.length);
}

//Add won class to cards.
function won() {
  $(".found").each(function() {
    $(this).addClass("won");
  });
}

//Start the timer
function startTime() {

}

//Increment the timer and display the new time
function updateTime() {

}