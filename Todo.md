# Todo

## Current Priorities

- [x] Game over modal.
    - [x] Add check to changeLifeTracker, and open gameOverModal if 0
    - [ ] Improve check, so that it only triggers once - Add a gameOverDismissed check or something along those lines? 
- [x] Improve UI for small screens
	- [x] Fixed the counter/tracker boxes break a little bit on smaller screens	
- [x] Move version number to footer
- [ ] Add deck name to nav bar  - centred, and truncate if too long
- [ ] Let health go in to negative
- [ ] Tweak speed of health/delta animations
- [ ] Speed up modal fade in/out animations
- [ ] Separate buttons/modals for new game and restart game with current settings

- [ ] README - Screenshot
- [ ] README - Support

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
- [ ] Events
    - [ ] Basic Events - Events that don't require player health tracking
        - [ ] Board wipe (creatures, artifacts?)
            - [ ] Pick a random real board wipe card?
        - [ ] Destroy/exile biggest minion
        - [ ] Wheel of fortune
        - [ ] Basic Pillow Fort 
            - [ ] Ghostly Prison
            - [ ] Moat
            - [ ] Dissipation Field
            - [ ] No Mercy
            - [ ] Dueling Grounds
            - [ ] Crawlspace
        - [ ] Summon X (random 1-5?) 1/1 Deathtouch blockers (w/ defender? and must block if able)
    - [ ] Advanced Events - Events that require player health tracking
        - [ ] Big creature (10/10? 20/20?) w/ haste, vigilance
            - [ ] Random selection of keywords?
        - [ ] Summon X (random 1-5?) 1/1 Infect Attackers (that can't block and must attack if able)
        - [ ] Advanced Pillow Fort
            - [ ] Windborn Muse
            - [ ] Norn's Annex
            - [ ] etc
    - [ ] Other Events
        - [ ] Counter spells? How would that work? Just counter whatever the next spell player casts?
            - [ ] Maybe instead of counters, just cards that make opponents spells cost more. Like Defense Grid.
    - [ ] Sub menu to toggle on/off specific events?
    - [ ] Might need a way to mark a restart as a loss, once events are added?
- [ ] Event UI
    - [ ] Card for each event? With a dismiss button/hotkey
- [ ] Custom Art Cards for each event?
    - [ ] Static or generated?


## Shelved for now

- [ ] Animate navbar menu opening/closing
- [ ] Expand/hide footer (and animate this too)
