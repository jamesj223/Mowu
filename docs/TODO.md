# To Do

## Done

---

## In Progress

---

## High Priority

- Change default starting health to 120. 40 wasn't enough to differentiate between different strength decks, without events. May revisit this once events are implemented.
- Prevent zoom on mobile (double tap and pinch)

---

## Backlog

- [ ] Show Health and Turn Count on Navbar
  - [ ] H: 40 T: 1
- [ ] README - Screenshots
- [ ] Repeat for on screen button press/hold
- [ ] Click on event to open zoomed in card image in a modal
- [ ] Additional counters/trackers - Toggle in menu, with hotkey, on screen button?
    - [ ] Player Health
    - [ ] Commander Damage
    - [ ] Poison
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
- [ ] Store game results (deck name, starting health, number of turns, difficulty etc)
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
- [ ] Show difficulty on Navbar

## Known Bugs

- Key repeat rate for up and down arrows is different for some reason?
- Default behaviour intermittently happening for arrow keys (page scrolling up/down). Mousetrap is meant to be preventing that.