////////////////////////////////////////////////////////////////////////////////
// Imports

////////////////////////////////////////////////////////////////////////////////
// Config

const versionNumber = 'v1.3';
var versionString = "Mowu " + versionNumber;

var turnCounter = 0;
var turnCounterElement = document.querySelector('.turnCounter');

var lifeTracker = startingLifeTotal;
var lifeTrackerElement = document.querySelector('.lifeTracker');

var lifeDelta = 0; // Show life delta after each press. 5s timer/fadeout, then reset to 0
var lifeDeltaElement = document.querySelector('.lifeDelta');

// Starting Life Total
var startingLifeTotal = 40;

// Deck Name
var deckName = "";

// Difficulty settings. Events every X turns
var difficultySelector = "";
var difficultyNumber = 0;

// [int startingLife, string deckName, string difficultyButtonSelector, int difficultyNumber]
const defaultGameSettings = [40, "", ".difficultyOff", 0];
var previousGameSettings = [];
//var previousGameSettings = [111,"Bilbo's Birthday Bash", ".difficultyCustom", 42];

////////////////////////////////////////////////////////////////////////////////
// Keycodes

// Life Tracker
const keyCodes_life_increase = [38, 87, 107]; // Keys: Up, W, Numpad+
const keyCodes_life_decrease = [40, 83, 109]; // Keys: Down, S, Numpad-

// Turn Counter
const keyCodes_turn_increase = [32, 13]; // Keys: Space, NumpadEnter
const keyCodes_turn_decrease = [];

// Restart/New Game
const keyCodes_restart_game = [82, 78]; // Keys: R, N

// Yes/confirm for current open modal/dialogue
const keyCodes_menu_yes = [89, 32]; // Keys: Y, Space
// No/cancel for current open modal/dialogue
const keyCodes_menu_no = [78, 27]; // Keys: N, Escape
// Submit for New Game Menu
const keyCodes_menu_submit = [13]; // Keys: Enter

// Events
const keyCodes_create_event = []; // Keys:
const keyCodes_dismiss_event = []; // Keys:

// Help
const keyCodes_help = [191]; // Keys: / ?

// Unused keyCodes
// (37,Left) (39,Right) (65,A) (68,D) (88,X) 

////////////////////////////////////////////////////////////////////////////////
// Functions

// Life Tracker
function changeLifeTracker(amount) {
    lifeTracker += amount;
    lifeTracker = Math.max(lifeTracker, 0);
    lifeTrackerElement.innerHTML = lifeTracker;
    deltaHelper(amount);
}

function deltaHelper(amount) {
    //Clone the whole element to remove any previous animation/event listeners
    old_element = lifeDeltaElement;
    new_element = old_element.cloneNode(true);
    old_element.parentNode.replaceChild(new_element, old_element);

    // Grab the new element
    lifeDeltaElement = document.querySelector('.lifeDelta');

    // Update the value
    lifeDelta += amount;

    // Update the innerhtml with signed string value
    lifeDeltaElement.innerHTML = deltraString(lifeDelta);

    // Set text colour
    lifeDeltaElement.classList.remove('has-text-white');
    if (lifeDelta > 0){
        lifeDeltaElement.classList.add('has-text-success');
    } else if (lifeDelta < 0){
        lifeDeltaElement.classList.add('has-text-danger');
    } else {
        lifeDeltaElement.classList.add('has-text-black');
    }

    // Fade out over time,
    animateCSS(lifeDeltaElement, 'fadeOut').then((message) => {
        // After it has faded out, hide element and reset counters
        lifeDelta = 0;
        lifeDeltaElement.classList.add('has-text-white');
        lifeDeltaElement.classList.remove('has-text-success')
        lifeDeltaElement.classList.remove('has-text-danger')
        lifeDeltaElement.classList.remove('has-text-black')
        // Animate Life Tracker to let user know delta has finished
        // Can't decide between flash or headShake
        animateCSS(lifeTrackerElement, 'headShake').then((message) => {
            //Check if lifeTracker has reached 0
            if (lifeTracker == 0) {
                openModal('.gameOverModal')
            }
        });
    });
}

// Return number as a signed string
function deltraString(number) {
    if(number > 0){
        return "+" + number;
    } else {
        return number.toString();
    }    
}

// Turn Counter
function changeTurnCounter(amount) {
    // Basic Turn Counter Stuff
    turnCounter += amount;
    turnCounter = Math.max(turnCounter, 0);
    turnCounterElement.innerHTML = turnCounter;
}

// Generic Modal Open
function openModal(objectOrSelector) {
    if (typeof objectOrSelector === 'string' || objectOrSelector instanceof String) {
        modal = document.querySelector(objectOrSelector);
    } else {
        modal = objectOrSelector;
    }
    // Enable any buttons

    // Animations
    animateCSS(modal, 'fadeIn');
    modal.classList.add('is-active');
}

