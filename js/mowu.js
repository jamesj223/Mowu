////////////////////////////////////////////////////////////////////////////////
// Imports

////////////////////////////////////////////////////////////////////////////////
// Config

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
//function openModal(objectOrSelector) {
function openModal(selector) {

    unbindInputs();

    modal = document.querySelector(selector);

    // Parse obejectOrSelector and get relevant modal
    // if (typeof objectOrSelector === 'string' || objectOrSelector instanceof String) {
    //    modal = document.querySelector(objectOrSelector); 
    // } else {
    //     modal = objectOrSelector;
    // }
    
    // Handle Animations
    animateCSS(modal, 'fadeIn').then((message) => {
        //bindInputs("menu");
        bindInputs(selector);
    });
    modal.classList.add('is-active');

}

// Generic Modal Close
function closeModal(objectOrSelector) {

    unbindInputs();

    // Parse obejectOrSelector and get relevant modal
    if (typeof objectOrSelector === 'string' || objectOrSelector instanceof String) {
        modal = document.querySelector(objectOrSelector);
    } else {
        modal = objectOrSelector;
    }

    // Animations
    animateCSS(modal, 'fadeOut').then((message) => {
        // Once the fadeout is complete, remove the is-active class from the modal
        modal.classList.remove('is-active');
    });
    bindInputs("gameplay");

}

// Confirm function for endGameMenuModal
function confirmRestartGame(optionString) {

    activeModal = document.querySelector('.modal.is-active');
    
    switch(optionString) {
        case "New Game":
            openNewGameModal();
            break;
        case "Restart":
            resetGame();
            break;
        case "Cancel":
            break;
    }
    if (activeModal)
        closeModal(activeModal);
}

// Helper function for confirmRestartGame and startNewGame
function resetGame() {
    // Reset Counters
    turnCounter = 0;
    lifeTracker = startingLifeTotal;
    // Update HTML Elements
    lifeTrackerElement.innerHTML = lifeTracker;
    turnCounterElement.innerHTML = turnCounter;
    // Dismiss all events and hide events coulumn
    dismissEvent("ALL");

}

