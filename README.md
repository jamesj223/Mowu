# MagicGoldFish (MGF)

## Overview

A Magic: The Gathering goldfishing web app. Super basic (for now). 

The purpose of this web app is to goldfish (playtest) MTG decks. Track turn count and life total. Play out your turns and see how long it takes you to deal 40 damage to an opponent. Future version might add optional events, to make it slightly more difficult and interactive. Board wipes every X turns, that kind of thing.

The name is a placeholder until I come up with something better.

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


## Roadmap
- [ ] Come up with a better name - MagicGoldFish is too close to MTGGoldfish
    - [ ] Wilson - Way too many things called Wilson already
    - [ ] Mowu? Less common and more magic relevant/specific
- [ ] Favicon
- [ ] Menu (and navbar?)
    - [ ] New game
        - [ ] Starting health
        - [ ] Deck name/list
        - [ ] Events on/off
        - [ ] Difficulty (events every X turns)
            - [ ] Easy/medium/hard/custom?
    - [ ] Resume previous game
    - [ ] View Stats
- [ ] Confirm before exiting/restarting when game in progress
- [ ] Progressive key down repeat rate (start slowly, then progressively get faster)
- [ ] Life delta thing that fades over time
- [ ] Game over check?
    - [ ] alert/pop up window with new game button, and dismiss/continue/undo 
- [ ] Local storage (IndexedDB?)
    - [ ] Or server side
    - [ ] Or cloud/accounts?
- [ ] Store/resume in progress game
- [ ] Store deck name/list
    - [ ] Select from dropdown for previously used
    - [ ] Pre Populate with most recently used? Maybe only for multiple games in the same session?
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
