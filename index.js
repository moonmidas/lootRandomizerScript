// Loot Randomizer

// CONFIGURATION SECTION

const MAX_LOOT = 1;
const loot = {
    "PROFESSION" : [
        "Assassin",
        "Bard",
        "Bodyguard",
        "Businessman",
        "Collector",
        "Engineer",
        "Farmer",
        "Historian",
        "Industrialist",
        "Mercenary",
        "Merchant",
        "Miner",
        "Diplomat",
        "Politician",
        "Scientist",
        "Smuggler",
        "Strategist",
        "Thief",
        "Bounty Hunter"     
    ],
    "OBSESSION" : [
        "Money",
        "Knowledge",
        "Order",
        "Beauty",
        "Future",
        "Science",
        "Immortality",
        "Chaos",
        "Power",
        "Vengeance",
        "Fame",
        "Past"
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

// END OF CONFIGURATION SECTION

const lootProps = Object.keys(loot)
let lootList = []
// Create a function to choose randomly from an array
function randomFromArray(array) {
    var random = Math.floor(Math.random() * array.length);
    return array[random];
}

// Create x loot based on the MAX_LOOT configuration
// Assign the properties of the loot object in a dynamic way
// This code was refactorized by Eliseo (https://github.com/eliseoci/)
for (var i = 0; i < MAX_LOOT; i++) {
    let newLoot = {}
    for (const prop of lootProps) {
        if(prop != undefined){
            console.log(prop)
            newLoot[prop] = randomFromArray(loot[prop])
        }
    }
    lootList.push(newLoot)
}

console.log(lootList[0]);