function openNewGameModal() {
    // Open Modal
    openModal('.newGameMenuModal');

    // Unlock form inputs 
    document.querySelector('.newGameMenuFieldset').disabled=false;

    // If previous game settings exist, populate these as default
    if (previousGameSettings.length)
        newGameFormHelper(...previousGameSettings);
    else
        newGameFormHelper(...defaultGameSettings);

    //Get datalist element
    deckNameDataList = document.querySelector('.deckNameDataList');

    //Remove any existing data
    deckNameDataList.replaceChildren();

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

    // Get/apply values from form
    startingLifeTotal = document.querySelector('.startingLifeInput').valueAsNumber;
    deckName = document.querySelector('.deckNameInput').value;
    difficultySelector = '.' + document.querySelector(".button.is-selected").classList[1];
    difficultyNumber = document.querySelector('.difficultyInput').valueAsNumber;

    // Save form values to previousGameSettings
    previousGameSettings = [startingLifeTotal, deckName, difficultySelector, difficultyNumber];

    // Reset counters to starting values, and clear any events
    resetGame();

    // Close new game modal
    // Add check here? If new game menu modal is open, close it
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

// Generate a random string of a given length to use as an EventID
function randomEventID(length){
    eventID = 'e-';
    validCharacters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (let i=0; i < length; i++) {
        eventID += validCharacters[ Math.floor(Math.random() * validCharacters.length) ];
    }
    return eventID;
}

function createElementFromTemplate(html) {
    var template = document.createElement('template');
    html = html.trim(); // Never return a text node of whitespace as the result
    template.innerHTML = html;
    return template.content.firstChild;
}

// Generate a random event
function generateEvent() {

    // Housekeeping
    eventID = randomEventID(5);
    mainColumns = document.querySelector('.mainColumns');

    // Choose Event Type
    // Todo
    eventType = "test";

    // Choose Event within Type
    // Todo
    chosenEventName = "Placeholder"
    //chosenEventNumCards = 1;
    chosenEventImage = "Placeholder.png";

    // If multiple cards, work out how many, then create that many boxes
    // Todo
    //numCards = 1;
    eventCardImageString = "images/events/" + eventType + "/" + chosenEventImage

    // Create ~box~ message
    eventColumn = createElementFromTemplate(
        `<div class="column eventsSubColumn is-narrow is-one-third" id="${eventID}"><article class="message magicCard is-light">
            <div class="message-header">
                <p>Event</p>
                <button class="delete" aria-label="delete" onclick="dismissEvent('#${eventID}')"></button>
            </div>
            <div class="message-body">
                <figure class="image">
                    <img src="${eventCardImageString}" alt="${chosenEventName}">
                </figure>
            </div>
        </article></div>`
        );
    
    // Add box to column
    mainColumns.appendChild(eventColumn);
    
    // Hide "No active events" card
    //document.querySelector('.noActiveEvents').classList.add('is-hidden');

    // Unhide column
    //eventsColumn.classList.remove('is-hidden');
    //eventsColumnSuper.classList.remove('is-hidden');

    // Todo

}

function dismissEvent(eventID) {

    mainColumns = document.querySelector('.mainColumns');

    // Reset mode
    if (eventID == "ALL") {
        while (mainColumns.children.length > 1) {
            mainColumns.removeChild(mainColumns.lastChild);
        }
        //mainColumns.classList.add('is-hidden');
        //document.querySelector('.noActiveEvents').classList.add('is-hidden');
    }
    // Normal mode
    else {
        eventBox = document.querySelector(eventID);

        // Remove event from column
        mainColumns.removeChild(eventBox);

        // Check if column has any more events, if not, unhide the "No active events" card
        //if (eventsColumn.children.length == 1)
        //    document.querySelector('.noActiveEvents').classList.remove('is-hidden');
    }
}

////////////////////////////////////////////////////////////////////////////////
//Keyboard Input

function inputMenuButtonHelper (selector) {
    activeModal = document.querySelector('.modal.is-active');
    // Check if active modal has a [selector] button
    button = activeModal.querySelector(selector);
    // If there is one, click it.
    if (button) {
        button.click()
        //console.log(selector + " button clicked")
    }

}

function unbindInputs () {
    // Unbind everything
    Mousetrap.reset();
    //console.log("All inputs unbound")
}

function bindInputs (mode) {

    //console.log("bindInputs(" + mode + ")")
 
    switch (mode) {

        // Bind gameplay inputs    
        case "gameplay":
            
            // Life Tracker
            Mousetrap.bind(["up","w", "+"], function() {changeLifeTracker(1)});
            Mousetrap.bind(["down","s", "-"], function() {changeLifeTracker(-1)});

            // Turn Counter
            Mousetrap.bind(["space","enter"], function() {changeTurnCounter(1); return false; }, 'keyup');
            //Mousetrap.bind(["",""], function() {changeTurnCounter(-1)});

            // Open Restart/New Game Menu
            Mousetrap.bind(['escape'], function() { openModal('.endGameMenuModal')}, 'keyup');
            // Quick restart game with current settings
            Mousetrap.bind('ctrl+q', function() { confirmRestartGame("Restart"); return false; });
            // Help Menu
            Mousetrap.bind(["/","?"], function() { openModal('.helpModal'); return false;});
            // Test/Debug
            Mousetrap.bind('ctrl+e', function() { generateEvent(); return false; });

            break;

        // Bind newGameMenuModal 
        case ".helpModal":  
        case ".newGameMenuModal":
            // Confirm, Dismiss, Submit
            Mousetrap.bind(['Y','y','space'], function() { inputMenuButtonHelper(".confirm"); return false; }, 'keyup');
            Mousetrap.bind(['N','n','escape'], function() {inputMenuButtonHelper(".dismiss"); return false; }, 'keyup');
            Mousetrap.bind(['enter'], function() {inputMenuButtonHelper(".submit"); return false; }, 'keyup');
            break;

        case ".endGameMenuModal":
        case ".gameOverModal":
            // Underscored first letter button hotkeys thing
            Mousetrap.bind(['N','n'], function() { confirmRestartGame('New Game'); return false; }, 'keyup');
            Mousetrap.bind(['R','r'], function() { confirmRestartGame('Restart'); return false; }, 'keyup');
            Mousetrap.bind(['C','c', 'escape'], function() { confirmRestartGame('Cancel'); return false; }, 'keyup');
            break;


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

openNewGameModal();