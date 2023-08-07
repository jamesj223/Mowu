////////////////////////////////////////////////////////////////////////////////
// Imports

////////////////////////////////////////////////////////////////////////////////
// Config

var versionNumber = 'v1.2';
var versionString = "Mowu " + versionNumber;

var turnCounter = 0;
var turnCounterElement = document.querySelector('.turnCounter');

var lifeTracker = startingLifeTotal;
var lifeTrackerElement = document.querySelector('.lifeTracker');
//var lifeDeltaBefore = lifeTracker; At start, and after 5 seconds set to current lifeTracker Value.
//var lifeDelta = 0; // Show life delta after each press. 5s timer/fadeout, then reset to 0
//var lifeDeltaTimeout = 0;// Upon life increase of

// Starting Life Total
var startingLifeTotal = 40;

// Deck Name
var deckName = "";

// Difficulty settings. Events every X turns
var difficultySelector = ""
var difficultyNumber = 0;

// [int startingLife, string deckName, string difficultyButtonSelector, int difficultyNumber]
var defaultGameSettings = [40, "", ".difficultyOff", 0];
var previousGameSettings = [];
//var previousGameSettings = [111,"Bilbo's Birthday Bash", ".difficultyCustom", 42];

////////////////////////////////////////////////////////////////////////////////
// Keycodes

// Life Tracker
var keyCodes_life_increase = [38, 87, 107]; // Keys: Up, W, Numpad+
var keyCodes_life_decrease = [40, 83, 109]; // Keys: Down, S, Numpad-

// Turn Counter
var keyCodes_turn_increase = [32, 13]; // Keys: Space, NumpadEnter
var keyCodes_turn_decrease = [];

// Restart/New Game
var keyCodes_restart_game = [82, 78]; // Keys: R, N

// Yes/confirm for current open modal/dialogue
var keyCodes_menu_yes = [89, 32]; // Keys: Y, Space
// No/cancel for current open modal/dialogue
var keyCodes_menu_no = [78, 27]; // Keys: N, Escape

// Events
var keyCodes_create_event = []; // Keys:
var keyCodes_dismiss_event = []; // Keys:

// Help
var keyCodes_help = [191]; // Keys: / ?

// Unused keyCodes
// (37,Left) (39,Right) (65,A) (68,D) (88,X) 

////////////////////////////////////////////////////////////////////////////////
// Functions

// Life Tracker
var changeLifeTracker = function(amount) {
    // Basic Life Tracker Stuff
    lifeTracker += amount;
    lifeTracker = Math.max(lifeTracker, 0);
    lifeTrackerElement.innerHTML = lifeTracker;
    // Delta Stuff
    // TODO
}

// Turn Counter
var changeTurnCounter = function(amount) {
    // Basic Turn Counter Stuff
    turnCounter += amount;
    turnCounter = Math.max(turnCounter, 0);
    turnCounterElement.innerHTML = turnCounter;
}

// Generic Modal Open
var openModal = function(objectOrSelector) {
    if (typeof objectOrSelector === 'string' || objectOrSelector instanceof String)
        modal = document.querySelector(objectOrSelector);
    else
        modal = objectOrSelector;
    modal.classList.add('is-active');
}

// Generic Modal Close
var closeModal = function(objectOrSelector) {
    if (typeof objectOrSelector === 'string' || objectOrSelector instanceof String)
        modal = document.querySelector(objectOrSelector);
    else
        modal = objectOrSelector;
    modal.classList.remove('is-active');
}

// Confirm function for restartGameMenuModal
var confirmRestartGame = function(bool) {
    if (bool) { resetCounters(); }
    closeModal('.restartGameMenuModal');
    openModal('.newGameMenuModal');
}

// Helper function for confirmRestartGame and startNewGame
var resetCounters = function() {
    // Reset Counters
    turnCounter = 0;
    lifeTracker = startingLifeTotal;
    // Update HTML Elements
    lifeTrackerElement.innerHTML = lifeTracker;
    turnCounterElement.innerHTML = turnCounter;
}

