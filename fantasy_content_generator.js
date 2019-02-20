(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
module.exports={
    "races": [
        "dragonborn",
        "dwarf",
        "elf",
        "gnome",
        "half-elf",
        "half-orc",
        "halfling",
        "human",
        "orc",
        "tiefling"
    ],
    "settlement_types": [
        "thorp",
        "hamlet",
        "village",
        "small_town",
        "medium_town",
        "large_town",
        "small_city",
        "medium_city",
        "large_city",
        "great_city",
        "metropolis"
    ],
    "settlement_type_populations": {
        "thorp": "5-20",
        "hamlet": "20-80",
        "village": "80-400",
        "small_town": "400-900",
        "medium_town": "900-2000",
        "large_town": "2000-5000",
        "small_city": "5000-10000",
        "medium_city": "10000-20000",
        "large_city": "20000-50000",
        "great_city": "50000-100000",
        "metropolis": "100000-100000"
    },
    "settlement_type_natural_landmark_count": {
        "thorp": "0-1",
        "hamlet": "0-1",
        "village": "0-1",
        "small_town": "0-2",
        "medium_town": "0-2",
        "large_town": "0-3",
        "small_city": "0-4",
        "medium_city": "0-4",
        "large_city": "1-4",
        "great_city": "2-5",
        "metropolis": "3-6"
    }
}
},{}],2:[function(require,module,exports){
const Races = require('./races')
const Storyhooks = require('./storyhooks')
const NPCs = require('./npcs')
const Settlements = require('./settlements')
const Loots = require('./loots')

module.exports = {
    Names: Races,
    Storyhooks,
    NPCs,
    Settlements,
    Loots
}
},{"./loots":4,"./npcs":8,"./races":29,"./settlements":34,"./storyhooks":35}],3:[function(require,module,exports){
require('../src/data.json');require('../src/natural_landmarks.json');require('../src/npcs/characterTraits.json');require('../src/npcs/flaws.json');require('../src/races/dragonborn/first.json');require('../src/races/dragonborn/last.json');require('../src/races/dragonborn/templates.json');require('../src/races/dwarf/first.json');require('../src/races/dwarf/last.json');require('../src/races/dwarf/templates.json');require('../src/races/elf/first.json');require('../src/races/elf/last.json');require('../src/races/elf/templates.json');require('../src/races/gnome/first.json');require('../src/races/gnome/last.json');require('../src/races/gnome/templates.json');require('../src/races/half-elf/templates.json');require('../src/races/half-orc/templates.json');require('../src/races/halfling/first.json');require('../src/races/halfling/last.json');require('../src/races/halfling/templates.json');require('../src/races/human/first.json');require('../src/races/human/last.json');require('../src/races/human/templates.json');require('../src/races/orc/first.json');require('../src/races/orc/templates.json');require('../src/races/tiefling/first.json');require('../src/races/tiefling/templates.json');require('../src/storyhooks/npc_acts.json');require('../src/storyhooks/pc_related.json');

window.FantasyContentGenerator = require('./index')
},{"../src/data.json":1,"../src/natural_landmarks.json":5,"../src/npcs/characterTraits.json":6,"../src/npcs/flaws.json":7,"../src/races/dragonborn/first.json":9,"../src/races/dragonborn/last.json":10,"../src/races/dragonborn/templates.json":11,"../src/races/dwarf/first.json":12,"../src/races/dwarf/last.json":13,"../src/races/dwarf/templates.json":14,"../src/races/elf/first.json":15,"../src/races/elf/last.json":16,"../src/races/elf/templates.json":17,"../src/races/gnome/first.json":18,"../src/races/gnome/last.json":19,"../src/races/gnome/templates.json":20,"../src/races/half-elf/templates.json":21,"../src/races/half-orc/templates.json":22,"../src/races/halfling/first.json":23,"../src/races/halfling/last.json":24,"../src/races/halfling/templates.json":25,"../src/races/human/first.json":26,"../src/races/human/last.json":27,"../src/races/human/templates.json":28,"../src/races/orc/first.json":30,"../src/races/orc/templates.json":31,"../src/races/tiefling/first.json":32,"../src/races/tiefling/templates.json":33,"../src/storyhooks/npc_acts.json":36,"../src/storyhooks/pc_related.json":37,"./index":2}],4:[function(require,module,exports){

},{}],5:[function(require,module,exports){
module.exports=[
    "A large oak tree that is swarming with beautiful blue butterflies in the morning, and blue fireflies at night.",
    "A cave hidden deep in the forest, with walls and floors that seem to shine with a fortunes worth of priceless gems that sparkle without any light. These “priceless gems” immediately turn to useless stones once removed from the cave.",
    "A large Cave system found in the middle of a jungle. The only known opening to the cave was found by a group of locals who were hunting in the jungle that day. The cave entrance spans an opening of roughly 100ft, and if seen from the sky looks like a large impact crater. The depth of the cave is unknown, and no one knows if it is inhabited by monsters.",
    "A large tree that has a village of sprites living in it. The tree moves to one of three positions in the forest every week.",
    "A tiny island in the center of a lake. There is a single bullywug sitting on the island eating fish on an improvised raft.",
    "A magical floating bush. It hovers around in circles.",
    "A hollow tree stump with a friendly faerie dragon.",
    "Erosion has carved what appears to be a face into the side of a cliff.",
    "A giant skeleton sticking out of the ground. Looks like a triceratops, but larger.",
    "A giant flower with lots of bees surrounding it. Thousands of flowers similar to the giant one grow around it at a wide range of heights. Different kinds of fey live around it too.",
    "An overgrown, moss-covered, patinaed statue that looks just like elderly versions of the party.",
    "A pond of sulphide water, with a geyser regularly rising at its centre.",
    "A cliff face with geometric crystal structures jutting out of the side.",
    "A cave entrance with several sharp rocks resembling the maw and teeth of a large beast.",
    "A tremendous pillar of rock in the exact center of a dried lakebed.",
    "A small pond in the center of a clearing. The pond is faintly luminescent and flowers grow around its edge.",
    "A large smooth stone with runes in an ancient language adorning its surface.",
    "A beached shipwreck that has been looted and broken on the shore. Overgrown with algae, seaweed, and barnacles.",
    "A cliff with sharp rocks below known to locals as the maw of the sea.",
    "A large tree that is over 30 feet in diameter. This hulking monstrosity of nature has been cared for by locals and some revere it as a god.",
    "A frozen lake with a polished ice surface. If you look closely enough, you can see dead floating beneath the surface.",
    "A rock formation that looks eerily like a grinning goblin if viewed from the proper angle.",
    "A mountain range that when viewed from above looks like a gigantic quadruped monster.",
    "The ribcage of a giant whale that fell out of the sky a long time ago, surrounded by a field of petunias. Local legends differ in how it got there, but the most accepted answer is that it was an unexpected side effect of a wizards reckless attempt to mess with the nature of probability.",
    "A rocky, windy precipice rises above the surroundings, with vultures perched on every available foothold. Locals say the place is terribly cursed, but in reality the vultures only congregate there because the wind allows them to smell corpses from a great distance.",
    "Stone God’s Thumb: Large fist of a mountain with a peak resembling a thumb. A plot of onions and a natural spring are located at the top.",
    "The Carved Oni Heads: Early Dwarven cultures carved these stone markers to ward off demons. They break the tree line and denote a path between two prehistoric dwarf cities each stone just within sight of the other.",
    "The Firefall: A rare geological phenomenon causes a plume of fire to escape a lone lava tube and cascade down instead of up. There might be something special hidden behind it…but mostly the charred remains of people who thought there was something behind it.",
    "A rotting, moss covered bookshelf in a forest clearing. Its decrepit shelves are filled with molding tomes in various states of decay. What is still legible in the books is a variety of languages and dialects, some unknown.",
    "A massive mushroom with a wide, flat top. Only the top is visible, and the rest is below ground. It will slowly rise from the the ground when it thinks no one is watching. If something looks at it while it is extended, it will quickly slam back into the ground.",
    "An old and gnarled tree has grown over and half-swallowed what appears to be the remains of a cart – the wood has rotted away, but the metal axel is still visible.",
    "A tree has fallen over a creek, its trunk forming a narrow bridge. It would be easy for a small-sized creature to walk across, but medium-sized creatures might have difficulty.",
    "A cluster of bright pink and yellow mushrooms have grown over and completely blanketed a rotted tree trunk.",
    "A series of miniature arches that is nearly always in the shadow of a larger arch.",
    "An extremely deep and narrow slot canyon. It’s easy to jump over, but if you fell in it would mean certain death.",
    "An enormous boulder balanced precariously on a thin, natural pillar.",
    "A wide, flat field completely covered in small holes… Something is living underground here.",
    "Enormous bones are scattered densely in this area. It’s a graveyard where large beasts come to die.",
    "A set of standing stones with intricate carvings cut into them. When the wind blows a certain way, the stones make a low humming sound that can be heard from miles away. The sound fills anyone that can here it with dread and despair.",
    "A small dark cave with with an extremely narrow crack in the floor, with steam billowing out. Due to the nature of the steam and the shape of the cave, it creates a low whistling sound at all times of the day.",
    "A magical Island that is invisible to those who don’t or can’t use magic; because of this may ship captains have crushed on its beach with no survivors due to the island’s security system. From the outside the island appears to a cluster of destroyed ships that have created a ring around the island, but when most captains see this mysterious landmark they write it off as ships running aground on a reef.",
    "The ruins of a Tower once connected to a series of watch stations that surround this area or did in the ancient world. There are several of these towers, each with their own secrets.",
    "An area of land in a forest where no plants can grow.",
    "A Forest with many small trees with 1 very large tree in the center of the same species.",
    "A pond of water that rotates one direction in the morning and the other direction in the evening.",
    "Cliff Face that appears to have a large portion removed by a giant bite.",
    "A tall rock formation with two boulders at the bottom… Totally not phallic… (It is).",
    "A small statue of a hooded sitting hunched figure that always points slightly northwest.",
    "A large stone monolith towering upon a hillside. Along the back, a single rune written in charcoal and in the language of giants, the symbol for “help”.",
    "A dried up river or stream, with the remains of a long forgotten exodus. Bones stick up through the mud at strange angles.",
    "A small chasm cutting across an otherwise open field.",
    "Two tall pines holding up the skeletal remains of a behemoth.",
    "A massive multi-faceted field of quartz.",
    "The Award-Winning Fjords of Slartibartfast: They’re fjords, they’re incredibly beautiful, and they’ve won awards for being incredibly beautiful. Can be used for hidden bases, surprise attacks from the cliffs above to the passages of water below, a suddenly dangerous yet exciting end of a chase off the edge of one of the cliffs, or just a pleasant boat ride.",
    "A roughly circular depression overgrown with strangely warped vegetation. The very middle is raised and bare rock looking almost like cracked dark glass.",
    "Two trees, an ash and an elm which have grown up so close that they spiral around each other as they grew trunks and branches pressed together and entwined.",
    "The Stone Queen’s Bed: A stone giant made the mistake of picking a fight with a pack of druids. Rooted and slammed into the earth they planted Somnus trees all around the raised crater. The constant stream of pollen keeps her in a perpetual dream state.",
    "The Volcano Coral Tubes: A sulphuric smoke constantly rises from these inhospitable series of rock tubes. Large filter feeding red fronds rake the air in an effort to capture nutrients from the plumes of smoke. Glows red and attracts lightning strikes.",
    "Morla’s Daughter: In the middle of a swamp is a lone mountain with a small town at the top. There is something weird about the tortle settlement that leads visitors to think they are hiding something…even the mountain is shaped like a turtle shell.",
    "A sudden 12ft escarpment running roughly north-south for as far as the eye can see. Almost as if the all the land to the east as far as the sea had suddenly dropped 4 yards overnight.",
    "A region of open sand dunes a half days hike across and several days hike long that has swallowed a northern rainforest. Only the tops of verdant hills peek through like tree islands in an ocean of sand.",
    "A weathered treestump about the height of a man. Dozens of age-tarnished coins have been hammered into one side of the stump.",
    "A large black obelisk stationed in the middle of a small island that is within what is now a lake. A river eroded the area and over the course of time the river carved out a small lake around the obelisk.",
    "A small cave at the start of river or brook. Inside the cave is small oasis, a waterfall, pool of crisp clear water, and flowering vines crawling up the walls leading to a an opening that lets in sunlight.",
    "An old tree with a fox shaped canopy when viewed from the South East.",
    "A small clearing between some rocks, with three sitting petrified trolls, with horrified looks in their faces.",
    "Two extremely close peaks with a river flowing between them. Looks like a mountain that was cut in half by the water.",
    "A big colorful crystal coming out of the ground, that separates the light that comes through it, creating miniature rainbows.",
    "A tiny volcano, that spews small embers, burning the vegetation directly next to it.",
    "Huge bones are in the area, sticking out from ground. An elephant could fit in the middle of them. They belonged to the abdomen of a really large creature.",
    "A giant’s skeleton on the side of a cliff. A large sword still stuck through it’s chest.",
    "A flooded pit quarry; standing neck-deep in the murky green water is the 75′ statue of a human king, his features fixed in a contemptuous snarl. Birds nest in his nostrils.",
    "Tar Pits rumored to have claimed the lives of various monstrosities.",
    "A winding path of high ground through a swamp, called the Witches Walk",
    "A tall rock surrounded by 20 evenly spaced smaller rocks. The smaller rocks have ancient number tunes on them, this structure is clearly some ancient sundial.",
    "A statue of a panicked witch in between a fork in the road.",
    "A pine tree that curves wildly. They say if you listen closely for a while you can hear the wails of the ghost trapped inside.",
    "A pit that is at least 50 feet deep. The bottom is always obscured in the darkest shadow.",
    "Native hobgoblin burial ground that brings pets back to life with the fiend subtype added. Anything you bury will come back and try to kill you. (A groundskeeper named Sking optional.)",
    "Three treefolk have pinned down a stone golem. Roots have all but immobilized the once rampaging construct. It’s been 100 years since the battle and the treefolk are still sleepy from all the action.",
    "A soda geyser field that shoots out carbonated water out of the ground. Could be very profitable with anyone thinking of selling goodberry/fruit tonics the next town over.",
    "A group of islands with a mountain range in them. From the distance the peaks resemble a dragon’s claw emerging from the sea.",
    "What appears to be a puddle is actually a 30 foot deep pool of water with a 10 foot radius. Upon diving under, it appears to be full of tropical ocean life, and those submerged can hear what sounds like waves crashing on the surface.",
    "An invisible mountain. The only way this mountain is visible is by a seemingly floating waterfall beginning at 50 feet in the sky. (it is coming from a cave in the mountain.)",
    "A twenty foot high mushroom, enclosed in a circle of smaller mushrooms of varying heights(up to 5 feet). A history check reveals this location to have been home to a giant toad who would rest on the largest mushroom. Occasionally a ghostly ribbit pierces the air.",
    "A snow-covered field that looks flat, but the powdery snow covers up areas that are much deeper than expected. Heavy creatures could fall chest-deep (or worse) at any time.",
    "A small tropical oasis that exists year-round in the middle of a frozen tundra.",
    "Something about the weather of this place makes it rain perpetually.",
    "A volcano that is constantly spewing forth smoke. It’s never erupted, however.",
    "A swamp that experiences daily earth-tremors. When these happen, the water drains briefly and then refills over the next day.",
    "A clear, cold mountain spring that releases the same liquid as a healing potion. When the liquid has been out of the spring for more than an hour, it becomes normal water.",
    "The Drow Stone – Jutting at an odd angle off the side of the path is a towering pillar of stone which is made of a dark glass like material. Stories abound of how it marks the entrance to the Underdark, however, it’s simply Volcanic glass from an ancient volcano.",
    "The Salt Chasm – Rock shafts, split into hexagonal patterns, known as Columnar Basalt pervade this small valley. Their presence precludes the growth of any significant plant life.",
    "The Cascading Quagmire – a series of shallow broad drops in a slow moving swamp river. The combination of floating peat moss and thick algal blooms makes what would be waterfalls instead a viscous slime dribble.",
    "“Howlker’s Rise” A naturally formed column of earth and stone that is only around 75 feet in diameter with a roughly circular shape, but goes up almost 300 feet straight up. It is covered in moss, plants and even a few sideway-growing trees, it is said to have a lake on top and has a plunging waterfall that goes from the top all the way down to the pond at is souther footside. The climb is brutal. A Dwarven man named Howlker Dirtnose is said to have lived a top it for a time, after finding some very tricky caverns leading upwards along the inside of it, but no one ever manages to even find an entrance.",
    "The Lonely Sentinel: A massive oak tree stands alone in a vast field, not far from a cliffside overlooking the sea. It bears the scars of numerous lightning strikes and more than one attempt to chop it down, but it is still healthy and strong.",
    "A natural bridge of dirt that goes over a wide area of reed thicket marshes. The wind slowly sways the cat tails and tall grasses as squishing sounds and croaks can be heard from either side of the bridge.",
    "A very large tree covered in clear stones. If a creature of good approaches the tree, the stones and the leaves will grow green and blue, and flowers bloom on the tree. Neutral creatures makes them turn brown and orange. An evil creature makes them turn dark purple and red. Unaligned creatures make them turn different shades of gray.",
    "A bush that seems unaffected by the wind. If a lawful creature approaches the bush, the feeding of a calm wind will pass both the bush and the creature. A neutral creature will cause a moderately strong wind to affect the two. A chaotic creature causes hurricane level winds to hit both of them.",
    "A cave full of phosphorescent mushrooms that glow at night."
]
},{}],6:[function(require,module,exports){
module.exports=[
    "Chews tobacco",
    "Smokes",
    "Allergic to {food/dust/pollen/animals}",
    "Always arrives late",
    "Always gives vaguest possible answer",
    "Always has something in hands",
    "Always wears as little as possible",
    "Always wears expensive clothes",
    "Always wears same color",
    "Always wears tattered clothes",
    "Answers questions with questions",
    "Aversion to certain kind of food",
    "Bad breath or strong body odor",
    "{Bad/Loud/Annoying/Shrill} laugh",
    "Bad with money",
    "Believes all animals can talk to each other",
    "Bites fingernails",
    "Bites lips",
    "Black eye",
    "Bleeding nose",
    "Blinks constantly",
    "Bruises easily",
    "Burps",
    "Chews with mouth open",
    "Chortles",
    "Clicks tongue",
    "Collects {teeth/hair/claws} of slain opponents",
    "Constantly asks for divine advice",
    "Covered in sores, boils, or a rash",
    "Cracks knuckles",
    "Dandruff",
    "Dirty",
    "Distinctive jewelry",
    "Distracted easily during conversations",
    "Double-checks everything",
    "Drones on and on while talking",
    "Easily confused",
    "Enjoys own body odor",
    "Exaggerates",
    "Excessive body hair",
    "Fidgets",
    "Finishes others' sentences",
    "Flatulent",
    "Flips a coin",
    "Foams at mouth when {excited/angry}",
    "Freckled",
    "Gesticulates wildly",
    "Giggles",
    "Grins evilly",
    "Hands shake",
    "Hacking cough",
    "Has nightmares",
    "Hates animals",
    "Hates children",
    "Hates quiet pauses in conversations",
    "Hiccoughs",
    "Hook for a hand",
    "Hums",
    "If unable to recall word, stops conversation and will not give up until can finally remember it",
    "Imaginary friend",
    "Interrupts others",
    "Jumps conversation topics",
    "Laughs at own jokes",
    "Lazy eyed",
    "Leers",
    "Likes to arm wrestle",
    "Limps",
    "Loves animals",
    "Loves children",
    "Loves the sea and ships",
    "Makes up words",
    "Mispronounces names",
    "Missing finger",
    "Mutters",
    "Needs story before sleeping",
    "Nervous cough",
    "Nervous eye twitch",
    "Nervous muscle twitch",
    "Paces",
    "Peg-legged",
    "Perfumed",
    "Picks fights",
    "Picks at fingernails",
    "Picks nose",
    "Picks scabs",
    "Picks at teeth",
    "Plays practical jokes",
    "Plays with hair",
    "Plays with own jewelry",
    "{Pokes/Taps} others with finger",
    "Predilection for certain kind of food",
    "Prefers to be called by last name",
    "Puts garlic on all food",
    "Reads constantly, especially when inappropriate",
    "Refuses to let anyone walk behind them",
    "Refuses to sit in chairs",
    "Repeats same phrase over and over",
    "Rolls eyes when {bored/annoyed}",
    "Scratches",
    "Sharpens weapon",
    "Shivers",
    "Sings",
    "Sleeps late",
    "Sleeps nude",
    "Smiles when {angry/annoyed}",
    "Sneers",
    "Sneezes",
    "Sniffles",
    "Spits",
    "Squeamish",
    "Stands very close",
    "Stares",
    "Sucks teeth",
    "Sun-burned",
    "Swears profusely",
    "Sweaty",
    "Talks about self in third-person",
    "Talks to inanimate objects",
    "Talks to self",
    "Talks with food in mouth",
    "Taps feet",
    "Taps fingers",
    "Taunts foes",
    "Thinks they are very lucky",
    "Thinks they can speak a language they can't",
    "Tone-deaf",
    "Touches people while talking to them",
    "Turns every conversation into story about self",
    "Unable to figure out which color clothes match",
    "Unable to let a joke die",
    "Unable to remember names",
    "Unexplained dislike for certain organization",
    "Urinates frequently",
    "Uses wrong word and refuses to acknowledge correct word",
    "Warts",
    "Wears flamboyant or outlandish clothes",
    "Wears hat or hood",
    "Wears only jewelry of one type of metal",
    "Wets bed",
    "Whistles",
    "Achluophobic (afraid of darkness)",
    "Agoraphobic (afraid of open spaces)",
    "Altophobic (afraid of heights)",
    "Claustrophobic (afraid of small spaces)",
    "Drools",
    "Entomophobic (afraid of insects)",
    "Excessively clean",
    "Facial tic",
    "Haphephobic (afraid of being touched)",
    "Hallucinates",
    "Hemaphobic (afraid of blood)",
    "Hydrophobic (afraid of water)",
    "Insomniac",
    "Narcoleptic",
    "Pathological liar",
    "Picks at lint or dirt on others' clothes",
    "Obsessive gambler",
    "Ophidiophobic (afraid of snakes)",
    "Ornithophobic (afraid of birds)",
    "Short attention span"
  ]
},{}],7:[function(require,module,exports){
module.exports=[
    "I killed my family.",
    "I have an obvious tell when I lie.",
    "Nobody can know anything about my history, as they will inevitably use it against me.",
    "I always keep a hand on my coin purse, and my weapon",
    "I always position myself so that I can see everyone, and every entrance and exit in the room.",
    "Paranoid doesn't even begin to describe me.",
    "I let down my guard around friends, and am usually unprepared if anything happens.",
    "I rely on my friends for almost everything, because I don't trust myself.",
    "I don't have any flaws. I am perfect (In my eyes).",
    "I'm the smartest one here, and don't let anyone else tell you otherwise.",
    "I can't stand still for longer than ten seconds.",
    "I find it hard to concentrate on one thing, and often find my mind wandering.",
    "I am invincible!",
    "I am mortal. Everything and Everything can kill me. Please help.",
    "I have crippling depression, but I try to hide it.",
    "I seem to lose everything good in my life.I am hesitant about new things.",
    "I'm not trustworthy, and I don't like it when people depend on me.",
    "I try and save everyone, even if they are a lost cause.",
    "I have nightmares about a mistake I made, and have vowed never to let it happen again.",
    "I will often take anything valuable that isn't bolted down. And some things that are.",
    "I'm horribly awkward in social situations, despite my best efforts.",
    "I'm afraid to spend money. What if I need it later?",
    "I always take charge of the situation, especially when someone else is meant to.",
    "I am extremely jealous of everyone for one thing or another.",
    "I don't take orders well. I work alone.",
    "I hate those who differ from my opinions.",
    "I don't care if I kill. We all die eventually... right?",
    "Don't get on my bad side. If you do... Well, just watch out, OK?",
    "I am always smug and self centred.",
    "I make a joke out of everything.",
    "I speak very loudly, and have a tendency to yell.",
    "Once I set my mind on something, nothing can stop me, even a God.",
    "I am extremely belligerent towards another race.",
    "I dont' need help. Must I do everything myself?",
    "No one appreciates me. I'm useless.",
    "I am oblivious to my surroundings.",
    "I can often too enamored with alcohol.",
    "I have a really bad habit I can't break.",
    "I won't let myself feel emotions.",
    "I can't let others see my inner turmoil.",
    "I am extremely blunt, and have no tact whatsoever.",
    "I have been cursed, but nobody can know.",
    "I don't like to fully commit myself unless the odds are overwhelmingly in my favour.",
    "I have dyslexia; I find it difficult to read and write.",
    "I am fanatical about my goal or ambition.",
    "Once I start something, I must see it out to the end.",
    "I flirt with everyone. And everything.",
    "If can't help eating everything in sight.",
    "Deep down, I know I only do this for the thrill.",
    "I am extremely erratic in my behavior.",
    "I am the worst hypocrite I've ever met.",
    "We speak in the third person, which can be confusing.",
    "I am idealistic: Everything has a good side.",
    "I am the definition of pessimistic.",
    "I am slow to make new relationships.",
    "I am very impatient. I must have everything immediately.",
    "I am immature, childish, and I don't care.",
    "I take forever to make decisions under pressure.",
    "I have a really bad reputation where I come from",
    "I have a bounty on my head for a crime I didn't commit.",
    "I blamed some one else for a crime, and now they are dead.",
    "I am always ready to run away for my friends.",
    "My first instinct is to hide.",
    "I am judgemental about everyone",
    "I am really clumsy, and really embarased about it.",
    "I talk to myself when i'm alone",
    "I can speak to animals. Or, at least I think I can.",
    "I can't stand the sight of blood.",
    "I hate speaking. It's so... restricted.",
    "I am annoyingly sarcastic.",
    "I am terse and blunt, and only speak when necessary.",
    "I follow my own whims.",
    "I involve myself in everything.",
    "Something terrible happened to me. I tell everyone.",
    "No one wants to know my real story, so I make up a new one each time.",
    "I'm a coward, but I hide it under a guise of arrogance.",
    "I am secretly corrupt, and care only about money., butI want to be better.",
    "Happiness can buy you money. If you sell other people's happiness, that is.",
    "I never start a fair fight.",
    "My favour, once lost, is lost forever.",
    "I have been scarred by an event, and I have trying to forget it for years.",
    "I am a high functioning psycopath.",
    "I am so Naive, I think Owlbears are cuddly.",
    "I am infatuated with magic, and want more of it desperately.",
    "I hate using violence, but I force myself to.",
    "No one can hate you if they don't like you in the first place.",
    "I exaggerate everything, especially pain.",
    "Life is suffering. The only way to end it is to sever all material attachments.",
    "I only carry the bare minimum to survive.",
    "Good deeds are only repaid with bad ones.",
    "In the end, we all die. Nothing we do matters. So what's the point?",
    "When all seems lost, It probably is, so just give up."
]
},{}],8:[function(require,module,exports){
const Races = require('../races');
const Utils = require('../utils');
const Data = require('../data.json')

const generate = (props = {}) => {
    const characterTraitsJson = require('./characterTraits.json');
    const flawsJson = require('./flaws.json');

    const race = props.race ? props.race : Utils.pick(Data.races)
    const name = Races[race]();

    const traits = [];
    const flaws = [];

    Utils.forCount(Utils.rand(1, 3), () => {
        traits.push(Utils.parseTemplate(Utils.pick(characterTraitsJson)));
    });

    Utils.forCount(Utils.rand(1, 2), () => {
        flaws.push(Utils.parseTemplate(Utils.pick(flawsJson)));
    });

    return {
        name,
        race,
        traits,
        flaws
    }
}

const functions = {
    generate
}

module.exports = functions
},{"../data.json":1,"../races":29,"../utils":38,"./characterTraits.json":6,"./flaws.json":7}],9:[function(require,module,exports){
module.exports=[
    "Arjhan",
    "Balasar",
    "Bharash",
    "Donaar",
    "Ghesh",
    "Heskan",
    "Kriv",
    "Medrash",
    "Mehen",
    "Nadarr",
    "Pandjed",
    "Patrin",
    "Rhogar",
    "Shamash",
    "Shedinn",
    "Tarhun",
    "Torinn",
    "Akra",
    "Biri",
    "Daar",
    "Farideh",
    "Harann",
    "Havilar",
    "Jheri",
    "Kava",
    "Korinn",
    "Mishann",
    "Nala",
    "Perra",
    "Raiann",
    "Sora",
    "Surina",
    "Thava",
    "Uadjit"
]
},{}],10:[function(require,module,exports){
module.exports=[
    "Clethtinthiallor",
    "Daardendrian",
    "Delmirev",
    "Drachedandion",
    "Fenkenkabradon",
    "Kepeshkmolik",
    "Kerrhylon",
    "Kimbatuul",
    "Linxakasendalor",
    "Myastan",
    "Nemmonis",
    "Norixius",
    "Ophinshtalajiir",
    "Prexijandilin",
    "Shestendeliath",
    "Turnuroth",
    "Verthisathurgiesh",
    "Yarjerit"
]
},{}],11:[function(require,module,exports){
module.exports=[
    "{$first} {$last}"
]
},{}],12:[function(require,module,exports){
module.exports=[
    "Adrik",
    "Alberich",
    "Baern",
    "Barendd",
    "Brottor",
    "Bruenor",
    "Dain",
    "Darrak",
    "Delg",
    "Eberk",
    "Einkil",
    "Fargrim",
    "Flint",
    "Gardain",
    "Harbek",
    "Kildrak",
    "Morgran",
    "Orsik",
    "Oskar",
    "Rangrim",
    "Rurik",
    "Taklinn",
    "Thoradin",
    "Thorin",
    "Tordek",
    "Traubon",
    "Travok",
    "Ulfgar",
    "Veit",
    "Vondal",
    "Amber",
    "Artin",
    "Audhild",
    "Bardryn",
    "Dagnal",
    "Diesa",
    "Eldeth",
    "Falkrunn",
    "Finellen",
    "Gunnloda",
    "Gurdis",
    "Helja",
    "Hlin",
    "Kathra",
    "Kristryd",
    "Ilde",
    "Liftrasa",
    "Mardred",
    "Riswynn",
    "Sannl",
    "Torbera",
    "Torgga",
    "Vistra"
]
},{}],13:[function(require,module,exports){
module.exports=[
    "Balderk",
    "Battlehammer",
    "Brawnanvil",
    "Dankil",
    "Fireforge",
    "Frostbeard",
    "Gorunn",
    "Holderhek",
    "Ironfist",
    "Loderr",
    "Lutgehr",
    "Rumnaheim",
    "Strakeln",
    "Torunn",
    "Ungart"
]
},{}],14:[function(require,module,exports){
arguments[4][11][0].apply(exports,arguments)
},{"dup":11}],15:[function(require,module,exports){
module.exports=[
    "Adran",
    "Aelar",
    "Aramil",
    "Arannis",
    "Aust",
    "Beiro",
    "Berrian",
    "Carric",
    "Enialis",
    "Erdan",
    "Erevan",
    "Galinndan",
    "Hadarai",
    "Heian",
    "Himo",
    "Immeral",
    "Ivellios",
    "Laucian",
    "Mindartis",
    "Paelias",
    "Peren",
    "Quarion",
    "Riardon",
    "Rolen",
    "Soveliss",
    "Thamior",
    "Tharivol",
    "Theren",
    "Varis",
    "Adrie",
    "Althaea",
    "Anastrianna",
    "Andraste",
    "Antinua",
    "Bethrynna",
    "Birel",
    "Caelynn",
    "Drusilia",
    "Enna",
    "Felosial",
    "Ielenia",
    "Jelenneth",
    "Keyleth",
    "Leshanna",
    "Lia",
    "Meriele",
    "Mialee",
    "Naivara",
    "Quelenna",
    "Quillathe",
    "Sariel",
    "Shanairra",
    "Shava",
    "Silaqui",
    "Theirastra",
    "Thia",
    "Vadania",
    "Valanthe",
    "Xanaphia"
]
},{}],16:[function(require,module,exports){
module.exports=[
    "Amakiir",
    "Amastacia",
    "Galanodel",
    "Holimion",
    "Ilphelkiir",
    "Liadon",
    "Meliamne",
    "Naïlo",
    "Siannodel",
    "Xiloscient"
]
},{}],17:[function(require,module,exports){
arguments[4][11][0].apply(exports,arguments)
},{"dup":11}],18:[function(require,module,exports){
module.exports=[
    "Alston",
    "Alvyn",
    "Boddynock",
    "Brocc",
    "Burgell",
    "Dimble",
    "Eldon",
    "Erky",
    "Fonkin",
    "Frug",
    "Gerbo",
    "Gimble",
    "Glim",
    "Jebeddo",
    "Kellen",
    "Namfoodle",
    "Orryn",
    "Roondar",
    "Seebo",
    "Sindri",
    "Warryn",
    "Wrenn",
    "Zook",
    "Bimpnottin",
    "Breena",
    "Caramip",
    "Carlin",
    "Donella",
    "Duvamil",
    "Ella",
    "Ellyjobell",
    "Ellywick",
    "Lilli",
    "Loopmottin",
    "Lorilla",
    "Mardnab",
    "Nissa",
    "Nyx",
    "Oda",
    "Orla",
    "Roywyn",
    "Shamil",
    "Tana",
    "Waywocket",
    "Zanna"
]
},{}],19:[function(require,module,exports){
module.exports=[
    "Beren",
    "Daergel",
    "Folkor",
    "Garrick",
    "Nackle",
    "Murnig",
    "Ningel",
    "Raulnor",
    "Scheppen",
    "Timbers",
    "Turen"
]
},{}],20:[function(require,module,exports){
arguments[4][11][0].apply(exports,arguments)
},{"dup":11}],21:[function(require,module,exports){
module.exports=[
    "{$humanFirst} {$humanLast}",
    "{$elfFirst} {$elfLast}",
    "{$humanFirst} {$elfLast}",
    "{$elfFirst} {$humanLast}"
]
},{}],22:[function(require,module,exports){
module.exports=[
    "{$humanFirst} {$humanLast}",
    "{$humanFirst}",
    "{$orcFirst} {$humanLast}",
    "{$orcFirst}"
]
},{}],23:[function(require,module,exports){
module.exports=[
    "Alton",
    "Ander",
    "Cade",
    "Corrin",
    "Eldon",
    "Errich",
    "Finnan",
    "Garret",
    "Lindal",
    "Lyle",
    "Merric",
    "Milo",
    "Osborn",
    "Perrin",
    "Reed",
    "Roscoe",
    "Wellby",
    "Andry",
    "Bree",
    "Callie",
    "Cora",
    "Euphemia",
    "Jillian",
    "Kithri",
    "Lavinia",
    "Lidda",
    "Merla",
    "Nedda",
    "Paela",
    "Portia",
    "Seraphina",
    "Shaena",
    "Trym",
    "Vani",
    "Verna"
]
},{}],24:[function(require,module,exports){
module.exports=[
    "Brushgather",
    "Goodbarrel",
    "Greenbottle",
    "High-hill",
    "Hilltopple",
    "Leagallow",
    "Tealeaf",
    "Thorngage",
    "Tosscobble",
    "Underbough"
]
},{}],25:[function(require,module,exports){
arguments[4][11][0].apply(exports,arguments)
},{"dup":11}],26:[function(require,module,exports){
module.exports=[
    "Aseir",
    "Bardeid",
    "Haseid",
    "Khemed",
    "Mehmen",
    "Sudeiman",
    "Zasheir",
    "Atala",
    "Ceidil",
    "Hama",
    "Jasmal",
    "Meilil",
    "Seipora",
    "Yasheira",
    "Zasheida",
    "Darvin",
    "Dorn",
    "Evendur",
    "Gorstag",
    "Grim",
    "Helm",
    "Malark",
    "Morn",
    "Randal",
    "Stedd",
    "Arveene",
    "Esvele",
    "Jhessail",
    "Kerri",
    "Lureene",
    "Miri",
    "Rowan",
    "Shandri",
    "Tessele",
    "Bor",
    "Fodel",
    "Glar",
    "Grigor",
    "Igan",
    "Ivor",
    "Kosef",
    "Mival",
    "Orel",
    "Pavel",
    "Sergor",
    "Alethra",
    "Kara",
    "Katernin",
    "Mara",
    "Natali",
    "Olma",
    "Tana",
    "Zora",
    "Ander",
    "Blath",
    "Bran",
    "Frath",
    "Geth",
    "Lander",
    "Luth",
    "Malcer",
    "Stor",
    "Taman",
    "Urth;",
    "Amafrey",
    "Betha",
    "Cefrey",
    "Kethra",
    "Mara",
    "Olga",
    "Silifrey",
    "Westra",
    "Aoth",
    "Bareris",
    "Ehput-Ki",
    "Kethoth",
    "Mumed",
    "Ramas",
    "So-Kehur",
    "Thazar-De",
    "Urhur;",
    "Arizima",
    "Chathi",
    "Nephis",
    "Nulara",
    "Murithi",
    "Sefris",
    "Thola",
    "Umara",
    "Zolis",
    "Borivik",
    "Faurgar",
    "Jandar",
    "Kanithar",
    "Madislak",
    "Ralmevik",
    "Shaumar",
    "Vladislak",
    "Fyevarra",
    "Hulmarra",
    "Immith",
    "Imzel",
    "Navarra",
    "Shevarra",
    "Tammith",
    "Yuldra",
    "An",
    "Chen",
    "Chi",
    "Fai",
    "Jiang",
    "Jun",
    "Lian",
    "Long",
    "Meng",
    "On",
    "Shan",
    "Shui",
    "Wen;",
    "Bai",
    "Chao",
    "Jia",
    "Lei",
    "Mei",
    "Qiao",
    "Shui",
    "Tai",
    "Anton",
    "Diero",
    "Marcon",
    "Pieron",
    "Rimardo",
    "Romero",
    "Salazar",
    "Umbero;",
    "Balama",
    "Dona",
    "Faila",
    "Jalana",
    "Luisa",
    "Marta",
    "Quara",
    "Selise",
    "Vonda"
]
},{}],27:[function(require,module,exports){
module.exports=[
    "Basha",
    "Dumein",
    "Jassan",
    "Khalid",
    "Mostana",
    "Pashar",
    "Rein",
    "Amblecrown",
    "Buckman",
    "Dundragon",
    "Evenwood",
    "Greycastle",
    "Tallstag",
    "Bersk",
    "Chernin",
    "Dotsk",
    "Kulenov",
    "Marsk",
    "Nemetsk",
    "Shemov",
    "Starag",
    "Brightwood",
    "Helder",
    "Hornraven",
    "Lackman",
    "Stormwind",
    "Windrivver",
    "Ankhalab",
    "Anskuld",
    "Fezim",
    "Hahpet",
    "Nathandem",
    "Sepret",
    "Uuthrakt",
    "Chergoba",
    "Dyernina",
    "Iltazyara",
    "Murnyethara",
    "Stayanoga",
    "Ulmokina",
    "Chien",
    "Huang",
    "Kao",
    "Kung",
    "Lao",
    "Ling",
    "Mei",
    "Pin",
    "Shin",
    "Sum",
    "Tan",
    "Wan",
    "Agosto",
    "Astorio",
    "Calabra",
    "Domine",
    "Falone",
    "Marivaldi",
    "Pisacar",
    "Ramondo"
]
},{}],28:[function(require,module,exports){
arguments[4][11][0].apply(exports,arguments)
},{"dup":11}],29:[function(require,module,exports){
const Utils = require('../utils');
const Data = require('../data.json');

const _generate = (props) => {
    const raceTemplates = require(`./${props.race}/templates.json`)

    if (!raceTemplates) {
        throw new Error(`could not find race templates for ${props.race}`)
    }

    const template = Utils.pick(raceTemplates);

    switch (props.race) {
        case 'dragonborn':
        case 'dwarf':
        case 'elf':
        case 'gnome':
        case 'halfling':
        case 'human':
            return Utils.parseTemplate(template, {
                first: Utils.pick(require(`./${props.race}/first.json`)),
                last: Utils.pick(require(`./${props.race}/last.json`)),
            });
        case 'orc':
            return Utils.parseTemplate(template, {
                first: Utils.pick(require(`./${props.race}/first.json`)),
            });
        case 'half-orc':
            return Utils.parseTemplate(template, {
                humanFirst: Utils.pick(require(`./human/first.json`)),
                humanLast: Utils.pick(require(`./human/last.json`)),
                orcFirst: Utils.pick(require(`./orc/first.json`)),
            });
        case 'half-elf':
            return Utils.parseTemplate(template, {
                humanFirst: Utils.pick(require(`./human/first.json`)),
                humanLast: Utils.pick(require(`./human/last.json`)),
                elfFirst: Utils.pick(require(`./elf/first.json`)),
                elfLast: Utils.pick(require(`./elf/last.json`)),
            });
        case 'tiefling':
            return Utils.parseTemplate(template, {
                humanFirst: Utils.pick(require(`./human/first.json`)),
                humanLast: Utils.pick(require(`./human/last.json`)),
                tieflingFirst: Utils.pick(require(`./tiefling/first.json`)),
            });
    }
}

const sanitise = name => {
    return name;
}

const generate = props => {
    const name = _generate(props);
    return sanitise(name);
}

const functions = {
    generate
}

Data.races.forEach(race => {
    functions[race] = () => generate({ race })
})

module.exports = functions
},{"../data.json":1,"../utils":38,"./elf/first.json":15,"./elf/last.json":16,"./human/first.json":26,"./human/last.json":27,"./orc/first.json":30,"./tiefling/first.json":32}],30:[function(require,module,exports){
module.exports=[
    "Grul",
    "Gruhl",
    "Gral",
    "Grahl",
    "Grel",
    "Grak",
    "Gurk",
    "Gok",
    "Mug",
    "Bhok",
    "Lok",
    "Lohk",
    "Grehl",
    "Dench",
    "Feng",
    "Gell",
    "Henk",
    "Holg",
    "Imsh",
    "Keth",
    "Krusk",
    "Mhurren",
    "Ront",
    "Shump",
    "Thokk",
    "Baggi",
    "Emen",
    "Engong",
    "Kansif",
    "Myev",
    "Neega",
    "Ovak",
    "Ownka",
    "Shautha",
    "Sutha",
    "Vola",
    "Volen",
    "Yevelda"
]
},{}],31:[function(require,module,exports){
module.exports=[
    "{$first}"
]
},{}],32:[function(require,module,exports){
module.exports=[
    "Akmenos",
    "Amnon",
    "Barakas",
    "Damakos",
    "Ekemon",
    "Lados",
    "Kairon",
    "Leucis",
    "Melech",
    "Mordai",
    "Morthos",
    "Pelaios",
    "Skamos",
    "Therai",
    "Thycius",
    "Urmenos",
    "Aranxus",
    "Zhermos",
    "Amrius",
    "Valros",
    "Zerdos",
    "Casira",
    "Zarcis",
    "Kosakas",
    "Dharxus",
    "Guelyre",
    "Arkvir"
]
},{}],33:[function(require,module,exports){
module.exports=[
    "{$humanFirst} {$humanLast}",
    "{$humanFirst}",
    "{$tieflingFirst} {$humanLast}",
    "{$tieflingFirst}"
]
},{}],34:[function(require,module,exports){
const Utils = require('../utils');
const Data = require('../data.json')
const NaturalLandmarks = require('../natural_landmarks.json')

const settlementType = () => {
    return Utils.pick(Data.settlement_types)
}

const population = type => {
    const populationRange = Data.settlement_type_populations[type].split('-');
    const population = Utils.rand(parseInt(populationRange[0]), parseInt(populationRange[1]))

    return population.toLocaleString();
}

const naturalLandmarks = type => {
    const naturalLandmarkCountRange = Data.settlement_type_natural_landmark_count[type].split('-');
    const naturalLandmarks = []

    Utils.forCount(Utils.rand(naturalLandmarkCountRange[0], naturalLandmarkCountRange[1]), () => {
        naturalLandmarks.push(Utils.parseTemplate(Utils.pick(NaturalLandmarks)));
    });

    return naturalLandmarks;
}

const generate = props => {
    const type = settlementType();
    return {
        type,
        population: population(type),
        natural_landmarks: naturalLandmarks(type),
    }
}

const functions = {
    generate
}

module.exports = functions
},{"../data.json":1,"../natural_landmarks.json":5,"../utils":38}],35:[function(require,module,exports){
const Utils = require('../utils');

const generate = storyhookBank => {
    const storyhooks = require(`./${storyhookBank}.json`)
    return Utils.parseTemplate(Utils.pick(storyhooks));
}

const functions = {
    npcActs: () => {
        return generate('npc_acts')
    },
    pcRelated: () => {
        return generate('pc_related')
    },
}

module.exports = functions
},{"../utils":38}],36:[function(require,module,exports){
module.exports=[
    "An NPC takes a {disliking/liking} to {a PC/another NPC}",
    "An NPC is caught palming a weapon by the PCs",
    "An NPC shuffles nervously and suspiciously",
    "An NPC becomes {fearful/angry/scared/terrified}",
    "An NPC {insults/threatens} {a PC/another NPC}"
]
},{}],37:[function(require,module,exports){
arguments[4][36][0].apply(exports,arguments)
},{"dup":36}],38:[function(require,module,exports){
/**
 * pick 1 or more unique values from an array, and return a new array of those picked values
 * 
 * @param {any[]} array an array of values to pick from
 * @param {number} count how many unique array values to pick out
 */
const pick = (array, count = 1) => {
    const arrayCopy = Array.from(array)
    const pickedValues = []

    for (let i = 0; i < count; i++) {
        let pickedIndex = rand(0, arrayCopy.length - 1);
        pickedValues.push(arrayCopy[pickedIndex]);
        arrayCopy.splice(pickedIndex, 1);
    }

    return pickedValues.length === 1 ? pickedValues[0] : pickedValues;
}

/**
 * 
 * 
 * @param {string} string 
 */
const parseTemplate = (string, content = {}) => {
    const regex = /{(.+?)}/gm;

    const matches = string.match(regex);

    if (matches) {
        matches.forEach(match => {
            if (match.charAt(1) === '$') {
                replacementVarName = match.substring(2, match.length-1)
                string = string.replace(match, content[replacementVarName]);
            } else {
                let replacement = pick(match.substring(1).substring(0, match.length - 2).split('/'));
                string = string.replace(match, replacement);
            }
        })
    }

    return string;
}

/**
 * generate a random number between 2 inclusive values
 * 
 * @param {number} min minimum number to return (inclusive)
 * @param {number} max maximum number to return (inclusive)
 */
const rand = (min, max) => {
    min = parseInt(min);
    max = parseInt(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * 
 * @param {number} number 
 * @param {function} func 
 */
const forCount = (number, func) => {
    for (let i = 0; i < number; i++) {
        func();
    }
}

module.exports = {
    pick,
    parseTemplate,
    rand,
    forCount
}
},{}]},{},[3]);
