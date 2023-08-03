# MagicGoldFish (MGF)

## Overview

A Magic: The Gathering goldfishing web app. Super basic (for now).

The purpose of this web app is to goldfish (playtest) MTG decks. Track turn count and life total. Play out your turns and see how long it takes you to deal 40 damage to an opponent. Future version might add optional events, to make it slightly more difficult and interactive. Board wipes every X turns, that kind of thing.

## Aims for V1
- [x] Basic tracking for life and turns
- [x] Basic Keyboard controls
- [x] On screen +/- buttons
- [x] Restart Button/keyboard
- [x] Bulma CSS/themeing
- [x] Auto deploy release branch to netlify or similar

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
    - [ ] Some of these events might require separate trackers for player and opponent health. Just something to think about
    - [ ] Sub menu to toggle on/off specific events?
- [ ] Event UI
    - [ ] Card for each event? With a dismiss button/hotkey
- [ ] Custom Art Cards for each event?
    - [ ] Static or generated?