var openNewGameModal = function() {
    // Open Modal
    openModal('.newGameMenuModal');
    //newGameMenuModal = document.querySelector('.newGameMenuModal');
    //newGameMenuModal.classList.add('is-active');

    // If previous game settings exist, populate these as default
    if (previousGameSettings.length)
        newGameFormHelper(...previousGameSettings);
    else
        newGameFormHelper(...defaultGameSettings);

    //Get datalist element
    deckNameDataList = document.querySelector('.deckNameDataList');

    //Remove any existing data
    deckNameDataList.replaceChildren();
    //while (deckNameDataList.firstChild) {
    //  deckNameDataList.firstChild.remove()
    //}

    // Get stored deck names - Placeholder until we have storage sorted out
    deckNameOptions = ["Food and Fellowship", "Riders of Rohan", "Elven Council", "Hosts of Mordor"];

    //PopulateDeckName datalist with data from deckNameOptions
    for (let i = 0; i < deckNameOptions.length; i++) {
        //console.log(deckNameOptions[i]);
        option = document.createElement("option");
        text = document.createTextNode(deckNameOptions[i]);
        option.appendChild(text);
        deckNameDataList.appendChild(option);
    }

}

var newGameFormHelper = function(startingLife, deckName, difficultyButtonSelector, difficultyNumber) {
    document.querySelector('.startingLifeInput').value = startingLife;
    document.querySelector('.deckNameInput').value = deckName;
    difficultyButtonClick(difficultyButtonSelector, difficultyNumber);

    //Setting difficultyNumber twice because of weird refresh issue
    document.querySelector('.difficultyInput').value = difficultyNumber;
    difficultyValueChange();
}

// Helper function to handle difficulty buttons in new game form and update numeric difficulty accordingly
var difficultyButtonClick = function(selector, difficultyNumber) {
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
    if (selector == ".difficultyCustom") {
        diffcultyInputElement.removeAttribute('disabled');

    } else {
        // Else disable events input
        diffcultyInputElement.setAttribute('disabled', "");

        // And set Events Input to difficultyNumber
        diffcultyInputElement.value = difficultyNumber;
    }
    // Update span to match value
    difficultyValueChange();
}

// Helper function to make sure difficulty span updates to track difficulty input
var difficultyValueChange = function() {
    value = document.querySelector(".difficultyInput").value;
    document.querySelector(".eventsLabelSpan").innerHTML = value;
}

// Function for "Start Game" button in newGameMenuModal
var startNewGame = function() {
    // Get/apply values from form
    startingLifeTotal = document.querySelector('.startingLifeInput').valueAsNumber;
    deckName = document.querySelector('.deckNameInput').value;
    difficultySelector = '.' + document.querySelector(".button.is-selected").classList[1];
    difficultyNumber = document.querySelector('.difficultyInput').valueAsNumber;

    // Save form values to previousGameSettings
    previousGameSettings = [startingLifeTotal, deckName, difficultySelector, difficultyNumber];

    // Reset counters to starting values
    resetCounters();

    // Close new game modal
    closeModal('.newGameMenuModal');
}

////////////////////////////////////////////////////////////////////////////////
//Keyboard Input
document.body.onkeyup = function(e) {

    // Get active modal, if any
    activeModal = document.querySelector('.modal.is-active');

    if (activeModal ) {

        // Confirm current active modal, if able
        if (keyCodes_menu_yes.includes(e.keyCode)) {
            // Check if modal has a confirm button
            confirmButton = activeModal.querySelector(".button.confirm");
            // If there is one, click it.
            if (confirmButton)
                confirmButton.click()
        }

        // Dismiss current active modal, if able
        if (keyCodes_menu_no.includes(e.keyCode)) {
            // Check if modal has a dismiss button
            dismissButton = activeModal.querySelector(".button.dismiss");
            // If there is one, click it.
            if (dismissButton)
                dismissButton.click()
        }

    } else {
        // Increase Life Tracker
        if (keyCodes_life_increase.includes(e.keyCode)) {
            changeLifeTracker(1);
        }

        // Decrease Life Tracker
        if (keyCodes_life_decrease.includes(e.keyCode)) {
            changeLifeTracker(-1);
        }

        // Increase Turn Counter
        if (keyCodes_turn_increase.includes(e.keyCode)) {
            changeTurnCounter(1);
        }

        // Decrease Turn Counter
        if (keyCodes_turn_decrease.includes(e.keyCode)) {
            changeTurnCounter(-1);
        }
        // Restart Game -> Open Confirm Modal
        if (keyCodes_restart_game.includes(e.keyCode)) {
            openModal('.restartGameMenuModal');
        }
        // Help Modal
        if (keyCodes_help.includes(e.keyCode)) {
            openModal('.helpModal');
        }
    }

}

////////////////////////////////////////////////////////////////////////////////
// Main

if (location.hostname === "localhost" || location.hostname === "127.0.0.1" || location.hostname === "")
    versionString += ' - Local Dev';

document.querySelector('title').innerHTML = versionString;
document.querySelector('.navbar-brand > .navbar-item').innerHTML = versionString;


openNewGameModal();