// Generic Modal Close
function closeModal(objectOrSelector) {
    if (typeof objectOrSelector === 'string' || objectOrSelector instanceof String) {
        modal = document.querySelector(objectOrSelector);
    } else {
        modal = objectOrSelector;
    }
    //Disable any buttons

    // Animations
    animateCSS(modal, 'fadeOut').then((message) => {
        // Once the fadeout is complete, remove the is-active class from the modal
        modal.classList.remove('is-active');
    });
}

// Confirm function for restartGameMenuModal
function confirmRestartGame(bool) {
    
    // Get active modal, if any
    activeModal = document.querySelector('.modal.is-active');
    
    if (bool) { 
        // THIS WAS THE STUPID BUG! ARGH!
        //openModal('.newGameMenuModal'); 
        openNewGameModal();
    }

    closeModal(activeModal);
}

// Helper function for confirmRestartGame and startNewGame
function resetCounters() {
    // Reset Counters
    turnCounter = 0;
    lifeTracker = startingLifeTotal;
    // Update HTML Elements
    lifeTrackerElement.innerHTML = lifeTracker;
    turnCounterElement.innerHTML = turnCounter;
}

function openNewGameModal() {
    // Open Modal
    openModal('.newGameMenuModal');
    //newGameMenuModal = document.querySelector('.newGameMenuModal');
    //newGameMenuModal.classList.add('is-active');

    // Unlock form inputs 
    document.querySelector('.newGameMenuFieldset').disabled=false;
    //$('.startingLifeInput').removeAttr("disabled");
    //$('.deckNameInput').removeAttr("disabled");
    //$(".buttons.difficulty").removeAttr("disabled");
    //$('.difficultyInput').removeAttr("disabled");

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

function newGameFormHelper(startingLife, deckName, difficultyButtonSelector, difficultyNumber) {
    document.querySelector('.startingLifeInput').value = startingLife;
    document.querySelector('.deckNameInput').value = deckName;
    difficultyButtonClick(difficultyButtonSelector, difficultyNumber);

    //Setting difficultyNumber twice because of weird refresh issue
    document.querySelector('.difficultyInput').value = difficultyNumber;
    difficultyValueChange();
}

// Helper function to handle difficulty buttons in new game form and update numeric difficulty accordingly
function difficultyButtonClick(selector, difficultyNumber) {
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
function difficultyValueChange() {
    value = document.querySelector(".difficultyInput").value;
    document.querySelector(".eventsLabelSpan").innerHTML = value;
}

// Function for "Start Game" button in newGameMenuModal
function startNewGame() {
    // Lock form inputs
    document.querySelector('.newGameMenuFieldset').disabled=true;
    //$('.startingLifeInput').attr("disabled");
    //$('.deckNameInput').attr("disabled");
    //$(".buttons.difficulty").attr("disabled");
    //$('.difficultyInput').attr("disabled");

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

// Add animation to an element, then remove it once the animation ends
const animateCSS = (element, animation, prefix = 'animate__') =>
    // We create a Promise and return it
    new Promise((resolve, reject) => {
        const animationName = `${prefix}${animation}`;
        
        // Original code has element, but is actually referring to a selector
        //const node = document.querySelector(element);
        const node = element;

        node.classList.add(`${prefix}animated`, animationName);

        // When the animation ends, we clean the classes and resolve the Promise
        function handleAnimationEnd(event) {
            event.stopPropagation();
            node.classList.remove(`${prefix}animated`, animationName);
            resolve('Animation ended');
        }

        node.addEventListener('animationend', handleAnimationEnd, {once: true});
    });

////////////////////////////////////////////////////////////////////////////////
//Keyboard Input
document.body.onkeyup = function(e) {

    // Get active modal, if any
    activeModal = document.querySelector('.modal.is-active');

    if (activeModal) {
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
        // Submit for new game modal
        if (keyCodes_menu_submit.includes(e.keyCode)) {
            // Check if modal has a submit button
            submitButton = activeModal.querySelector(".button.submit");
            // Also Check for regular confirm button
            confirmButton = activeModal.querySelector(".button.confirm");
            // If there is a submit button, click it.
            if (submitButton) {
                submitButton.click()
            } // Otherwise, try the same for confirm button
            else if (confirmButton) {
                confirmButton.click()
            }
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

// Navbar
$(document).ready(function() {

  // Check for click events on the navbar burger icon
  $(".navbar-burger").click(function() {

      // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
      $(".navbar-burger").toggleClass("is-active");
      $(".navbar-menu").toggleClass("is-active");

  });
});

////////////////////////////////////////////////////////////////////////////////
// Main

if (location.hostname === "localhost" || location.hostname === "127.0.0.1" || location.hostname === "")
    versionString += ' - Local Dev';

document.querySelector('title').innerHTML = versionString;
document.querySelector('.navbar-brand > .navbar-item').innerHTML = versionString;


openNewGameModal();