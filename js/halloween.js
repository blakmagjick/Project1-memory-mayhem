// Project 1 - Memory Mayhem

// Empty Arrays
cardsPicked = []
cardsPickedId = []
matchedCards = []

const halloween = {
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
    pic: 'halloween-images/witch.png',
    }
    ]
}

let game = new MemoryGame(halloween)
game.creatingBoard()
