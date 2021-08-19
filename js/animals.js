// Project 1 - Memory Mayhem

// Empty Arrays
cardsPicked = []
cardsPickedId = []
matchedCards = []

const animals = {
    background: 'Front-Back/animal background.png', 
    cards: [
    {
    card: 'cardinal', 
    pic: 'animal-images/cardinal.png'
    },
    {
    card: 'cardinal',
    pic: 'animal-images/cardinal.png'
    },
    {
    card: 'cat',
    pic: 'animal-images/cat.png'
    },
    {
    card: 'cat',
    pic: 'animal-images/cat.png'
    },
    {
    card: 'fox',
    pic: 'animal-images/fox.png'
    },
    {
    card: 'fox',
    pic: 'animal-images/fox.png'
    },
    {
    card: 'owl',
    pic: 'animal-images/owl.png'
    },
    {
    card: 'owl',
    pic: 'animal-images/owl.png'
    },
    {
    card: 'sloth',
    pic: 'animal-images/sloth.png'
    },
    {
    card: 'sloth',
    pic: 'animal-images/sloth.png'
    },
    {
    card: 'turtle',
    pic: 'animal-images/turtle.png'
    },
    {
    card: 'turtle',
    pic: 'animal-images/turtle.png',
    }
]
}

let game = new MemoryGame(animals)
game.creatingBoard()