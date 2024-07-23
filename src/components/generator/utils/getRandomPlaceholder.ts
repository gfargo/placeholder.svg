const SEED_WORDS: string[] = [
  "Dragon",
  "Unicorn",
  "Wizard",
  "Elf",
  "Goblin",
  "Troll",
  "Phoenix",
  "Gryphon",
  "Mermaid",
  "Cyclops",
  "Centaur",
  "Ogre",
  "Fairy",
  "Gnome",
  "Sprite",
  "Nymph",
  "Yeti",
  "Bigfoot",
  "Kraken",
  "Hydra",
  "Chimera",
  "Basilisk",
  "Werewolf",
  "Vampire",
  "Zombie",
  "Witch",
  "Warlock",
  "Sorcerer",
  "Alchemist",
  "Druid",
  "Enchanter",
  "Necromancer",
  "Minotaur",
  "Harpy",
  "Banshee",
  "Manticore",
  "Sphinx",
  "Pegasus",
  "Djinn",
  "Imp",
  "Leprechaun",
  "Sprite",
  "Pixie",
  "Kelpie",
  "Griffon",
  "Satyr",
  "Boggart",
  "Selkie",
  "Wyvern",
  "Naga",
  "Rakshasa",
  "Kappa",
  "Wendigo",
  "Gorgon",
  "Jabberwocky",
  "Hobgoblin",
  "Chupacabra",
  "Gargoyle",
  "Sasquatch",
  "Golem",
  "Basilisk",
  "Cockatrice",
  "Dryad",
  "Elemental",
  "Fomorian",
  "Gremlin",
  "Ifrit",
  "Lich",
  "Mogwai",
  "Nixie",
  "Oni",
  "Redcap",
  "Shoggoth",
  "Spriggan",
  "Tengu",
  "Troll",
  "Wight",
  "Yokai",
  "Zombie",
  "Beholder",
  "Ghoul",
  "Shade",
  "Wraith",
  "Bugbear",
  "Ooze",
  "Slime",
  "Kobold",
  "Mimic",
  "Myconid",
  "Treant",
  "Beastman",
  "Satyr",
  "Dryad",
  "Brownie",
  "Kelpie",
  "Nymph",
  "Sirene",
  "Centaurette",
  "Naiad",
  "Undine",
  "Sidhe",
  "Bean Sidhe",
  "Doppelganger",
  "Changeling",
  "Sasquatch",
  "Yeti",
  "Bigfoot",
  "Mothman",
  "Thunderbird",
  "Pukwudgie",
  "Skinwalker",
  "Chupacabra",
  "Wampus",
  "Jersey Devil",
  "Krampus",
  "Yule Cat",
  "Grim Reaper",
  "Poltergeist",
  "Phantom",
  "Shade",
  "Wraith",
  "Specter",
  "Apparition",
  "Banshee",
  "Haunt",
  "Revenant",
  "Cursed One",
  "Forsaken",
  "Lost Soul",
  "Restless Spirit",
  "Unseen",
  "Unheard",
  "Hollow",
  "Husk",
  "Lurker",
  "Wanderer",
  "Nomad",
  "Roamer",
  "Seeker",
  "Watcher",
  "Guardian",
  "Protector",
  "Defender",
  "Sentinel",
  "Warden",
  "Keeper",
  "Overseer",
  "Caretaker",
  "Custodian",
  "Watchman",
  "Scout",
  "Tracker",
  "Pathfinder",
  "Explorer",
  "Pioneer",
  "Trailblazer",
  "Vanguard",
  "Advance",
  "Forerunner",
  "Outrider",
  "Herald",
  "Messenger",
  "Emissary",
  "Envoy",
  "Diplomat",
  "Ambassador",
  "Legate",
  "Consul",
  "Minister",
  "Liaison",
  "Delegate",
  "Procurator",
  "Magistrate",
  "Tribune",
  "Prefect",
  "Praetor",
  "Proconsul",
  "Exarch",
  "Archon",
  "Patrician",
  "Noble",
  "Aristocrat",
  "Blueblood",
  "Highborn",
  "Royal",
  "Monarch",
  "Sovereign",
  "Emperor",
  "Kaiser",
  "Tsar",
  "Czar",
  "Shah",
  "Caliph",
  "Sultan",
  "Maharaja",
  "Raja",
  "Rajah",
  "Nawab",
  "Emir",
  "Khan",
  "Sheikh",
  "Bey",
  "Atabeg",
  "Pasha",
  "Mullah",
  "Ayatollah",
  "Imam",
  "Cleric",
  "Priest",
  "Monk",
  "Friar",
  "Brother",
  "Abbot",
  "Prior",
  "Canon",
  "Deacon",
  "Chaplain",
  "Vicar",
  "Rector",
  "Curate",
  "Parson",
  "Pastor",
  "Minister",
  "Shepherd",
  "Preacher",
  "Evangelist",
  "Missionary",
  "Apostle",
  "Disciple",
  "Follower",
  "Adherent",
  "Believer",
  "Devotee",
  "Zealot",
  "Fanatic",
  "Crusader",
  "Martyr",
  "Saint",
  "Ascetic",
  "Hermit",
  "Recluse",
  "Anchorite",
  "Eremite",
  "Solitary",
  "Lonely One",
  "Isolate",
  "Outcast",
  "Exile",
  "Refugee",
  "Fugitive",
  "Runaway",
  "Escapee",
  "Absconder",
  "Deserter",
  "Renegade",
  "Turncoat",
  "Traitor",
  "Defector",
  "Apostate",
  "Heretic",
  "Schismatic",
  "Dissenter",
  "Nonconformist",
  "Unorthodox",
  "Maverick",
  "Rebel",
  "Insurgent",
  "Revolutionary",
  "Mutineer",
  "Anarchist",
  "Saboteur",
  "Guerrilla",
  "Freedom Fighter",
  "Partisan",
  "Resistor",
  "Opposition",
  "Underground",
  "Secret",
  "Hidden",
  "Concealed",
  "Veiled",
  "Shrouded",
  "Obscured",
  "Masked",
  "Camouflaged",
  "Disguised",
  "Invisible",
  "Unseen",
  "Unnoticed",
  "Unobserved",
  "Unperceived",
  "Imperceptible",
  "Inconspicuous",
  "Inscrutable",
  "Opaque",
  "Mystery",
  "Enigma",
  "Riddle",
  "Puzzle",
  "Conundrum",
  "Paradox",
  "Dilemma",
  "Quandary",
  "Predicament",
  "Plight",
  "Trouble",
  "Difficulty",
  "Problem",
  "Issue",
  "Complication",
  "Obstacle",
  "Barrier",
  "Hindrance",
  "Impediment",
  "Challenge",
  "Trial",
  "Test",
  "Ordeal",
  "Crucible",
  "Gauntlet",
  "Quest",
  "Journey",
  "Expedition",
  "Adventure",
  "Voyage",
  "Trip",
  "Trek",
  "Tour",
  "Pilgrimage",
  "Odyssey",
  "Excursion",
  "Jaunt",
  "Ramble",
  "Hike",
  "March",
  "Parade",
  "Procession",
  "Cortege",
  "Caravan",
  "Convoy",
  "Fleet",
  "Armada",
  "Flotilla",
  "Squadron",
  "Regiment",
  "Battalion",
  "Brigade",
  "Division",
  "Corps",
  "Army",
  "Legion",
  "Phalanx",
  "Force",
  "Militia",
  "Guards",
  "Sentinels",
  "Watch",
  "Police",
  "Constabulary",
  "Gendarmerie",
  "Sheriff",
  "Deputy",
  "Marshal",
  "Ranger",
  "Trooper",
  "Soldier",
  "Warrior",
  "Fighter",
  "Gladiator",
  "Champion",
  "Hero",
  "Legend",
  "Icon",
  "Star",
  "Celebrity",
  "Luminary",
  "Notable",
  "Figure",
  "Personality",
  "Dignitary",
  "VIP",
  "Bigwig",
  "Hotshot",
  "Headliner",
  "Famous",
  "Renowned",
  "Acclaimed",
  "Celebrated",
  "Esteemed",
  "Distinguished",
  "Eminent",
  "Illustrious",
  "Prestigious",
  "Honored",
  "Respected",
  "Revered",
  "Venerated",
  "Adored",
  "Beloved",
  "Cherished",
  "Treasured",
  "Precious",
  "Valued",
  "Esteemed",
  "Prized",
  "Admired",
  "Revered",
  "Worshipped",
  "Idolized",
  "Adored",
  "Beloved",
  "Cherished",
  "Treasured",
  "Precious",
  "Valued",
  "Esteemed",
];

// Utility function to generate random two-word placeholder text
export const getRandomPlaceholder = (): string => {
  const randomIndex1 = Math.floor(Math.random() * SEED_WORDS.length);
  let randomIndex2 = Math.floor(Math.random() * SEED_WORDS.length);

  // Ensure that the two words are different
  while (randomIndex2 === randomIndex1) {
    randomIndex2 = Math.floor(Math.random() * SEED_WORDS.length);
  }

  return `${SEED_WORDS[randomIndex1]} ${SEED_WORDS[randomIndex2]}`;
};