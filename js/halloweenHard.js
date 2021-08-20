// Project 1 - Memory Mayhem

// Empty Arrays
let cardsPicked = []
let cardsPickedId = []
let matchedCards = []

const halloweenHard = {
    background: 'Front-Back/halloBack.png',
    cards: [
    {
    card: 'cat', 
    pic: 'halloween-images/cat.png'
    },
    {
    card: 'cat',
    pic: 'halloween-images/cat.png'
    },
    {
    card: 'catnghost',
    pic: 'halloween-images/catnghost.png'
    },
    {
    card: 'catnghost',
    pic: 'halloween-images/catnghost.png'
    },
    {
    card: 'ghost',
    pic: 'halloween-images/ghost.png'
    },
    {
    card: 'ghost',
    pic: 'halloween-images/ghost.png'
    },
    {
    card: 'pumpkin',
    pic: 'halloween-images/pumpkin.png'
    },
    {
    card: 'pumpkin',
    pic: 'halloween-images/pumpkin.png'
    },
    {
    card: 'trickotreat',
    pic: 'halloween-images/trickotreat.png'
    },
    {
    card: 'trickotreat',
    pic: 'halloween-images/trickotreat.png'
    },
    {
    card: 'witch',
    pic: 'halloween-images/witch.png'
    },
    {
    card: 'witch',
    pic: 'halloween-images/witch.png'
    },
    {
    card: 'candycorn',
    pic: 'halloween-images/candycorn.png',
    },
    {
    card: 'candycorn',
    pic: 'halloween-images/candycorn.png'
    },
    {
    card: 'catmoon',
    pic: 'halloween-images/catmoon.png',
    },
    {
    card: 'catmoon',
    pic: 'halloween-images/catmoon.png'
    },
    {
    card: 'creepycute',
    pic: 'halloween-images/creepycute.png',
    },
    {
    card: 'creepycute',
    pic: 'halloween-images/creepycute.png'
    },
    {
    card: 'halloweenghost',
    pic: 'halloween-images/halloweenghost.png',
    },
    {
    card: 'halloweenghost',
    pic: 'halloween-images/halloweenghost.png'
    },
    {
    card: 'halloweenkitty',
    pic: 'halloween-images/halloweenkitty.png',
    },
    {
    card: 'halloweenkitty',
    pic: 'halloween-images/halloweenkitty.png'
    },
    {
    card: 'happyghost',
    pic: 'halloween-images/happyghost.png',
    },
    {
    card: 'happyghost',
    pic: 'halloween-images/happyghost.png'
    },
    {
    card: 'hauntedhouse',
    pic: 'halloween-images/hauntedhouse.png',
    },
    {
    card: 'hauntedhouse',
    pic: 'halloween-images/hauntedhouse.png'
    },
    {
    card: 'kittypumpkin',
    pic: 'halloween-images/kittypumpkin.png',
    },
    {
    card: 'kittypumpkin',
    pic: 'halloween-images/kittypumpkin.png'
    },
    {
    card: 'skellypumpkin',
    pic: 'halloween-images/skellypumpkin.png',
    },
    {
    card: 'skellypumpkin',
    pic: 'halloween-images/skellypumpkin.png'
    }
    ]
}

let game = new MemoryGame(halloweenHard)
game.creatingBoard()

const audio = new Audio('music/Thisquietarmy - As the Creatures Unravel from Within_Vampyr.mp3')

halloweenMusic = () => {
    audio.play()
}
stopHalloweenMusic = () => {
    audio.pause()
}