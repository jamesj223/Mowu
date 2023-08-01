// Imports

// Config

var startingLifeTotal = 40;

var turnCounter = 0;
var turnCounterElement = document.querySelector('.turnCounter');

var lifeTracker = startingLifeTotal;
var lifeTrackerElement = document.querySelector('.lifeTracker');
//var lifeDeltaBefore = lifeTracker; At start, and after 5 seconds set to current lifeTracker Value.
//var lifeDelta = 0; // Show life delta after each press. 5s timer/fadeout, then reset to 0
//var lifeDeltaTimeout = 0;// Upon life increase of

// Keycodes
var keyCodes_life_increase = [38,87,107]; // Keys: Up, W, Numpad+
var keyCodes_life_decrease = [40,83,109]; // Keys: Down, S, Numpad-

// Add space for next turn? keycode 32
//var keyCodes_turn_increase = [39,68]; // Keys: Right, D
var keyCodes_turn_increase = [32, 13];// Keys: Space, NumpadEnter
var keyCodes_turn_decrease = [];//[37,65]; // Keys: Left, A

// Functions

var changeLifeTracker = function(amount) {
  lifeTracker += amount;
  lifeTracker = Math.max(lifeTracker, 0)
  lifeTrackerElement.innerHTML = lifeTracker;
}

var changeTurnCounter = function(amount) {
  turnCounter += amount;
  turnCounter = Math.max(turnCounter, 0)
  turnCounterElement.innerHTML = turnCounter;
}

var resetCounters = function() {
  // Reset Counters
  turnCounter = 0;
  lifeTracker = startingLifeTotal;
  // Update HTML Elements
  lifeTrackerElement.innerHTML = lifeTracker;
  turnCounterElement.innerHTML = turnCounter;
}

// Main

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

  
}