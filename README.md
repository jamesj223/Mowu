# Mowu

## Overview

Mowu is a Magic: The Gathering goldfishing web app. Super basic (for now). 

The purpose of this web app is to goldfish (playtest) MTG decks. Track turn count and life total. Play out your turns and see how long it takes you to deal 40 damage to an opponent. Eventually, I'd like to add optional events, to make it slightly more difficult and interactive. Creatures to deal with, board wipes etc.

Deployed (here)[https://mowu-mtg.netlify.app/]

## Keyboard Controls

    Increase Life Tracker - Up, W, Numpad+
    Decrease Life Tracker - Down, S, Numpad-
    Next Turn - Space, NumpadEnter
    Restart/New Game - R

## Features

Current release contains the following features:

- Basic Life Tracker and Turn Counter
- Keyboard controls and on screen buttons
- A Help Menu
- Bulma CSS/theming
- Auto deploy releases to Netlify

## Future Versions

### Roadmap

- The main feature planned for V2 will be persistent storage.
- The main feature planned for V3 will be events.

### Full feature backlog

- [x] Life delta that fades over time
- [x] On new game confirm button click, immediately disable all forms to prevent being able to click them while the modal is fading out.
- [ ] Fix restart menu sometimes reappearing and after confirm
- [ ] Fix counters column resizing when counters go up/down from single figures
- [ ] Menu (and navbar?)
    - [x] New game
        - [x] Starting health
        - [ ] Deck name/list
        - [ ] Events on/off
        - [ ] Difficulty (events every X turns)
            - [ ] Easy/medium/hard/custom?
    - [ ] Resume previous game
    - [ ] View Stats
- [x] Confirm before restarting when game in progress
    - [ ] Same but for exiting/closing the tab? Or too annoying
- [ ] Progressive key down repeat rate (start slowly, then progressively get faster)
- [ ] Game over check?
    - [ ] alert/pop up window with new game button, and dismiss/continue/undo 
- [ ] Local storage (IndexedDB?)
    - [ ] Or server side
    - [ ] Or cloud/accounts?
- [ ] Store/resume in progress game
- [ ] Store deck name/list
    - [ ] Select from dropdown for previously used
    - [x] Pre Populate with most recently used? Maybe only for multiple games in the same session?
    - [ ] or add new
- [ ] Store game results (deck name, number of turns, difficulty etc)
- [ ] Display stats for stored decks
    - [ ] Easy/medium/hard/custom
    - [ ] Export (csv?)
- [ ] "Events"
    - [ ] Board wipe (creatures, artifacts?)
        - [ ] Pick a random real board wipe card?
    - [ ] Destroy/exile biggest minion
    - [ ] Wheel of fortune
    - [ ] Big creature 20/20 w/ haste, vigilance
        - [ ] Random selection of keywords?
    - [ ] 1 to 5 1/1 Deathtouch blockers (w/ defender?)
    - [ ] 1 to 5 1/1 Infect Attackers
    - [ ] Pillow fort cards
    - [ ] Some of these events might require separate trackers for player and opponent health. Just something to think about
    - [ ] Sub menu to toggle on/off specific events?
- [ ] Event UI
    - [ ] Card for each event? With a dismiss button/hotkey
- [ ] Custom Art Cards for each event?
    - [ ] Static or generated?
