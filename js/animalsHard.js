// Project 1 - Memory Mayhem

// Empty Arrays
cardsPicked = []
cardsPickedId = []
matchedCards = []

const animalsHard = {
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
    },
    {
    card: 'hedgehog',
    pic: 'animal-images/hedgehog.png'
    },
    {
    card: 'hedgehog',
    pic: 'animal-images/hedgehog.png'
    },
    {
    card: 'koala',
    pic: 'animal-images/koala.png'
    },
    {
    card: 'koala',
    pic: 'animal-images/koala.png'
    },
    {
    card: 'lemur',
    pic: 'animal-images/lemur.png'
    },
    {
    card: 'lemur',
    pic: 'animal-images/lemur.png'
    },
    {
    card: 'parrot',
    pic: 'animal-images/parrot.png'
    },
    {
    card: 'parrot',
    pic: 'animal-images/parrot.png'
    },
    {
    card: 'peacock',
    pic: 'animal-images/peacock.png'
    },
    {
    card: 'peacock',
    pic: 'animal-images/peacock.png'
    },
    {
    card: 'prairedog',
    pic: 'animal-images/prairedog.png'
    },
    {
    card: 'prairedog',
    pic: 'animal-images/prairedog.png'
    },
    {
    card: 'rabbit',
    pic: 'animal-images/rabbit.png'
    },
    {
    card: 'rabbit',
    pic: 'animal-images/rabbit.png'
    },
    {
    card: 'raccoon',
    pic: 'animal-images/raccoon.png'
    },
    {
    card: 'raccoon',
    pic: 'animal-images/raccoon.png'
    },
    {
    card: 'squirrel',
    pic: 'animal-images/squirrel.png'
    },
    {
    card: 'squirrel',
    pic: 'animal-images/squirrel.png'
    } 
]
}

let game = new MemoryGame(animalsHard)
game.creatingBoard()

const audio = new Audio('music/Borrtex - Animals.mp3')

animalMusic = () => {
    audio.play()
}
stopAnimalMusic = () => {
    audio.pause()
}
