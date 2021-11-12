// Node.js
// Space Character Attributes

const MAX_LOOT = 1;
let lootList = []

let loot = {
    "PROFESSION" : [
        "Miner",
        "Merchant",
        "Explorer",
        "Soldier",
        "Guard",
        "Scientist",
        "Engineer",
        "Diplomat",
        "Captain",
        "Medic",
        "Cleric",
        "Smuggler",
        "Spy",
        "Space Pirate",
        "Mercenary",
        "Leader",
        "Politician",
        "Black Market Dealer",
        "Assassin",
        "Hacker",
        "Negotiator",
        "Inventor",
        "Professor",
        "Lawyer",
        "Judge",
        "Rebel",
        "Worker"        
    ],
    "OBSESSION" : [
        "Harmony",
        "Acceptance",
        "Curiosity",
        "Power",
        "Money",
        "Vengeance",
        "Destruction",
        "Knowledge",
        "Revenge",
        "Immortality",
        "Equity",
        "Adventure",
        "Liberty",
        "Order",
        "Past",
        "Future",
        "Fame",
        "Beauty",
        "Chaos"
    ],
    "GIFT" : [
        "Awareness",
        "Intuition",
        "Self Control",
        "Empathy",
        "Stamina",
        "Resilience",
        "Adaptability",
        "Insight",
        "Memory",
        "Patience",
        "Precision",
        "Speed of Thought",
        "Tenacity",
        "Subtlety",
        "Bravery",
        "Leadership",
        "Seduction",
        "Charming",
        "Charisma",
        "Space Savvy",
        "Communication",
        "Negotiation"
    ],
    "SKILL" : [
        "Haggle",
        "Bluff",
        "Gather Information",
        "Sense Motive",
        "Search",
        "Intimidate",
        "Sense Trouble",
        "Disable Device",
        "Hide",
        "Listen",
        "Treat Injury",
        "Resolve Conflict",
        "Repair Item",
        "Craft Item",
        "Spot Trap",
        "Identify Creature",
        "Make Trap",
        "Uncover Traitor",
        "Hack System",
        "Diplomacy",
        "Negotiate",
        "Create Rumor",
        "Investigate",
        "Read Body Language",
        "Speak Multiple Languages",
        "Distract",
        "Speak Under Pressure",
        "Shoot Weapons",
        "Sneak",
        "Pick Pocket",
        "Covert Ops ",
        "Forgery"
    ],
    "ALIGNMENT" : [
        "Lawful good",
        "Neutral good",
        "Chaotic good",
        "Lawful neutral",
        "True neutral",
        "Chaotic neutral",
        "Lawful evil",
        "Neutral evil"
    ]
}

// Create a function to choose randomly from an array
function randomFromArray(array) {
    var random = Math.floor(Math.random() * array.length);
    return array[random];
}

// Create 8000 characters with random properties from each of the arrays in the spacechar object
for (var i = 0; i < MAX_LOOT; i++) {
    var newLoot = {};
    newLoot.profession = randomFromArray(loot.PROFESSION);
    newLoot.obsession = randomFromArray(loot.OBSESSION);
    newLoot.gift = randomFromArray(loot.GIFT);
    newLoot.skill = randomFromArray(loot.SKILL);
    newLoot.alignment = randomFromArray(loot.ALIGNMENT);
    lootList.push(newLoot);
}

console.log(lootList[0]);