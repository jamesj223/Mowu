# To Do

## Current Priorities

- [ ] Fix footer behaviour once events go past bottom of page
- [ ] Add deck name to nav bar - centred, and truncate if too long
- [ ] Game over check
    - [ ] Let health go in to negative
    - [ ] Improve game over check, so that it only triggers once - Add a gameOverDismissed check or something along those lines? 
- [ ] README - Screenshots

## Full feature backlog

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
    - [ ] For on screen buttons as well
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
- [ ] Events - moved to EVENTS.md
    - [ ] Might need a way to mark a restart as a loss, once advanced events are added?
- [ ] Event UI
    - [ ] Card for each event? With a dismiss button/hotkey
- [ ] Custom Art Cards for each event?
    - [ ] Static or generated?
- [ ] Mousetrap easter egg

## Shelved for now

- [ ] Animate navbar menu opening/closing
- [ ] Expand/hide footer (and animate this too)
- [ ] Compact tracker cards for mobile
    - [ ] Utilise "is-size-[X]-mobile" for Titles
    - [ ] Utilise "is-[SIZE] is-responsive" for Buttons