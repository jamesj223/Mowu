# To Do

## Current Priorities

- [ ] Show difficulty on Navbar
- [ ] Ctrl + Arrows for change life 5 or 10 at a time
- [ ] README - Screenshots

## Full feature backlog

- [ ] Repeat for on screen button press
- [ ] Change default starting health
    - [ ] 40 is too low, can't differentiate deck strengths enough
        - [ ] 60 - 20 damage x 3 players?
        - [ ] 80 - 40 damage x 2 players?
        - [ ] 90 - 30 damage x 3 players?
        - [ ] 120 - 40 damage x 3 players
            - [ ] Maybe too much? More aggro decks might run out of steam
- [ ] Click on event to open zoomed in card image in a modal
- [ ] Commander Damage tracking?
- [ ] Poison tracking?
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

- [ ] Make Deck name centered on desktop too
- [ ] Animate navbar menu opening/closing
- [ ] Expand/hide footer (and animate this too)
- [ ] Compact tracker cards for mobile
    - [ ] Utilise "is-size-[X]-mobile" for Titles
    - [ ] Utilise "is-[SIZE] is-responsive" for Buttons
- [ ] Progressive key down repeat rate (start slowly, then progressively get faster)
    - [ ] For on screen buttons as well