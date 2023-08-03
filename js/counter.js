////////////////////////////////////////////////////////////////////////////////
// Imports

////////////////////////////////////////////////////////////////////////////////
// Config

var startingLifeTotal = 40;

var turnCounter = 0;
var turnCounterElement = document.querySelector('.turnCounter');

var lifeTracker = startingLifeTotal;
var lifeTrackerElement = document.querySelector('.lifeTracker');
//var lifeDeltaBefore = lifeTracker; At start, and after 5 seconds set to current lifeTracker Value.
//var lifeDelta = 0; // Show life delta after each press. 5s timer/fadeout, then reset to 0
//var lifeDeltaTimeout = 0;// Upon life increase of

////////////////////////////////////////////////////////////////////////////////
// Keycodes

// Life Tracker
var keyCodes_life_increase = [38,87,107]; // Keys: Up, W, Numpad+
var keyCodes_life_decrease = [40,83,109]; // Keys: Down, S, Numpad-

// Turn Counter
var keyCodes_turn_increase = [32, 13];// Keys: Space, NumpadEnter
var keyCodes_turn_decrease = [];

// Restart/New Game
var keyCodes_restart_game = [82]; // Keys: R

// Cancel for confirm modal
var keyCodes_escape = [27];

// Events
var keyCodes_create_event = [];
var keyCodes_dismiss_event = [68]; // Keys: D

// Unused keyCodes
// (88,X) (37,Left) (39,Right) (65,A) (68,D) 

////////////////////////////////////////////////////////////////////////////////
// Functions

var changeLifeTracker = function(amount) {
  // Basic Life Tracker Stuff
  lifeTracker += amount;
  lifeTracker = Math.max(lifeTracker, 0)
  lifeTrackerElement.innerHTML = lifeTracker;
  // Delta Stuff
  // TODO
}

var changeTurnCounter = function(amount) {
  // Basic Turn Counter Stuff
  turnCounter += amount;
  turnCounter = Math.max(turnCounter, 0)
  turnCounterElement.innerHTML = turnCounter;
}

var openConfirmModal = function () {
  confirmModal = document.querySelector('.confirmRestartModal')
  confirmModal.classList.add('is-active')
}

var closeConfirmModal = function () {
  confirmModal = document.querySelector('.confirmRestartModal')
  confirmModal.classList.remove('is-active')
}

var confirmNewGame = function(bool) {
  if(bool){resetCounters();}
  closeConfirmModal();
}

var resetCounters = function() {
  // Reset Counters
  turnCounter = 0;
  lifeTracker = startingLifeTotal;
  // Update HTML Elements
  lifeTrackerElement.innerHTML = lifeTracker;
  turnCounterElement.innerHTML = turnCounter;
}

var newGame = function() {
  // Open Modal
  newGameMenuModal = document.querySelector('.newGameMenuModal');
  newGameMenuModal.classList.add('is-active');

  //Get datalist element
  deckNameDataList = document.querySelector('.deckNameDataList');

  //Remove any existing data
  deckNameDataList.replaceChildren()
    //while (deckNameDataList.firstChild) {
  //  deckNameDataList.firstChild.remove()
  //}

  // Get stored deck names - Placeholder until we have storage sorted out
  deckNameOptions = ["Food and Fellowship", "Riders of Rohan", "Elven Council", "Hosts of Mordor"];
  
  //PopulateDeckName datalist with data from deckNameOptions
  for (let i = 0; i < deckNameOptions.length; i++){
    //console.log(deckNameOptions[i]);
    option = document.createElement("option");
    text = document.createTextNode(deckNameOptions[i])
    option.appendChild(text)
    deckNameDataList.appendChild(option)
  }

}

var difficultyButtonClick = function(selector,difficultyNumber) {
  // De-select all buttons
  allDifficultyButtons = document.querySelector('.buttons.difficulty')
  for (child of allDifficultyButtons.children) {
    child.classList.remove('is-selected');
    child.classList.remove('is-info');
  }

  // Select button that was clicked
  clickedButton = document.querySelector(selector);
  clickedButton.classList.add('is-selected');
  clickedButton.classList.add('is-info');

  diffcultyInputElement = document.querySelector('.input.difficultyInput');
  // If custom button was clicked, enable events input
  if (selector == ".difficultyCustom"){
    diffcultyInputElement.removeAttribute('disabled');
  
  } else {
    // Else disable events input
    diffcultyInputElement.setAttribute('disabled',"");

    // And set Events Input to difficultyNumber
    diffcultyInputElement.value = difficultyNumber;
    //TODO Update the span here as well

  }
}

////////////////////////////////////////////////////////////////////////////////
//Keyboard Input
document.body.onkeyup = function(e) {

  // Increase Life Tracker
  if(keyCodes_life_increase.includes(e.keyCode)){
    changeLifeTracker(1);
  }

  // Decrease Life Tracker
  if(keyCodes_life_decrease.includes(e.keyCode)){
    changeLifeTracker(-1);
  }

  // Increase Turn Counter
  if(keyCodes_turn_increase.includes(e.keyCode)){
    changeTurnCounter(1);
  }

  // Decrease Turn Counter
  if(keyCodes_turn_decrease.includes(e.keyCode)){
    changeTurnCounter(-1);
  }

  // Restart Game -> Open Confirm Modal
  if(keyCodes_restart_game.includes(e.keyCode)){
    openConfirmModal();
  }

  // Cancel confirm modal
  if(keyCodes_escape.includes(e.keyCode)){
    closeConfirmModal();
  }
  
}

////////////////////////////////////////////////////////////////////////////////
// Main

//newGame();