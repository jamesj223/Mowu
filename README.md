# MagicGoldFish (MGF)

## Overview

A MTG Goldfishing Web App. Tracks turn count and life total.
Super basic (for now).

## V1
- [x] Basic tracking for life and turns
- [x] Basic Keyboard controls
- [x] On screen +/- buttons
- [ ] Restart Button/keyboard
- [ ] Basic css/themeing
    - [ ] Bootstrap? or something else
    - [ ] Bulma seems like a cool option
- [ ] Github markdown thing

## Roadmap
- [ ] Menu (and navbar?)
    - [ ] New game
        - [ ] Starting health
        - [ ] Deck name/list
        - [ ] Events on/off
        - [ ] Difficulty (events every X turns)
            - [ ] Easy/medium/hard/custom?
    - [ ] Resume previous game
    - [ ] View Stats
- [ ] Confirm before exiting existing game in progress
- [ ] Progressive key down repeat rate (start slowly, then progressively get faster)
- [ ] Life delta thing that fades over time
- [ ] Game over check?
    - [ ] alert() window with new game button, and dismiss/continue/undo 
- [ ] Local storage? Or cloud/accounts?
- [ ] Store/resume in progress game
- [ ] Store deck name/list
    - [ ] Select from dropdown for previously used
    - [ ] or add new
- [ ] Store game results (deck name, number of turns, difficulty etc)
- [ ] Display stats for stored decks
    - [ ] Easy/medium/hard/custom
- [ ] "Events"
    - [ ] Board wipe (creatures, artifacts?)
        - [ ] Pick a random real board wipe card?
    - [ ] Destroy/exile biggest minion
    - [ ] Wheel of fortune
    - [ ] Big creature 20/20 w/ haste, vigilance
        - [ ] Random selection of keywords?
    - [ ] 1 to 5 1/1 Deathtouch blockers (w/ defender?)
- [ ] Event UI
    - [ ] Card for each event? With a dismiss button/hotkey
- [ ] Custom Art Cards for each event?
    - [ ] Static or generated?