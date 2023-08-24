# Events

Events are a way to make playtesting your decks more fun, interactive, difficult and hopefully more realistic. 
The basic idea is that every X turns, an event will be revealed. It could be a board wipe, a big creature for you to deal with, an enchantment for you to work around or an instant or sorcery that otherwise disrupts your plans. 

Some events might use real magic cards. Others might use slightly modified versions of real cards. Some might use completely custom cards.

At the moment I'm think I can group events into two main categories. 
- Basic events, that don't require player life total tracking. Most board wipes, targeted removal, hand disruption, pillow fort etc should fall into this category.
- Advanced events, that do require player life total tracking. Summons will probably all fall into this category, as well as some cards for other categories.

## Categories

- Board Wipes
    - Can probably use 100% existing cards here. Lots to choose from
    - Different target types: Creature, Artifact, Land Etc
    - Different degrees of wipe: X Damage, Destroy, Exile
- Targeted Removal
    - Probably need to use modified or custom cards here
    - Destroy/exile highest power/toughness minion
    - Destroy/exile highest cost minion/artifact/enchantment
- Summons
    - Events might summon 1 creature, or multiple
    - All creatures will probably need one of more of the following 
        - Haste
        - Vigilance
        - Must attack each turn if able (Goaded?)
        - Must block each turn if able - How to assign block?
    - Some creatures with big stats
    - Some creatures with specific keywords
        - Deathtouch, infect/poison, menace
- Pillow Fort
    - Prevent/hinder attackers
    - Ghostly Prison etc
- Hand disruption
    - Wheel of fortune
    - Discard random card type effects
- "Counter Spells"
    - Probably can't implement actual counter spells, but disruption that makes spells cost more for example might be possible.
    - Defense Grid for example.

## Implemented

Nothing here yet

## Potential Events

Nothing here yet

## MISC/Migrated from TODO

- [ ] For mana cost X events, base X off turn number?
    - [ ] I.E a card costs XRR and it's turn 6, assume X=4
- [ ] Get card images from Scryfall?
    - [ ] Cache them locally?
- [ ] Weighted Probabilities for each category and for each event within that category
    - [ ] Change probability or event pool based on # turns? 
    - [ ] Have the events scale kind of. 
    - [ ] Start small, single target removal, single creature summons etc
    - [ ] The longer the game goes, summon larger creatures, cast single sided board wipes etc.
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
        - [ ] Or cards that counter on random chance? coin flip, dice roll etc
- [ ] Sub menu to toggle on/off specific events?